import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';

import styles from './Explore.module.scss';
import { NextBtnIcon, PrevBtnIcon } from '~/components/Icons';
import MiniVideoList from './MiniVideoList';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);

// Danh sách các mục trong thanh navbar
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
    // isActive: item nào đang được chọn (highlight)
    const [isActive, setIsActive] = useState('All');

    // canPrev: có cho phép bấm nút Prev hay không
    const [canPrev, setCanPrev] = useState(false);

    // canNext: có cho phép bấm nút Next hay không
    const [canNext, setCanNext] = useState(true);

    // Lưu state danh sách video
    const [listItem, setListItems] = useState([]);

    // navRef trỏ vào element navbar (chứa các button item)
    const navRef = useRef(null);

    // Mỗi lần cuộn, sẽ cuộn 200px
    const scrollAmount = 200;

    // Xử lý khi bấm nút Prev
    const handlePrev = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    // Xử lý khi bấm nút Next
    const handleNext = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Hàm kiểm tra trạng thái scroll để bật/tắt nút Prev/Next
    const checkScroll = () => {
        if (!navRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = navRef.current;

        // scrollLeft: khoảng cách đã cuộn từ bên trái
        // clientWidth: độ rộng khung nhìn (viewport)
        // scrollWidth: tổng độ rộng scroll (nội dung bên trong)

        // Có thể bấm Prev nếu đã cuộn > 0
        setCanPrev(scrollLeft > 0);

        // Có thể bấm Next nếu chưa cuộn hết
        // Dùng `-2` để tránh lỗi số lẻ (float) hoặc sai số 1px của trình duyệt
        // VD: scrollLeft + clientWidth = 999.5 nhưng scrollWidth = 1000
        // Nếu không trừ đi, nút Next sẽ vẫn hiện dù đã tới cuối
        setCanNext(scrollLeft + clientWidth < scrollWidth - 2);
    };

    useEffect(() => {
        const navEl = navRef.current;
        if (!navEl) return;

        // Lắng nghe sự kiện scroll để cập nhật nút Prev/Next
        navEl.addEventListener('scroll', checkScroll);

        // Chạy checkScroll() ngay khi load để tính trạng thái ban đầu
        checkScroll();

        // Cleanup khi unmount
        return () => {
            navEl.removeEventListener('scroll', checkScroll);
        };
    }, []);

    // Gọi API lấy data
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await videoService.getVideos('for-you', 20);
            setListItems(result);
        };
        fetchAPI();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar')}>
                {/* Nút Prev: luôn render, nhưng disabled khi không cuộn được */}
                <button className={cx('btn')} onClick={handlePrev} disabled={!canPrev}>
                    <PrevBtnIcon className={cx('btn-prev')} />
                </button>

                {/* Thanh navbar có scroll ngang */}
                <div ref={navRef} className={cx('navbar-list')}>
                    {NAVBAR_ITEMS.map((item, index) => (
                        <button
                            key={index}
                            className={cx('navbar-item', { active: isActive === item })}
                            onClick={() => setIsActive(item)}
                        >
                            <span className={cx('title')}>{item}</span>
                        </button>
                    ))}
                </div>

                {/* Nút Next: luôn render, nhưng disabled khi đã cuộn hết */}
                <button className={cx('btn')} onClick={handleNext} disabled={!canNext}>
                    <NextBtnIcon className={cx('btn-next')} />
                </button>
            </div>

            <div className={cx('video-list')}>
                {listItem.map((data) => (
                    <MiniVideoList key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
}

export default Explore;
