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

const MENU_ITEMS = [
    { icon: QuanlityIcon, label: 'Quanlity', value: 'Auto' },
    { icon: SubtitlesIcon, label: 'Subtitles' },
    { icon: AutoPlayIcon, label: 'Auto play', toggle: true },
    { icon: PictureInPictureIcon, label: 'Picture in Picture' },
    { icon: NoInterestedIcon, label: 'No interested' },
    { icon: ReportIcon, label: 'Report' },
];

function MenuPreview() {
    return (
        <div className={cx('wrapper')}>
            {MENU_ITEMS.map(({ icon: Icon, label, value, toggle }) => (
                <div key={label} className={cx('menu-item')}>
                    <Icon className={cx('menu-icon')} />
                    <div className={cx('menu-label')}>
                        <span className={cx('menu-text')}>{label}</span>
                        {value && <span className={cx('menu-value')}>{value}</span>}
                        {toggle && <ToggleSwitch className={cx('toggleSwitch')} />}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MenuPreview;
