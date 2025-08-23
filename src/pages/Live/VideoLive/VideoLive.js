import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import styles from './VideoLive.module.scss';
import { MuteIcon, UnMuteIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const FIRST_VIDEO = 0;
function VideoLive({
    videoRef,
    listItem,
    isMuted,
    handlePlayPause,
    isPlaying,
    handleMuteToggle,
    volume,
    handleVolumeChange,
}) {
    return (
        <div className={cx('video-wrapper')}>
            <video
                className={cx('first-video')}
                ref={videoRef}
                src={listItem[FIRST_VIDEO].file_url}
                loop
                autoPlay
                muted={isMuted}
                onClick={handlePlayPause}
            />

            <div className={cx('controls')}>
                {/* Play / Pause */}
                <button className={cx('control-btn')} onClick={handlePlayPause}>
                    {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </button>

                <div className={cx('volume-control')}>
                    {/* Mute / Unmute */}
                    <button className={cx('control-btn')} onClick={handleMuteToggle}>
                        {isMuted ? (
                            <MuteIcon className={cx('volumn-icon')} />
                        ) : (
                            <UnMuteIcon className={cx('volumn-icon')} />
                        )}
                    </button>

                    {/* Thanh Range chỉnh volume */}
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={(e) => handleVolumeChange(e)}
                        className={cx('volume-range')}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoLive;
