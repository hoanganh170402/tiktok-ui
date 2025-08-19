// import { useState, useRef, useEffect, useContext } from 'react';
// import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
// import Tippy from '@tippyjs/react/headless'; // different import path!

// import {
//     BookmarkIcon,
//     CommentIcon,
//     FollowIcon,
//     LikeIcon,
//     MoreIcon,
//     MusicIcon,
//     MuteIcon,
//     ShareIcon,
//     TickIcon,
//     UnFollowIcon,
//     UnMuteIcon,
// } from '~/components/Icons';

// import styles from './Video.module.scss';
// import Image from '~/components/Image';
// import { AudioContext } from '~/context/AudioContext';
// import { PopperWrapper } from '~/components/Popper';
// import MenuPreview from './MenuPreview';

// const cx = classNames.bind(styles);

// function Video({ data }) {
//     const user = data.user;

//     // State để quản lý show more/less
//     const [isExpanded, setIsExpanded] = useState(false);

//     // Quan lý video và tiến trình
//     const videoRef = useRef(null);
//     const [progress, setProgress] = useState(0);

//     // Quản lý trạng thái phát video
//     const [isPlaying, setIsPlaying] = useState(false);

//     // Show icons
//     const [showStatusIcon, setShowStatusIcon] = useState(null); // null | 'play' | 'pause'

//     // Quản lý trạng thái mute
//     const { isMuted, setIsMuted, volume, setVolume } = useContext(AudioContext);

//     // Quản lý hover icon âm lượng
//     const [isHoveringVolume, setIsHoveringVolume] = useState(false);

//     // Kiểm tra độ dài description
//     const maxLength = 40; // Số ký tự tối đa khi thu gọn
//     const isLongDescription = data.description.length > maxLength;

//     // Lấy text hiển thị
//     const displayText = isExpanded
//         ? data.description
//         : data.description.slice(0, maxLength) + (isLongDescription ? '...' : '');

//     useEffect(() => {
//         const videoElement = videoRef.current;
//         if (!videoElement) return;

//         // Hàm cập nhập tiến độ video
//         const handleTimeUpdate = () => {
//             const percent = (videoElement.currentTime / videoElement.duration) * 100;
//             setProgress(percent);
//         };

//         videoElement.addEventListener('timeupdate', handleTimeUpdate);

//         return () => {
//             videoElement.removeEventListener('timeupdate', handleTimeUpdate);
//         };
//     }, []);

//     // Auto play/pause video khi vào/ra khỏi màn hình
//     useEffect(() => {
//         const videoElement = videoRef.current;
//         if (!videoElement) return;

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         videoElement.currentTime = 0;
//                         videoElement
//                             .play()
//                             .then(() => setIsPlaying(true))
//                             .catch((err) => console.warn('Không thể tự phát:', err));
//                     } else {
//                         videoElement.pause();
//                         setIsPlaying(false);
//                     }
//                 });
//             },
//             { threshold: 0.75 },
//         );

//         observer.observe(videoElement);

//         return () => {
//             observer.unobserve(videoElement);
//         };
//     }, []);

//     // Xử lý thay đổi âm lượng
//     useEffect(() => {
//         if (videoRef.current) {
//             videoRef.current.volume = volume;
//         }
//     }, [volume]);

//     // Đồng bộ trạng thái mute của video với context
//     useEffect(() => {
//         if (videoRef.current) {
//             videoRef.current.muted = isMuted;
//         }
//     }, [isMuted]);

//     // Xử lý toggle
//     const handleToggle = () => {
//         setIsExpanded(!isExpanded);
//     };

//     // Xử lý phát video
//     const handleVideoClick = () => {
//         const video = videoRef.current;
//         if (!video) return;

//         if (video.paused) {
//             video.play();
//             setIsPlaying(true);
//             setShowStatusIcon('play');
//         } else {
//             video.pause();
//             setIsPlaying(false);
//             setShowStatusIcon('pause');
//         }

//         // Ẩn icon sau 0.3s
//         setTimeout(() => {
//             setShowStatusIcon(null);
//         }, 300);
//     };

//     // Xử lý khi click vào thanh progress
//     const handleProgressClick = (e) => {
//         const video = videoRef.current;
//         if (!video) return;

//         const progressBar = e.currentTarget;
//         // Lấy ra kích thước và vị trí của thanh progress trong trang.
//         const rect = progressBar.getBoundingClientRect();

//         // 👉 Tính khoảng cách từ mép trái của thanh progress đến nơi bạn vừa click.
//         // e.clientX là vị trí click theo trục X tính từ mép trái màn hình.
//         // rect.left là vị trí của thanh progress.
//         // ⇒ clickX là khoảng cách nội bộ trong thanh progress.
//         const clickX = e.clientX - rect.left;

//         // Lưu chiều rộng của thanh progress.
//         const width = rect.width;

//         // Tính phần trăm vị trí bạn vừa click trên thanh progress.
//         const percent = clickX / width;

//         // Tính ra thời điểm video mới cần phát (tính bằng giây).
//         const newTime = percent * video.duration;

//         // Gán thời gian phát mới cho video → Video sẽ nhảy đến thời gian đó.
//         video.currentTime = newTime;
//     };

//     // Xử lý khi người dùng không tắt tiếng
//     const handleUnmuteClick = () => {
//         const video = videoRef.current;
//         if (!video) return;
//         video.muted = false;
//         setIsMuted(false);
//     };

//     // Xử lý khi người dùng tắt tiếng
//     const handleMuteClick = () => {
//         const video = videoRef.current;
//         if (!video) return;
//         video.muted = true;
//         setIsMuted(true);
//     };

//     // Xử lý thay đổi âm lượng

//     const handleVolumeChange = (e) => {
//         const newVolume = parseFloat(e.target.value);
//         setVolume(newVolume); // Cập nhật volume cho toàn bộ context
//     };

//     // Render MenuPreview
//     const menuPreview = () => (
//         <PopperWrapper>
//             <MenuPreview />
//         </PopperWrapper>
//     );

//     return (
//         <div className={cx('wrapper')}>
//             {/* Video Player */}
//             <div className={cx('video-wrapper')}>
//                 <video
//                     src={data.file_url}
//                     className={cx('video')}
//                     ref={videoRef}
//                     onClick={handleVideoClick}
//                     loop
//                 ></video>
//                 {showStatusIcon && (
//                     <div className={cx('status-icon')}>
//                         {showStatusIcon === 'play' ? (
//                             <FontAwesomeIcon icon={faPlay} />
//                         ) : (
//                             <FontAwesomeIcon icon={faPause} />
//                         )}
//                     </div>
//                 )}
//                 <div className={cx('controls')}>
//                     <div
//                         className={cx('volume-control')}
//                         onMouseEnter={() => setIsHoveringVolume(true)}
//                         onMouseLeave={() => setIsHoveringVolume(false)}
//                     >
//                         <button className={cx('volume-btn')} onClick={isMuted ? handleUnmuteClick : handleMuteClick}>
//                             {isMuted ? (
//                                 <MuteIcon className={cx('volumn-icon')} />
//                             ) : (
//                                 <UnMuteIcon className={cx('volumn-icon')} />
//                             )}
//                         </button>

//                         <div className={cx('wrapper-input', { show: isHoveringVolume })}>
//                             <input
//                                 min="0"
//                                 max="1"
//                                 step="0.01"
//                                 type="range"
//                                 className={cx('volume-slider')}
//                                 value={volume}
//                                 onChange={handleVolumeChange}
//                             />
//                         </div>
//                     </div>

//                     <Tippy
//                         placement="right-end"
//                         interactive
//                         delay={[150, 150]}
//                         offset={[-5, 15]}
//                         render={menuPreview}
//                         trigger="click"
//                     >
//                         <button className={cx('menu-btn')}>
//                             <MoreIcon className={cx('menu-icon')} />
//                         </button>
//                     </Tippy>
//                 </div>

//                 <div className={cx('description')}>
//                     <div className={cx('wrapper-nickname')}>
//                         <h2 className={cx('nickname')}> {data.user.nickname}</h2>
//                         {data.user.tick && <TickIcon className={cx('check')} />}
//                     </div>
//                     <div className={cx('title', { 'title-more': isLongDescription && isExpanded })}>
//                         <p className={cx('title-des')}>{displayText}</p>
//                         {isLongDescription && (
//                             <button className={cx('toggle-btn')} onClick={handleToggle}>
//                                 {isExpanded ? ' Less' : ' More'}
//                             </button>
//                         )}
//                     </div>
//                     <span className={cx('music')}>
//                         <MusicIcon className={cx('music-icon')} />
//                         <p className={cx('music-name')}>Trending - Breaking News Background Music - Blaze Records</p>
//                     </span>
//                     <div className={cx('progress-bar')} onClick={handleProgressClick}>
//                         <div className={cx('progress-bar-inner')} style={{ width: `${progress}%` }}></div>
//                     </div>
//                 </div>
//             </div>
//             <div className={cx('video-info')}>
//                 <div className={cx('video-avatar')}>
//                     <Image src={user.avatar} className={cx('avatar')} />
//                     <div className={cx('avatar-icon')}>
//                         {data.user.is_followed ? (
//                             <FollowIcon className={cx('icon-follow')} />
//                         ) : (
//                             <UnFollowIcon className={cx('icon-unFollow')} />
//                         )}
//                     </div>
//                 </div>
//                 <div className={cx('info-btn')}>
//                     <span className={cx('icon')}>
//                         <LikeIcon className={cx('icon-like')} />
//                     </span>
//                     <span className={cx('info-count')}>{data.likes_count}</span>
//                 </div>
//                 <div className={cx('info-btn')}>
//                     <span className={cx('icon')}>
//                         <CommentIcon className={cx('icon-comment')} />
//                     </span>
//                     <span className={cx('info-count')}>{data.comments_count}</span>
//                 </div>
//                 <div className={cx('info-btn')}>
//                     <span className={cx('icon')}>
//                         <BookmarkIcon className={cx('icon-bookmark')} />
//                     </span>
//                     <span className={cx('info-count')}>{data.shares_count}</span>
//                 </div>
//                 <div className={cx('info-btn')}>
//                     <span className={cx('icon')}>
//                         <ShareIcon className={cx('icon-share')} />
//                     </span>
//                     <span className={cx('info-count')}>{data.views_count}</span>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Video;

import { useState, useRef, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import VideoPlayer from './VideoPlayer';
import VolumeControl from './VolumeControl';
import VideoMenu from './VideoMenu';
import VideoDescription from './VideoDescription';
import VideoInfo from './VideoInfo';
import Overlay from './Overlay';

import { AudioContext } from '~/context/AudioContext';
import ModelLayout from './ModelLayout';

const cx = classNames.bind(styles);

function Video({ data }) {
    const user = data.user;

    // Quản lý state
    const [isExpanded, setIsExpanded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showStatusIcon, setShowStatusIcon] = useState(null);
    const [isLike, setIsLike] = useState(false);
    const [isBookmark, setIsBookmark] = useState(false);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);

    // Context âm thanh
    const { isMuted, setIsMuted, volume, setVolume } = useContext(AudioContext);

    // Ref video
    const videoRef = useRef(null);

    const maxLength = 40;
    const isLongDescription = data.description.length > maxLength;

    // Tự động play/pause khi scroll
    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoElement.currentTime = 0;
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
            { threshold: 0.75 },
        );

        observer.observe(videoElement);
        return () => {
            observer.unobserve(videoElement);
        };
    }, []);

    // Đồng bộ volume
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume]);

    // Đồng bộ mute
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    // Toggle xem thêm
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    // Play / Pause khi click video
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

        setTimeout(() => setShowStatusIcon(null), 300);
    };

    // Click vào thanh progress
    const handleProgressClick = (e) => {
        const video = videoRef.current;
        if (!video) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = clickX / rect.width;
        video.currentTime = percent * video.duration;
    };

    // Xử lý toggle like
    const handleLikeToggle = () => {
        setIsLike((prev) => !prev);
        // Có thể thêm logic gửi request lên server nếu cần
    };

    // Xử lý toggle bookmark
    const handleBookmarkToggle = () => {
        setIsBookmark((prev) => !prev);
    };

    // Xử lý mở đóng share
    const handleShareClick = () => {
        setIsShareOpen(true);
    };

    const handleCloseShare = () => {
        setIsShareOpen(false);
    };

    const handleOpenModel = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
        setIsModelOpen(true);
    };

    const handleCloseModel = () => {
        setIsModelOpen(false);
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {/* Video + Controls */}
            <div className={cx('video-wrapper')}>
                <VideoPlayer
                    src={data.file_url}
                    videoRef={videoRef}
                    onProgress={setProgress}
                    onPlayChange={setIsPlaying}
                    showStatusIcon={showStatusIcon}
                    handleVideoClick={handleVideoClick}
                />

                <div className={cx('controls')}>
                    <VolumeControl isMuted={isMuted} setIsMuted={setIsMuted} volume={volume} setVolume={setVolume} />
                    <VideoMenu valueOffset={[-5, 15]} />
                </div>

                <VideoDescription
                    user={user}
                    description={data.description}
                    isExpanded={isExpanded}
                    isLongDescription={isLongDescription}
                    handleToggle={handleToggle}
                    progress={progress}
                    handleProgressClick={handleProgressClick}
                />
            </div>

            {/* Info buttons */}
            <VideoInfo
                user={user}
                likes={data.likes_count}
                comments={data.comments_count}
                bookmarks={data.shares_count}
                shares={data.views_count}
                views={data.views_count}
                isLike={isLike}
                onLikeToggle={handleLikeToggle}
                isBookmark={isBookmark}
                onBookmarkToggle={handleBookmarkToggle}
                onShareClick={handleShareClick}
                onCommentClick={handleOpenModel} // Mở ModelLayout khi click vào comment icon
            />
            {isShareOpen && <Overlay onClose={handleCloseShare} data={data} />}
            {isModelOpen && (
                <ModelLayout
                    onClose={handleCloseModel}
                    data={data}
                    src={data.file_url}
                    onLikeToggle={handleLikeToggle}
                    likes={data.likes_count}
                    isLike={isLike}
                    comments={data.comments_count}
                    // onCommentClick={handleOpenModel} // Mở ModelLayout khi click vào comment icon
                    bookmarks={data.shares_count}
                    isBookmark={isBookmark}
                    onBookmarkToggle={handleBookmarkToggle}
                />
            )}
        </div>
    );
}

export default Video;
