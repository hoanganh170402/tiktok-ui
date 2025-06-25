import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, icon, to, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {({ isActive }) => {
                return (
                    <>
                        {isActive ? activeIcon : icon}
                        <span className={cx('title')}>{title}</span>
                    </>
                );
            }}
        </NavLink>
    );
}

export default MenuItem;
