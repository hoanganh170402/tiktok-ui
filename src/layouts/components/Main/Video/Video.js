import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import {
    BookmarkIcon,
    CommentIcon,
    FollowIcon,
    LikeIcon,
    MusicIcon,
    ShareIcon,
    TickIcon,
    UnFollowIcon,
} from '~/components/Icons';

import styles from './Video.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function Video({ data }) {
    console.log(data);
    const user = data.user;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-wrapper')}>
                <video src={data.file_url} className={cx('video')}></video>
                <div className={cx('controls')}>controls</div>
                <div className={cx('description')}>
                    <div className={cx('wrapper-nickname')}>
                        <h2 className={cx('nickname')}> {data.user.nickname}</h2>
                        {data.user.tick && <TickIcon className={cx('check')} />}
                    </div>
                    <div className={cx('title')}>
                        <p className={cx('title-des')}>{data.description}</p>
                        <button>More - less </button>
                    </div>
                    <span className={cx('music')}>
                        <MusicIcon />
                        <p className={cx('music-name')}>Trending - Breaking News Background Music - Blaze Records</p>
                    </span>
                    <div className={cx('progress-bar')}>
                        <div className={cx('progress-bar-inner')}></div>
                    </div>
                </div>
            </div>
            <div className={cx('video-info')}>
                <div className={cx('video-avatar')}>
                    <Image src={user.avatar} className={cx('avatar')} />
                    <div className={cx('avatar-icon')}>
                        {data.user.is_followed ? (
                            <FollowIcon className={cx('icon-follow')} />
                        ) : (
                            <UnFollowIcon className={cx('icon-unFollow')} />
                        )}
                        {/* <UnFollowIcon className={cx('icon-unFollow')} />
                        <FollowIcon className={cx('icon-follow')} /> */}
                    </div>
                </div>
                <div className={cx('info-btn')}>
                    <span className={cx('icon')}>
                        <LikeIcon className={cx('icon-like')} />
                    </span>
                    <span className={cx('info-count')}>{data.likes_count}</span>
                </div>
                <div className={cx('info-btn')}>
                    <span className={cx('icon')}>
                        <CommentIcon className={cx('icon-comment')} />
                    </span>
                    <span className={cx('info-count')}>{data.comments_count}</span>
                </div>
                <div className={cx('info-btn')}>
                    <span className={cx('icon')}>
                        <BookmarkIcon className={cx('icon-bookmark')} />
                    </span>
                    <span className={cx('info-count')}>{data.shares_count}</span>
                </div>
                <div className={cx('info-btn')}>
                    <span className={cx('icon')}>
                        <ShareIcon className={cx('icon-share')} />
                    </span>
                    <span className={cx('info-count')}>{data.views_count}</span>
                </div>
            </div>
        </div>
    );
}

export default Video;
