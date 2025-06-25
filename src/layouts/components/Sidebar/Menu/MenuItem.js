import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        // Khi bạn sử dụng NavLink từ React Router, bạn hoàn toàn có thể truyền một hàm (function) vào cả className và style để tùy chỉnh giao diện dựa trên trạng thái hoạt động của đường dẫn.
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {/* 
                Dù isActive là true hay false, hàm bên trong NavLink luôn được React Router gọi khi render.
                Bạn hoàn toàn có quyền quyết định hiển thị cái gì tùy vào giá trị của isActive. 
            */}
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
