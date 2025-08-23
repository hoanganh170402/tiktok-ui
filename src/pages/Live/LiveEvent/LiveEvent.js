import classNames from 'classnames/bind';

import styles from './LiveEvent.module.scss';
import { CalendarIcon, OclockIcon, TickIcon } from '~/components/Icons';
import Button from '~/components/Button';
import Separate from '~/components/Separate';
import img from '~/assets/images';

const cx = classNames.bind(styles);

const INFO_EVENT = [
    {
        logo: 'Live',
        description: 'SHARING BUSINESSE IDEAS LIVE :)',
        ava: img.defauleAvatar,
        name: 'NMZ3297',
        tick: true,
        count: '474.6k',
        day: 'Chủ nhật, Th09 14, 2025',
        time: '10:00 PM - 1:00 AM',
    },
    {
        logo: 'Live',
        description: 'A Very Laufey Day 2025',
        ava: img.defauleAvatar,
        name: 'laufey',
        tick: false,
        count: '8.9M',
        day: 'Thứ hai, Th08 25, 2025',
        time: '8:30 AM - 9:30 AM',
    },
];
function LiveEvent({ title }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h2> {title} </h2>
                <a href="/" target="_blank">
                    See more
                </a>
            </header>
            <div className={cx('list')}>
                {INFO_EVENT.map((data, index) => (
                    <div key={index} className={cx('item')}>
                        <div className={cx('des-wrapper')}>
                            <div className={cx('logo')}>{data.logo}</div>
                            <div className={cx('description')}>{data.description}</div>
                        </div>
                        <div className={cx('info-wrapper')}>
                            <div className={cx('info')}>
                                <img className={cx('ava')} alt="" src={data.ava} />
                                <span> {data.name} </span>
                                {data.tick && <TickIcon className={cx('check')} />}
                            </div>
                            <Separate width="0.5px" height="16px" margin="0" marginLeft="6px" marginRight="6px" />
                            <div className={cx('count')}>{data.count} Followers </div>
                        </div>
                        <div className={cx('time-wrapper')}>
                            <div className={cx('day')}>
                                <CalendarIcon className={cx('icon')} />
                                <span> {data.day} </span>
                            </div>
                            <div className={cx('time')}>
                                <OclockIcon className={cx('icon')} />
                                <span> {data.time} </span>
                            </div>
                        </div>
                        <Button
                            primary
                            style={{
                                height: '32px',
                                minWidth: '140px',
                                borderRadius: '5px',
                            }}
                        >
                            Subscribe
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LiveEvent;
