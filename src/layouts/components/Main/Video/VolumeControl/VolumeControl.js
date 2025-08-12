import { useState } from 'react';
import classNames from 'classnames/bind';
import { MuteIcon, UnMuteIcon } from '~/components/Icons';
import styles from '../Video.module.scss';

const cx = classNames.bind(styles);

function VolumeControl({ isMuted, setIsMuted, volume, setVolume }) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMuteClick = () => setIsMuted(true);
    const handleUnmuteClick = () => setIsMuted(false);

    return (
        <div
            className={cx('volume-control')}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <button className={cx('volume-btn')} onClick={isMuted ? handleUnmuteClick : handleMuteClick}>
                {isMuted ? <MuteIcon className={cx('volumn-icon')} /> : <UnMuteIcon className={cx('volumn-icon')} />}
            </button>

            <div className={cx('wrapper-input', { show: isHovering })}>
                <input
                    min="0"
                    max="1"
                    step="0.01"
                    type="range"
                    className={cx('volume-slider')}
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                />
            </div>
        </div>
    );
}

export default VolumeControl;
