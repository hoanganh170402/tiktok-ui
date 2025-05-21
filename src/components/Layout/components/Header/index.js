import {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import img from '~/assets/images';
import { PopperWrapper } from '~/components/Popper';
import AcctountItem from '~/components/AccountItem';
import Button from '~/components/Button'

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(()=> {
        setTimeout(() => {
            setSearchResult([1,2,3])
        }, 0)
    },[])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={img.logo} alt="Logo" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            {/* <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AcctountItem />
                                <AcctountItem />
                                <AcctountItem />
                                <AcctountItem />
                            </PopperWrapper> */}
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary rightIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />}>
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
