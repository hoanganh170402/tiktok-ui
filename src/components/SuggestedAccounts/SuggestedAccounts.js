import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data = [], onSeeMore }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}

            {onSeeMore && (
                <p className={cx('more-btn')} onClick={onSeeMore}>
                    {data.length >= 10 ? 'See less' : 'See more'}
                </p>
            )}
        </div>
    );
}

export default SuggestedAccounts;
