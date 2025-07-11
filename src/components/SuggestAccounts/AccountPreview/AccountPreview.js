import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('ava')} src={data.avatar} alt="" />
                <Button primary>Following</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </p>
                <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
            </div>
            <div className={cx('analytics')}>
                <strong className={cx('value')}>{data.followers_count}</strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>{data.likes_count}</strong>
                <span className={cx('label')}>Likes</span>
            </div>
        </div>
    );
}

export default AccountPreview;
