import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d427cb356d6b2d79005fde9f642f3d7a~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=702e05df&x-expires=1747900800&x-signature=JIYUVL7soCKlWaIJnFrErkHb900%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my"
                alt="hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>quanglanbui</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>Lan là con trai</span>
            </div>
        </div>
    );
}

export default AccountItem;
