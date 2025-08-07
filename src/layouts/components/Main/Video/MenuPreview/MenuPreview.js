import classNames from 'classnames/bind';
import {
    AutoPlayIcon,
    NoInterestedIcon,
    PictureInPictureIcon,
    QuanlityIcon,
    ReportIcon,
    SubtitlesIcon,
} from '~/components/Icons';
import styles from './MenuPreview.module.scss';
import { ToggleSwitch } from '~/components/ToggleSwitch';

const cx = classNames.bind(styles);

function MenuPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-item')}>
                <QuanlityIcon className={cx('menu-icon')} />
                <div className={cx('menu-label')}>
                    <span className={cx('menu-text')}>Quanlity</span>
                    <span className={cx('menu-value')}>Auto</span>
                </div>
            </div>

            <div className={cx('menu-item')}>
                <SubtitlesIcon className={cx('menu-icon')} />
                <div className={cx('menu-label')}>
                    <span className={cx('menu-text')}>Subtitles</span>
                </div>
            </div>

            <div className={cx('menu-item')}>
                <AutoPlayIcon className={cx('menu-icon')} />
                <div className={cx('menu-label')}>
                    <span className={cx('menu-text')}>Auto play</span>
                    <ToggleSwitch className={cx('toggleSwitch')} />
                </div>
            </div>

            <div className={cx('menu-item')}>
                <PictureInPictureIcon className={cx('menu-icon')} />
                <div className={cx('menu-label')}>
                    <span className={cx('menu-text')}>Picture in Picture</span>
                </div>
            </div>

            <div className={cx('menu-item')}>
                <NoInterestedIcon className={cx('menu-icon')} />
                <div className={cx('menu-label')}>
                    <span className={cx('menu-text')}>No interested</span>
                </div>
            </div>

            <div className={cx('menu-item')}>
                <ReportIcon className={cx('menu-icon')} />
                <div className={cx('menu-label')}>
                    <span className={cx('menu-text')}>Report</span>
                </div>
            </div>
        </div>
    );
}

export default MenuPreview;
