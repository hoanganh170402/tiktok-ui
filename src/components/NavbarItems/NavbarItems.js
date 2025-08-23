import classNames from 'classnames/bind';
import { useRef, useState, useEffect } from 'react';
import styles from './NavbarItems.module.scss';
import { NextBtnIcon, PrevBtnIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function NavbarItems({ data = [], isActive, setIsActive }) {
    const [canPrev, setCanPrev] = useState(false); // có thể bấm Prev hay không
    const [canNext, setCanNext] = useState(true); // có thể bấm Next hay không
    const navRef = useRef(null); // tham chiếu đến container cuộn ngang

    const scrollAmount = 200; // số px khi bấm Prev/Next

    // 📌 Scroll sang trái
    const handlePrev = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    // 📌 Scroll sang phải
    const handleNext = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // 📌 Kiểm tra trạng thái scroll để bật/tắt nút Prev/Next
    const checkScroll = () => {
        if (!navRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = navRef.current;

        // Nếu scrollLeft > 0 thì có thể bấm Prev
        setCanPrev(scrollLeft > 0);

        // Nếu scroll chưa chạm hết bên phải thì còn bấm Next
        setCanNext(scrollLeft + clientWidth < scrollWidth - 2);
    };

    // 📌 Gắn event "scroll" và kiểm tra ngay khi load
    useEffect(() => {
        const navEl = navRef.current;
        if (!navEl) return;

        navEl.addEventListener('scroll', checkScroll);
        checkScroll(); // kiểm tra lần đầu khi render

        return () => navEl.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <div className={cx('navbar')}>
            {/* Nút Prev */}
            <button className={cx('btn')} onClick={handlePrev} disabled={!canPrev}>
                <PrevBtnIcon className={cx('btn-prev')} />
            </button>

            {/* Danh sách item có thể cuộn ngang */}
            <div ref={navRef} className={cx('navbar-list')}>
                {data.map((item, index) => (
                    <button
                        key={index}
                        className={cx('navbar-item', { active: isActive === item })}
                        onClick={() => setIsActive(item)} // chọn item
                    >
                        <span className={cx('title')}>{item}</span>
                    </button>
                ))}
            </div>

            {/* Nút Next */}
            <button className={cx('btn')} onClick={handleNext} disabled={!canNext}>
                <NextBtnIcon className={cx('btn-next')} />
            </button>
        </div>
    );
}

export default NavbarItems;
