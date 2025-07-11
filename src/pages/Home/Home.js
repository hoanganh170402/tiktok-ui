import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Title 1</div>
            <div className={cx('title')}>Title 2</div>
            <div className={cx('title')}>Title 3</div>
            <div className={cx('title')}>Title 4</div>
            <div className={cx('title')}>Title 5</div>
            <div className={cx('title')}>Title 6</div>
            <div className={cx('title')}>Title 7</div>
        </div>
    );
}

export default Home;
