import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './header';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    // Phải trùng key là data, khi đó logic mới hoạt động đúng
    const [history, setHistory] = useState([{ data: items }]);

    // console.log('History:', history);

    const current = history[history.length - 1];

    // console.log('Current:', current);

    // console.log('Current data:', current.data);

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            console.log('item Children:', item.children);
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            // visible
            delay={[100, 100]}
            offset={[15, 8]}
            interactive
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('custom-popper')}>
                        {/* Bạn đã nhấn vào một item có children, nên history đã được push thêm menu con. Nghĩa là history.length > 1 => sẽ xuất hiện nút back */}
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    // Logic đoạn này là lầy từ phần tử đầu tiên đến phần tử kế cuối, xoá đi phần tử cuối cùng của mảng
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
