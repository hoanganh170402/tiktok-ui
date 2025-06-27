import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import img from '~/assets/images';
import AccountPreview from './AccountPreview';
import { PopperWrapper } from '../Popper';

const cx = classNames.bind(styles);
function AccountItem() {
    const accountPreview = (props) => (
        <div className={cx('preview')} {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <HeadlessTippy interactive delay={[500, 0]} offset={[0,0]} placement="bottom" render={accountPreview}>
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
            </HeadlessTippy>
        </div>
    );
}

export default AccountItem;
