import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import img from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img src={img.defauleAvatar} alt="" className={cx('avatar')} />
                <Button className={cx('follow-btn')} primary>
                    Following
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>lanlacontrai</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>Nguyen Quang Lan</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>8.2M</strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>8.2M</strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
