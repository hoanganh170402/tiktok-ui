import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import styles from './Main.module.scss';
import * as videoService from '~/services/videoService';
import Video from './Video';

const cx = classNames.bind(styles);
function Main() {
    const [listItem, setListItems] = useState([]);

    useEffect(() => {
        const fectAPI = async () => {
            const result = await videoService.getVideos('for-you', 20);
            setListItems(result);
        };
        fectAPI();
    }, []);

    console.log(listItem);
    return (
        <>
            <div className={cx('list-container')}>
                {listItem.map((data) => (
                    <Video key={data.id} data={data}></Video>
                ))}
            </div>
            <div className={cx('nav-list-btn')}>
                <button className={cx('nav-btn')}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
                <button className={cx('nav-btn')}>
                    <FontAwesomeIcon icon={faAngleDown} />
                </button>
            </div>
        </>
    );
}

export default Main;
