import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Sidebar from '../components/Sidebar';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);
function HeaderOnly({ children }) {
    return <div className={cx('container')}>{children}</div>;
}

export default HeaderOnly;
