import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestAccount from '~/components/SuggestAccounts';
import * as userService from '~/services/userServies';
import Footer from './Footer';

const cx = classNames.bind(styles);
const INIT_VALUE = Math.floor(Math.random() * 5) + 1;
const PER_PAGE = 10;

function Sidebar() {
    const [allUsers, setAllUsers] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.getSuggested({ page: INIT_VALUE, perPage: PER_PAGE });
            setAllUsers(result);
        };
        fetchApi();
    }, []);

    const handleShowMore = () => {
        setVisibleCount((prev) => (prev >= PER_PAGE ? 5 : prev + 5));
    };
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem to={config.routes.home} title="For You" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    to={config.routes.following}
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestAccount
                label="Suggested Accounts"
                data={allUsers.slice(0, visibleCount)}
                onShowMore={handleShowMore}
            />
            <Footer></Footer>
        </aside>
    );
}

export default Sidebar;
