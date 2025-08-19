import classNames from 'classnames/bind';

import styles from './Overlay.module.scss';
import { CloseIcon } from '~/components/Icons';
import ActionList from './ActionList';
import CopyInput from '~/components/CopyInput';

const cx = classNames.bind(styles);

function Overlay({ onClose, data }) {
    return (
        <div className={cx('overlay')} onClick={onClose}>
            <div className={cx('content')} onClick={(e) => e.stopPropagation()}>
                <header className={cx('share-header')}>
                    <span className={cx('heading')}>Share To</span>
                    <button className={cx('close-btn')} onClick={onClose}>
                        <CloseIcon className={cx('close-icon')} />
                    </button>
                </header>

                <CopyInput data={data} />

                {/* Action list */}
                <ActionList />
            </div>
        </div>
    );
}

export default Overlay;
