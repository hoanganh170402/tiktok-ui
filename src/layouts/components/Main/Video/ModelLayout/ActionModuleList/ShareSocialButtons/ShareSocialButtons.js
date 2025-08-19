import classNames from 'classnames/bind';

import styles from './ShareSocialButtons.module.scss';
import { EmailIcon, LineIcon, LinkinIcon, PinterrestIcon, RedditIcon, TeleIcon, XIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function ShareSocialButtons() {
    const SHARE_BTNS = [
        { icon: XIcon, label: 'Share On X', className: 'x-icon' },
        { icon: LinkinIcon, label: 'Share On LinkedIn', className: 'linkedIn-icon' },
        { icon: RedditIcon, label: 'Share On Reddit', className: 'reddit-icon' },
        { icon: TeleIcon, label: 'Share On Telegram', className: 'telegram-icon' },
        { icon: EmailIcon, label: 'Share On Email', className: 'email-icon' },
        { icon: LineIcon, label: 'Share On Line', className: 'line-icon' },
        { icon: PinterrestIcon, label: 'Share On Pinterrest', className: 'pinterrest-icon' },
    ];
    return (
        <div className={cx('wrapper')}>
            {SHARE_BTNS.map(({ icon: Icon, label, className }) => (
                <a href="/" target="_blank" key={label} className={cx('icon-wrapper')}>
                    <Icon className={cx(className, 'icon')} />
                    <span className={cx('label')}>{label}</span>
                </a>
            ))}
        </div>
    );
}

export default ShareSocialButtons;
