import classNames from 'classnames/bind';
import styles from '../Overlay.module.scss';

import {
    ActionShareLink,
    EmailIcon,
    FbIcon,
    LineIcon,
    LinkinIcon,
    PinterrestIcon,
    RedditIcon,
    Reposted,
    ShareEmbedIcon,
    TeleIcon,
    WhatsAppIcon,
    XIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const ACTION_ITEMS = [
    { icon: Reposted, label: 'Reposted', className: 'reposted-icon' },
    { icon: ActionShareLink, label: 'Copy', className: 'actionShareLink-icon' },
    { icon: WhatsAppIcon, label: 'WhatsApp', className: 'whatsapp-icon' },
    { icon: ShareEmbedIcon, label: 'Embed', className: 'shareembed-icon' },
    { icon: FbIcon, label: 'Facebook', className: 'fb-icon' },
    { icon: TeleIcon, label: 'Telegram', className: 'tele-icon' },
    { icon: XIcon, label: 'X', className: 'x-icon' },
    { icon: LinkinIcon, label: 'LinkedIn', className: 'linkin-icon' },
    { icon: EmailIcon, label: 'Email', className: 'email-icon' },
    { icon: RedditIcon, label: 'Reddit', className: 'reddit-icon' },
    { icon: LineIcon, label: 'Line', className: 'line-icon' },
    { icon: PinterrestIcon, label: 'Pinterrest', className: 'pinterrest-icon' },
];

function ActionList() {
    return (
        <div className={cx('action-list')}>
            {ACTION_ITEMS.map(({ icon: Icon, label, className }) => (
                <div key={label} className={cx('action-item')}>
                    <div className={cx('action-icon')}>
                        <Icon className={cx(className)} />
                    </div>
                    <span className={cx('action-title')}>{label}</span>
                </div>
            ))}
        </div>
    );
}

export default ActionList;
