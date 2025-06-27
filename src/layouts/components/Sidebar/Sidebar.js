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
} from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} to={config.routes.home} />
                <MenuItem
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                    to={config.routes.following}
                />
                <MenuItem title="Live" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} to={config.routes.live} />
            </Menu>

            <SuggestedAccounts label="Suggested Accounts" />
            <SuggestedAccounts label="Followings Accounts" />
        </aside>
    );
}

export default Sidebar;
