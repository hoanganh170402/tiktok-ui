import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { MoreIcon } from '~/components/Icons';
import { PopperWrapper } from '~/components/Popper';
import MenuPreview from '../MenuPreview';
import styles from '../Video.module.scss';

const cx = classNames.bind(styles);

function VideoMenu() {
    const menuPreview = () => (
        <PopperWrapper>
            <MenuPreview />
        </PopperWrapper>
    );

    return (
        <Tippy
            placement="right-end"
            interactive
            delay={[150, 150]}
            offset={[-5, 15]}
            render={menuPreview}
            trigger="click"
        >
            <button className={cx('menu-btn')}>
                <MoreIcon className={cx('menu-icon')} />
            </button>
        </Tippy>
    );
}

export default VideoMenu;
