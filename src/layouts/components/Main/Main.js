import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Main.module.scss';
import * as videoService from '~/services/videoService';
import Video from './Video';

const cx = classNames.bind(styles);

function Main() {
    const [listItem, setListItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await videoService.getVideos('for-you', 20);
            setListItems(result);
        };
        fetchAPI();
    }, []);

    useEffect(() => {
        // 1. Lấy phần tử DOM thật từ ref
        const container = containerRef.current;
        if (!container) return; // Nếu chưa gắn ref thì thoát

        // 2. Hàm xử lý khi scroll
        const handleScroll = () => {
            // Lấy danh sách con của container, chuyển HTMLCollection -> Array
            const children = Array.from(container.children);

            // Lấy vị trí & kích thước của container so với viewport
            const containerRect = container.getBoundingClientRect();

            // Ban đầu giả sử index vẫn giữ nguyên
            let newIndex = currentIndex;

            // Duyệt qua từng video
            children.forEach((child, index) => {
                // Lấy vị trí & kích thước của video so với viewport
                const rect = child.getBoundingClientRect();

                // Tính toạ độ tâm (center) của video
                const childCenter = rect.top + rect.height / 2;

                // Tính toạ độ tâm (center) của container
                const containerCenter = containerRect.top + containerRect.height / 2;

                // Nếu tâm video gần tâm container hơn nửa chiều cao video → chọn video này
                if (Math.abs(childCenter - containerCenter) < rect.height / 2) {
                    newIndex = index;
                }
            });

            // Nếu index mới khác index cũ → cập nhật state
            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
            }
        };

        // 3. Lắng nghe sự kiện scroll
        container.addEventListener('scroll', handleScroll);

        // 4. Dọn dẹp khi component unmount hoặc dependency thay đổi
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [currentIndex]);

    const scrollToIndex = (index) => {
        const container = containerRef.current;
        if (!container) return;
        const target = container.children[index];
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < listItem.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    };

    return (
        <>
            <div ref={containerRef} className={cx('list-container')}>
                {listItem.map((data) => (
                    <Video key={data.id} data={data} />
                ))}
            </div>
            <div className={cx('nav-list-btn')}>
                <button className={cx('nav-btn')} onClick={handlePrev} disabled={currentIndex === 0}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
                <button className={cx('nav-btn')} onClick={handleNext} disabled={currentIndex === listItem.length - 1}>
                    <FontAwesomeIcon icon={faAngleDown} />
                </button>
            </div>
        </>
    );
}

export default Main;
