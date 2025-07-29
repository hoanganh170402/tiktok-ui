import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import EffectLink from './EffectLink';
import TagLink from './TagLink';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <EffectLink />
            <TagLink data={['About', 'Newsroom', 'Contact', 'Careers']} />
            <TagLink
                data={['TikTok for Good', 'Advertise', 'Developers', 'Transparency', 'TikTok Rewards', 'TikTok embeds']}
            />
            <TagLink data={['Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community', 'Guidelines']} />
            <span className={cx('copyright')}>© 2023 TikTok </span>
        </footer>
    );
}

export default Footer;
