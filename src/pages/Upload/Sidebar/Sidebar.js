import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import {
    HOSidebarHome,
    PlusIcon,
    HOSidebarFolder,
    HOSidebarAnalytics,
    HOSidebarComment,
    HOSidebarInspirations,
    HOSidebarAcademy,
    HOSidebarSound,
    HOSidebarFeedBack,
    HOSidebarBack,
} from '~/components/Icons';
import ContentList from './ContentList';

const cx = classNames.bind(styles);

const SIDEBAR_DATA = [
    {
        title: 'MANAGE',
        data: [
            {
                icon: HOSidebarHome,
                span: 'Home',
            },
            {
                icon: HOSidebarFolder,
                span: 'Posts',
            },
            {
                icon: HOSidebarAnalytics,
                span: 'Analytics',
            },
            {
                icon: HOSidebarComment,
                span: 'Comments',
            },
        ],
    },
    {
        title: 'TOOLS',
        data: [
            {
                icon: HOSidebarInspirations,
                span: 'Inspirations',
            },
            {
                icon: HOSidebarAcademy,
                span: 'Creator Academy',
            },
            {
                icon: HOSidebarSound,
                span: 'Unlimited sounds',
            },
        ],
    },
    {
        title: 'OTHERS',
        data: [
            {
                icon: HOSidebarFeedBack,
                span: 'Feedback',
            },
        ],
    },
];

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <a href="/">
                    <img src="https://i.postimg.cc/SKG8qLQH/logo.png" alt="Logo studio" className={cx('logo')} />
                </a>
            </div>
            <div className={cx('container')}>
                <Button
                    // disabled
                    primary
                    leftIcon={<PlusIcon width="20px" height="20px" stylesIcon={{ position: 'relative', top: 2 }} />}
                    className={cx('btn')}
                >
                    Upload
                </Button>
                <ContentList list={SIDEBAR_DATA} />
            </div>
            <div className={cx('footer')}>
                <a href="/">
                    <HOSidebarBack width="14px" height="14px" />
                    <span> Back to TikTok</span>
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
