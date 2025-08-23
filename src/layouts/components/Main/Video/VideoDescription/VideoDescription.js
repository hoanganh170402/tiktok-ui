import classNames from 'classnames/bind';
import { MusicIcon, TickIcon } from '~/components/Icons';
import styles from '../Video.module.scss';

const cx = classNames.bind(styles);

function VideoDescription({
    user,
    description,
    isExpanded,
    isLongDescription,
    handleToggle,
    progress,
    handleProgressClick,
    music,
}) {
    const maxLength = 40;
    const displayText = isExpanded ? description : description.slice(0, maxLength) + (isLongDescription ? '...' : '');

    return (
        <div className={cx('description')}>
            <div className={cx('wrapper-nickname')}>
                <h2 className={cx('nickname')}>{user.nickname}</h2>
                {user.tick && <TickIcon className={cx('check')} />}
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
                {music && (
                    <>
                        <MusicIcon className={cx('music-icon')} />
                        <p className={cx('music-name')}>{music}</p>
                    </>
                )}
            </span>
            <div className={cx('progress-bar')} onClick={handleProgressClick}>
                <div className={cx('progress-bar-inner')} style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}

export default VideoDescription;
