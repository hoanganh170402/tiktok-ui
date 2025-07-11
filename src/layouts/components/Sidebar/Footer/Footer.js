import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import EffectLink from './EffectLink';
import img from '~/assets/images';
import TagLink from './TagLink';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <EffectLink img={img.effectLink} />
            <TagLink data={['About', 'Newsroom', 'Contact', 'Careers']} />
            <TagLink
                data={['TikTok for Good', 'Advertise', 'Developers', 'Transparency', 'TikTok Rewards', 'TikTok embeds']}
            />
            <TagLink data={['Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community', 'Guidelines']} />

            <span className={cx('copyright')}>© 2023 TikTok </span>
        </div>
    );
}

export default Footer;
