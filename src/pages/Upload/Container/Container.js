import classNames from 'classnames/bind';

import styles from './Container.module.scss';
import Image from '~/components/Image';
import img from '~/assets/images';
import UploadVideo from './UploadVideo';
import { CapCutIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function Container() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                {/* href for your info */}
                <a href="/">
                    <div className={cx('ava-wrapper')}>
                        <Image src={img.defauleAvatar} className={cx('ava')} />
                    </div>
                </a>
            </header>

            <div className={cx('container')}>
                <div className={cx('content')}>
                    {/* <div className={cx('action-wrapper')}>
                        <label className={cx('')}></label>
                        <div className={cx('suggest-list')}></div>
                    </div> */}
                    <UploadVideo />
                    <div className={cx('quality-wrapper')}>
                        <div className={cx('title')}>
                            <p className={cx('title-heading')}>Create high quality videos on CapCut Online</p>
                            <p className={cx('title-des')}>
                                Automatically shorten your videos and create videos from scripts with AI-powered
                                features.
                            </p>
                        </div>
                        <div className={cx('btn')}>
                            <CapCutIcon />
                            <p>Try now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;
