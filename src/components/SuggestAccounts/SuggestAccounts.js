import classNames from 'classnames/bind';

import styles from './SuggestAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestAccount({ label, data = [], onShowMore }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <p className={cx('more-btn')} onClick={onShowMore}>
                {data.length >= 10 ? 'See less' : 'See more'}
            </p>
        </div>
    );
}

export default SuggestAccount;
