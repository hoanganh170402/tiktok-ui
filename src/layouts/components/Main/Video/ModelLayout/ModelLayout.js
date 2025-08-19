import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ModelLayout.module.scss';
import { CloseIcon, MusicIcon, TickIcon } from '~/components/Icons';
import VideoMenu from '../VideoMenu';
import Button from '~/components/Button';
import ActionModuleList from './ActionModuleList';
import CopyInput from '~/components/CopyInput';

const cx = classNames.bind(styles);

function ModelLayout({
    data,
    onClose,
    src,
    onLikeToggle,
    isLike,
    likes,
    comments,
    onBookmarkToggle,
    isBookmark,
    bookmarks,
}) {
    const user = data.user;
    const description = data.description || '';

    const [isFollow, setIsFollow] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);

    // ✅ thêm state quản lý tab
    const [activeTab, setActiveTab] = useState('comments'); // mặc định là comments

    const handleFollow = () => setIsFollow((prev) => !prev);
    const toggleExpand = () => setIsExpanded((prev) => !prev);

    useEffect(() => {
        if (description.length > 100) {
            setShowToggle(true);
        }
    }, [description]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-wrapper')}>
                <div className={cx('video-tools')}>
                    <button className={cx('close-btn')} onClick={onClose}>
                        <CloseIcon className={cx('close-icon')} />
                    </button>
                    <VideoMenu placement={'top-end'} />
                </div>
                <video src={src} className={cx('video')} autoPlay loop controls muted></video>
            </div>
            <div className={cx('info-wrapper')}>
                <div className={cx('info-user')}>
                    <header className={cx('header')}>
                        <div className={cx('ava-info')}>
                            <Link to={`/${user.nickname}`} className={cx('avatar-link')}>
                                <img src={user.avatar} alt="" className={cx('ava')} />
                            </Link>
                            <Link to={`/${user.nickname}`} className={cx('name-link')}>
                                <div className={cx('nickname')}>
                                    <span>{user.nickname}</span>
                                    {user.tick && <TickIcon className={cx('check')} />}
                                </div>
                                <span className={cx('username')}>{`${user.first_name} ${user.last_name} `}</span>
                            </Link>
                        </div>
                        {isFollow ? (
                            <Button className={cx('fl-btn')} outline onClick={handleFollow}>
                                Following
                            </Button>
                        ) : (
                            <Button className={cx('fl-btn')} primary onClick={handleFollow}>
                                Follow
                            </Button>
                        )}
                    </header>

                    <div className={cx('description', { expanded: isExpanded })}>
                        <span className={cx('title', { expanded: isExpanded })}>{description}</span>
                        {showToggle && (
                            <button className={cx('more-btn')} onClick={toggleExpand}>
                                {isExpanded ? 'less' : 'more'}
                            </button>
                        )}
                    </div>
                    <span className={cx('music')}>
                        <MusicIcon className={cx('music-icon')} />
                        <p className={cx('music-name')}>Trending - Breaking News Background Music - Blaze Records</p>
                    </span>

                    <ActionModuleList
                        onLikeToggle={onLikeToggle}
                        isLike={isLike}
                        likes={likes}
                        comments={comments}
                        onBookmarkToggle={onBookmarkToggle}
                        isBookmark={isBookmark}
                        bookmarks={bookmarks}
                    />

                    <CopyInput data={data} className={cx('custom-inputLink')} text={'Copy link'} />
                </div>

                {/* ✅ switch-btn */}
                <div className={cx('switch-btn')}>
                    <div
                        className={cx('btn', 'cmts-btn', { active: activeTab === 'comments' })}
                        onClick={() => setActiveTab('comments')}
                    >
                        Comments
                    </div>
                    <div
                        className={cx('btn', 'creater-btn', { active: activeTab === 'creator' })}
                        onClick={() => setActiveTab('creator')}
                    >
                        Creator videos
                    </div>
                </div>

                <div className={cx('border-bottom')}></div>

                <div className={cx('comment')}>
                    {activeTab === 'comments' ? (
                        <div className={cx('cmt-title')}>No comment...</div>
                    ) : (
                        <div className={cx('creator-title')}>No videos of creator...</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ModelLayout;
