import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './Header.module.scss';
import img from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    CoinIcon,
    HelpIcon,
    InboxIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    ProfileIcon,
    SettingsIcon,
    ShortcutsIcon,
    UploadIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const items = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English', // United States, Canada, Australia, etc.
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt', // Vietnam
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    type: 'language',
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    type: 'language',
                    code: 'dk',
                    title: 'Dansk', // Denmark
                },
                {
                    type: 'language',
                    code: 'ch',
                    title: 'Schweizerdeutsch', // Switzerland (Swiss German)
                },
                {
                    type: 'language',
                    code: 'nl',
                    title: 'Nederlands', // Netherlands
                },
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <ShortcutsIcon />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <SettingsIcon />,
        title: 'Setting',
        to: '/setting',
    },
    ...items,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    const handleOnChange = (item) => {
        switch (item.type) {
            case 'language':
                // logic to change Language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={img.logo} alt="Logo" />
                </div>
                {/* Search */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy offset={[0, -5]} content="Upload Videos" placement="bottom" delay={[0, 30]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy offset={[0, -5]} content="Message" placement="bottom" delay={[0, 30]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy offset={[0, -5]} content="Notification" placement="bottom" delay={[0, 30]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : items} onChange={handleOnChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-ava')}
                                alt="lanlacontrai"
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d427cb356d6b2d79005fde9f642f3d7a~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=30561fe9&x-expires=1747915200&x-signature=AUzoEW6hF3pKEow7SnxJPVtyDa0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my"
                                // fallBack="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/985c6458739b1d46c0d502baac21734c~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=292be447&x-expires=1748682000&x-signature=Xx8vcE54%2BjNaH78TVCAJdeqOjtg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
