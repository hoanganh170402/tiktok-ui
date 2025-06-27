import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import img from '~/assets/images';
import styles from './SuggestAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => (
        <div className={cx('preview')} {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive placement="bottom" offset={[-5, 0]} delay={[500, 0]} render={renderPreview}>
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
            </Tippy>
        </div>
    );
}

export default AccountItem;
