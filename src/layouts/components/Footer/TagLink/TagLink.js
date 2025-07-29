import classNames from 'classnames/bind';
import styles from './TagLink.module.scss';

const cx = classNames.bind(styles);
function TagLink({ data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((tag, index) => (
                <a href="/" key={index} className={cx('title')}>
                    {tag}
                </a>
            ))}
        </div>
    );
}

export default TagLink;
