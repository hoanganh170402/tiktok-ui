import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './SuggestVideo.module.scss';
import Image from '~/components/Image';
import { LiveActiveIcon } from '~/components/Icons';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

const INIT_PAGE = Math.floor(Math.random() * 10) + 1;

function SuggestVideo({ title, perPage = 6 }) {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.getSuggest({ page: 12, perPage: perPage });
            if (result?.data) {
                setAllUsers(result.data);
            }
        };
        fetchApi();
    }, [perPage]);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h2>{title}</h2>
                <a href="/" target="_blank">
                    See more
                </a>
            </header>
            <div className={cx('video-list')}>
                {allUsers.map((data) => (
                    <div key={data.id} className={cx('video-item')}>
                        <div className={cx('video-wrapper')}>
                            <Image className={cx('video')} src={data.popular_video.thumb_url} />
                            <div className={cx('icon-live')}>
                                <LiveActiveIcon className={cx('live')} />
                            </div>
                        </div>
                        <div className={cx('info-wrapper')}>
                            <Image className={cx('ava')} src={data.avatar} alt="" />
                            <div className={cx('info')}>
                                <span className={cx('description')}> {data.popular_video.description} </span>
                                <span className={cx('nickname')}>{data.nickname}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SuggestVideo;
