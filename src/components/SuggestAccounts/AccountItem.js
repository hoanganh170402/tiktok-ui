import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import img from '~/assets/images';
import styles from './SuggestAccount.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img className={cx('ava')} src={img.avaDefault} alt="" />
            <div className={cx('info-item')}>
                <p className={cx('nickname')}>
                    <strong>lanlacontrai</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>

                <p className={cx('name')}>Nguyen Quang Lan</p>
            </div>
        </div>
    );
}

export default AccountItem;
