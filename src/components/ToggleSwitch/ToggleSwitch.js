import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ToggleSwitch.module.scss';

const cx = classNames.bind(styles);

const ToggleSwitch = ({ label, className }) => {
    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked((prev) => !prev); // logic toggle nằm ở đây
    };

    return (
        <label className={cx('toggle-switch', className)}>
            <input type="checkbox" checked={checked} onChange={handleToggle} />
            <span className={cx('slider')} />
            {label && <span className="label-text">{label}</span>}
        </label>
    );
};

export default ToggleSwitch;
