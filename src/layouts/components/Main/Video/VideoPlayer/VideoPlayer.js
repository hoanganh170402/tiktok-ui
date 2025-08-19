import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from '../Video.module.scss';

const cx = classNames.bind(styles);

function VideoPlayer({ src, onProgress, onPlayChange, showStatusIcon, handleVideoClick, videoRef }) {
    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const handleTimeUpdate = () => {
            const percent = (videoElement.currentTime / videoElement.duration) * 100;
            onProgress(percent);
        };

        videoElement.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [onProgress, videoRef]);

    return (
        <>
            <video src={src} className={cx('video')} ref={videoRef} onClick={handleVideoClick} loop></video>
            {showStatusIcon && (
                <div className={cx('status-icon')}>
                    {showStatusIcon === 'play' ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
                </div>
            )}
        </>
    );
}

export default VideoPlayer;
