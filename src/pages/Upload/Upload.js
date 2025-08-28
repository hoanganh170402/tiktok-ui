import classNames from 'classnames/bind';

import styles from './Upload.module.scss';
import Sidebar from './Sidebar';
import Container from './Container';

const cx = classNames.bind(styles);
function Upload() {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <Container />
        </div>
    );
}

export default Upload;
