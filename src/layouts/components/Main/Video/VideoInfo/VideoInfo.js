import classNames from 'classnames/bind';
import styles from '../Video.module.scss';

import { CommentIcon, BookmarkIcon, ShareIcon, FollowIcon, UnFollowIcon, NonLikeIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function VideoInfo({
    user,
    likes,
    comments,
    bookmarks,
    shares,
    views,
    isLike,
    onLikeToggle,
    isBookmark,
    onBookmarkToggle,
    onShareClick,
}) {
    return (
        <div className={cx('video-info')}>
            <div className={cx('video-avatar')}>
                <Image src={user.avatar} className={cx('avatar')} />
                <div className={cx('avatar-icon')}>
                    {user.is_followed ? (
                        <FollowIcon className={cx('icon-follow')} />
                    ) : (
                        <UnFollowIcon className={cx('icon-unFollow')} />
                    )}
                </div>
            </div>
            <div className={cx('info-btn')}>
                <span className={cx('icon')} onClick={onLikeToggle}>
                    <NonLikeIcon className={cx('icon-like', { liked: isLike })} />
                </span>
                <span className={cx('info-count')}>{likes}</span>
            </div>
            <div className={cx('info-btn')}>
                <span className={cx('icon')}>
                    <CommentIcon className={cx('icon-comment')} />
                </span>
                <span className={cx('info-count')}>{comments}</span>
            </div>
            <div className={cx('info-btn')}>
                <span className={cx('icon')} onClick={onBookmarkToggle}>
                    <BookmarkIcon className={cx('icon-bookmark', { bookmarked: isBookmark })} />
                </span>
                <span className={cx('info-count')}>{bookmarks}</span>
            </div>
            <div className={cx('info-btn')}>
                <span className={cx('icon')} onClick={onShareClick}>
                    <ShareIcon className={cx('icon-share')} />
                </span>
                <span className={cx('info-count')}>{views}</span>
            </div>
        </div>
    );
}

export default VideoInfo;
