import classNames from 'classnames/bind';

import Image from '~/components/Image';
import styles from './EffectLink.module.scss';

const cx = classNames.bind(styles);
function EffectLink({ img }) {
    return (
        <a href="https://effecthouse.tiktok.com/" target="blank" className={cx('wrapper')}>
            <Image src={img} className={cx('img')} />
            <span className={cx('title')}>Tạo hiệu ứng tiktok nhận phần thưởng</span>
        </a>
    );
}

export default EffectLink;
