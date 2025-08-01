import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AcctountItem({ data, ...props }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')} {...props}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick ? <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /> : undefined}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AcctountItem;
