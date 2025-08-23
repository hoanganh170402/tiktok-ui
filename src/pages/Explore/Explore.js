import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './Explore.module.scss';
import MiniVideoList from './MiniVideoList';
import * as videoService from '~/services/videoService';
import NavbarItems from '~/components/NavbarItems';

const cx = classNames.bind(styles);

// Danh sách các item hiển thị trong navbar
const NAVBAR_ITEMS = [
    'All',
    'Singing & Dancing',
    'Comedy',
    'Sports',
    'Anime & Comics',
    'Relationship',
    'Shows',
    'Lipsync',
    'Daily Life',
    'Beauty Care',
    'Games',
    'Society',
    'Food',
    'Cars',
    'Social',
    'Tech',
];

function Explore() {
    const [isActive, setIsActive] = useState('All');
    const [listItem, setListItems] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await videoService.getVideos('for-you', 20);
            setListItems(result);
        };
        fetchAPI();
    }, []);

    return (
        <div className={cx('wrapper')}>
            {/* Navbar tách riêng component */}
            <NavbarItems data={NAVBAR_ITEMS} isActive={isActive} setIsActive={setIsActive} />

            {/* Video list */}
            <div className={cx('video-list')}>
                {listItem.map((data) => (
                    <MiniVideoList key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
}

export default Explore;
