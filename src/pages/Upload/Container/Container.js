import classNames from 'classnames/bind';

import styles from './Container.module.scss';
const cx = classNames.bind(styles);

function Container() {
    return <div className={cx('container-wrapper')}>Container</div>;
}

export default Container;
