import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import TippyHeadLess from '@tippyjs/react/headless'; // different import path!

import styles from './ActionModuleList.module.scss';
import {
    ActionShareLink,
    BookmarkIcon,
    CommentIcon,
    FbIcon,
    NonLikeIcon,
    Reposted,
    ShareEmbedIcon,
    ShareIcon,
    WhatsAppIcon,
} from '~/components/Icons';
import { PopperWrapper } from '~/components/Popper';
import ShareSocialButtons from './ShareSocialButtons';

const cx = classNames.bind(styles);
function ActionModuleList({ onLikeToggle, isLike, likes, comments, onBookmarkToggle, isBookmark, bookmarks }) {
    const SOCIAL_BTNS = [
        { icon: Reposted, label: 'Reposted', className: 'reposted-icon' },
        { icon: ActionShareLink, label: 'Copy', className: 'actionShareLink-icon' },
        { icon: ShareEmbedIcon, label: 'Embed', className: 'shareembed-icon' },
        { icon: WhatsAppIcon, label: 'WhatsApp', className: 'whatsapp-icon' },
        { icon: FbIcon, label: 'Facebook', className: 'fb-icon' },
    ];

    const renderSocialButtons = (attrs) => (
        <PopperWrapper className={cx('change-pss')} tabIndex="-1" {...attrs}>
            <ShareSocialButtons />
        </PopperWrapper>
    );
    return (
        <div className={cx('action-list')}>
            <div className={cx('action-btns')}>
                <div className={cx('info-btn')}>
                    <span className={cx('icon')} onClick={onLikeToggle}>
                        <NonLikeIcon className={cx('icon-like', { liked: isLike })} />
                    </span>
                    <span className={cx('info-count')}>{likes}</span>
                </div>
                <div className={cx('info-btn')}>
                    <span className={cx('icon')}>
                        <CommentIcon className={cx('icon-comment')} />
                    </span>
                    <span className={cx('info-count')}>{comments}</span>
                </div>
                <div className={cx('info-btn')}>
                    <span className={cx('icon')} onClick={onBookmarkToggle}>
                        <BookmarkIcon className={cx('icon-bookmark', { bookmarked: isBookmark })} />
                    </span>
                    <span className={cx('info-count')}>{bookmarks}</span>
                </div>
            </div>

            <div className={cx('social-btns')}>
                {SOCIAL_BTNS.map(({ icon: Icon, label, className }) => (
                    <div key={label} className={cx('action-item')}>
                        <Tippy content={label} placement="bottom">
                            <div className={cx('action-icon')}>
                                <Icon className={cx(className)} />
                            </div>
                        </Tippy>
                    </div>
                ))}
                <TippyHeadLess interactive render={renderSocialButtons} placement="bottom-end" delay={[0, 100]}>
                    <div className={cx('info-btn')}>
                        <span className={cx('icon', 'ds-bg')}>
                            <ShareIcon className={cx('icon-share')} />
                        </span>
                    </div>
                </TippyHeadLess>
            </div>
        </div>
    );
}

export default ActionModuleList;
