import classNames from 'classnames/bind';

import styles from './Separate.module.scss';

const cx = classNames.bind(styles);
function Separate({ ...props }) {
    return <div className={cx('separate')} style={{ ...props }}></div>;
}

export default Separate;
