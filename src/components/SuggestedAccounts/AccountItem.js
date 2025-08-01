import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';


import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
import { PopperWrapper } from '../Popper';
import Image from '~/components/Image';
import { TickIcon } from '../Icons';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    const accountPreview = (props) => (
        <div className={cx('preview')} {...props}>
            <PopperWrapper>
                <AccountPreview data={data} />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <HeadlessTippy interactive delay={[500, 0]} offset={[-6, 0]} placement="bottom" render={accountPreview}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <TickIcon className={cx('check')} />}
                        </p>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default AccountItem;
