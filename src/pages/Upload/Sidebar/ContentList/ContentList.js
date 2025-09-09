import classNames from 'classnames/bind';

import styles from './ContentList.module.scss';
const cx = classNames.bind(styles);

function ContentList({ list }) {
    return (
        <div className={cx('content-list')}>
            {list.map((item, index) => (
                <div key={index} className={cx('content-item')}>
                    <div className={cx('title')}>{item.title}</div>
                    <div className={cx('list')}>
                        {item.data.map((item, index) => (
                            <div key={index} className={cx('item')}>
                                <item.icon className={cx('icon')} />
                                <span>{item.span} </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContentList;
