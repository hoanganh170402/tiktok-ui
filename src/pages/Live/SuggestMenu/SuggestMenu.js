import classNames from 'classnames/bind';

import styles from './SuggestMenu.module.scss';
import Image from '~/components/Image';
import img from '~/assets/images';
const cx = classNames.bind(styles);

const MENU_LIST = [
    {
        src: img.lol,
        title: 'League of Legends',
        count: '11.8k views',
    },
    {
        src: img.fortnite,
        title: 'Fortnite',
        count: '70.7k views',
    },
    {
        src: img.valorant,
        title: 'VALORANT',
        count: '5.4k views',
    },
    {
        src: img.callOfDuty,
        title: 'Call of Duty',
        count: '8.04k views',
    },
    {
        src: img.apex,
        title: 'Apex Legends',
        count: '1,144 views',
    },
];
function SuggestMenu({ title }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h2>{title}</h2>
                <a href="/" target="_blank">
                    See more
                </a>
            </header>
            <div className={cx('menu-list')}>
                {MENU_LIST.map((item, index) => (
                    <div key={index} className={cx('menu-item')}>
                        <div className={cx('img-wrapper')}>
                            <Image className={cx('img')} src={item.src} />
                        </div>
                        <div className={cx('info-wrapper')}>
                            <span className={cx('name')}> {item.title}</span>
                            <span className={cx('view')}>{item.count}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SuggestMenu;
