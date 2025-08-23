import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import Footer from '../Footer';

const cx = classNames.bind(styles);

const INIT_PAGE = Math.floor(Math.random() * 10) + 1;
const PER_PAGE = 10;

function Sidebar() {
    const [allUsers, setAllUsers] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5); // số user đang hiển thị

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.getSuggest({ page: INIT_PAGE, perPage: PER_PAGE });
            if (result?.data) {
                setAllUsers(result.data);
            }
        };
        fetchApi();
    }, []);

    const handleSeeMore = () => {
        // Nếu đã hiện hết 20 user → quay về 5
        setVisibleCount((prev) => (prev >= 10 ? 5 : prev + 5));
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} to={config.routes.home} />
                <MenuItem
                    title="Explore"
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                    to={config.routes.explore}
                />
                <MenuItem
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                    to={config.routes.following}
                />
                <MenuItem title="Live" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} to={config.routes.live} />
            </Menu>

            <SuggestedAccounts
                label="Suggested Accounts"
                data={allUsers.slice(0, visibleCount)}
                onSeeMore={handleSeeMore}
            />

            <Footer />
        </aside>
    );
}

export default Sidebar;
