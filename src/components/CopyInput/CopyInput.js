import classNames from 'classnames/bind';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ShareLinkIcon } from '~/components/Icons';
import styles from './CopyInput.module.scss';
const cx = classNames.bind(styles);
function CopyInput({ data, className, text }) {
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
        <div className={cx('copy-wrapper', className, { text: text })}>
            <input type="text" value={data.file_url} readOnly className={cx('input-link')} />
            <div className={cx('share-btn')} onClick={handleCopy}>
                {text ? text : <ShareLinkIcon className={cx('share-icon')} />}
            </div>
        </div>
    );
}

export default CopyInput;
