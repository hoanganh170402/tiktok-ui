import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
import { BeatLoader } from 'react-spinners';

const cx = classNames.bind(styles);

function Loading({ text = 'Loading...' }) {
    return (
        <div className={cx('loading')}>
            <BeatLoader />
            <span>{text}</span>
        </div>
    );
}

export default Loading;
