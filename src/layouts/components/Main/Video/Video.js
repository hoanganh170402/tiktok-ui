import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

import {
    BookmarkIcon,
    CommentIcon,
    FollowIcon,
    LikeIcon,
    MusicIcon,
    PlayIcon,
    ShareIcon,
    TickIcon,
    UnFollowIcon,
} from '~/components/Icons';

import styles from './Video.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function Video({ data }) {
    const user = data.user;

    // State để quản lý show more/less
    const [isExpanded, setIsExpanded] = useState(false);

    // Quan lý video và tiến trình
    const videoRef = useRef(null);
    const [progress, setProgress] = useState(0);

    // Quản lý trạng thái phát video
    const [isPlaying, setIsPlaying] = useState(false);

    // Show icons
    const [showStatusIcon, setShowStatusIcon] = useState(null); // null | 'play' | 'pause'

    // Kiểm tra độ dài description
    const maxLength = 40; // Số ký tự tối đa khi thu gọn
    const isLongDescription = data.description.length > maxLength;

    // Lấy text hiển thị
    const displayText = isExpanded
        ? data.description
        : data.description.slice(0, maxLength) + (isLongDescription ? '...' : '');

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        // Hàm cập nhập tiến độ video
        const handleTimeUpdate = () => {
            const percent = (videoElement.currentTime / videoElement.duration) * 100;
            setProgress(percent);
        };

        videoElement.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    // Auto play/pause video khi vào/ra khỏi màn hình
    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoElement
                            .play()
                            .then(() => setIsPlaying(true))
                            .catch((err) => console.warn('Không thể tự phát:', err));
                    } else {
                        videoElement.pause();
                        setIsPlaying(false);
                    }
                });
            },
            { threshold: 0.75 }, // Phát khi 75% video nằm trong màn hình
        );

        observer.observe(videoElement);

        return () => {
            observer.unobserve(videoElement);
        };
    }, []);

    // Xử lý toggle
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    // Xử lý phát video
    const handleVideoClick = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
            setShowStatusIcon('play');
        } else {
            video.pause();
            setIsPlaying(false);
            setShowStatusIcon('pause');
        }

        // Ẩn icon sau 0.3s
        setTimeout(() => {
            setShowStatusIcon(null);
        }, 300);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-wrapper')}>
                <video
                    src={data.file_url}
                    className={cx('video')}
                    ref={videoRef}
                    onClick={handleVideoClick}
                    muted
                ></video>
                {showStatusIcon && (
                    <div className={cx('status-icon')}>
                        {showStatusIcon === 'play' ? (
                            <FontAwesomeIcon icon={faPlay} />
                        ) : (
                            <FontAwesomeIcon icon={faPause} />
                        )}
                    </div>
                )}
                <div className={cx('controls')}>controls</div>
                <div className={cx('description')}>
                    <div className={cx('wrapper-nickname')}>
                        <h2 className={cx('nickname')}> {data.user.nickname}</h2>
                        {data.user.tick && <TickIcon className={cx('check')} />}
                    </div>
                    <div className={cx('title', { 'title-more': isLongDescription && isExpanded })}>
                        <p className={cx('title-des')}>{displayText}</p>
                        {isLongDescription && (
                            <button className={cx('toggle-btn')} onClick={handleToggle}>
                                {isExpanded ? ' Less' : ' More'}
                            </button>
                        )}
                    </div>
                    <span className={cx('music')}>
                        <MusicIcon className={cx('music-icon')} />
                        <p className={cx('music-name')}>Trending - Breaking News Background Music - Blaze Records</p>
                    </span>
                    <div className={cx('progress-bar')}>
                        <div className={cx('progress-bar-inner')} style={{ width: `${progress}%` }}></div>
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
