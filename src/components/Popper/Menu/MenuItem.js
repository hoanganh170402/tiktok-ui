import Button from '~/components/Button';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate
    })
    return (
        <Button to={data.to} leftIcon={data.icon} className={classes} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
