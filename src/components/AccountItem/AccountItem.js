import { z } from 'zod';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

// Define the schema for the data prop using zod
const dataSchema = z.object({
    avatar: z.string(),
    full_name: z.string(),
    nickname: z.string(),
    tick: z.boolean().optional(),
});

function AccountItem({ data }) {
    const result = dataSchema.safeParse(data);

    if (!result.success) {
        console.error('[AccountItem] ❌ Invalid data prop:', result.error.format());
        return null;
    }

    // console.log('result:', result);

    let successData = result.data;

    return (
        <Link to={`/@${successData.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={successData.avatar} alt={successData.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{successData.full_name}</span>
                    {successData.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('username')}>{successData.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
