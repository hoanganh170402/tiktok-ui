import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem data={item} key={index} />;
        });
    };

    return (
        <Tippy
            // visible
            placement="bottom-end"
            interactive
            delay={[250, 250]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('custom-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
