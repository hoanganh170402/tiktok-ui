import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './MiniVideoList.module.scss';
import Image from '~/components/Image';
import { MuteIcon, SmallLikeIcon, UnMuteIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function MiniVideoList({ data }) {
    const user = data.user;
    const videoRef = useRef(null);

    // ✅ Quản lý trạng thái mute/unmute
    // true = mute (tắt tiếng), false = unmute (bật tiếng)
    const [isMute, setIsMute] = useState(true);

    // ✅ Hover chuột vào video thì play (nếu đang pause)
    const handleMouseEnter = () => {
        if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play();
        }
    };

    // ✅ Rời chuột thì pause video (nếu đang play)
    const handleMouseLeave = () => {
        if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
        }
    };

    // ✅ Toggle âm lượng:
    // Khi click → đổi trạng thái mute/unmute
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMute(videoRef.current.muted);
        }
    };

    return (
        <div className={cx('video-card')}>
            {/* Video container */}
            <div className={cx('video-wrapper')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {/* ✅ Video có loop, muted, playsInline (tối ưu cho mobile) */}
                <video ref={videoRef} className={cx('video')} src={data.file_url} muted={isMute} playsInline loop />

                {/* Overlay control */}
                <div className={cx('control')}>
                    {/* Hiển thị số lượt like */}
                    <div className={cx('like-count')}>
                        <SmallLikeIcon />
                        <span>{data.likes_count}</span>
                    </div>

                    {/* Nút mute/unmute */}
                    <div className={cx('volume')} onClick={toggleMute}>
                        {isMute ? <MuteIcon /> : <UnMuteIcon />}
                    </div>
                </div>
            </div>

            {/* Thông tin người đăng video */}
            <div className={cx('info-wrapper')}>
                <Image alt="avatar" src={user.avatar} className={cx('ava')} />
                <Link className={cx('nickname')} to={`/${user.nickname}`}>
                    {user.nickname}
                </Link>
            </div>
        </div>
    );
}

export default MiniVideoList;
