import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // remove event listeners when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // console.log('local props', props);

    // console.log('passProps', passProps);

    // console.log('className:', className)

    // console.log('leftIcon:', leftIcon);

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {/* Nếu có leftIcon thì mới render */}
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
