import classNames from 'classnames/bind';

import styles from './EffectLink.module.scss';
import Image from '~/components/Image';
import img from '~/assets/images';

const cx = classNames.bind(styles);

function EffectLink() {
    return (
        <a href="https://effecthouse.tiktok.com/" target="blank" className={cx('wrapper')}>
            <Image className={cx('img')} src={img.effectLinkPng} />
            <span className={cx('title')}>Create tiktok effects to get rewards</span>
        </a>
    );
}

export default EffectLink;
