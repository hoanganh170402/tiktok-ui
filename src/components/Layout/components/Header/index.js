import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faArrowRightToBracket,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudArrowUp,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import img from '~/assets/images';
import { PopperWrapper } from '~/components/Popper';
import AcctountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const items = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
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
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...items,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
    
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

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
                <HeadlessTippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AcctountItem />
                                <AcctountItem />
                                <AcctountItem />
                                <AcctountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Videos" placement="bottom" delay={[0, 30]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" delay={[0, 30]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
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
                            <img
                                className={cx('user-ava')}
                                alt="lanlacontrai"
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d427cb356d6b2d79005fde9f642f3d7a~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=30561fe9&x-expires=1747915200&x-signature=AUzoEW6hF3pKEow7SnxJPVtyDa0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my"
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
