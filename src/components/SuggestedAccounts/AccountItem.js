import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import img from '~/assets/images';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src={img.defauleAvatar} alt="" />
            <div className={cx('item-info')}>
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
