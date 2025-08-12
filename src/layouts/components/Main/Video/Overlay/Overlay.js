import classNames from 'classnames/bind';
import styles from './Overlay.module.scss';
import { CloseIcon, ShareLinkIcon } from '~/components/Icons';
import ActionList from './ActionList';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function Overlay({ onClose, data }) {
    const handleCopy = () => {
        navigator.clipboard
            .writeText(data.file_url)
            .then(() => {
                toast('Copy Success!', {
                    position: 'top-center',
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    className: cx('my-toast'), // Thêm class để custom
                    transition: Bounce,
                });
            })
            .catch(() => {
                toast.error('Copy Fail!');
            });
    };

    return (
        <div className={cx('overlay')} onClick={onClose}>
            <div className={cx('content')} onClick={(e) => e.stopPropagation()}>
                <header className={cx('share-header')}>
                    <span className={cx('heading')}>Share To</span>
                    <button className={cx('close-btn')} onClick={onClose}>
                        <CloseIcon className={cx('close-icon')} />
                    </button>
                </header>

                <div className={cx('copy-wrapper')}>
                    <input type="text" value={data.file_url} readOnly className={cx('input-link')} />
                    <div className={cx('share-btn')} onClick={handleCopy}>
                        <ShareLinkIcon className={cx('share-icon')} />
                    </div>
                </div>

                {/* Action list */}
                <ActionList />
            </div>
        </div>
    );
}

export default Overlay;
