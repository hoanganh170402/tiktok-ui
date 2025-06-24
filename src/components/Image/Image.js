import { useState } from 'react';
import classNames from 'classnames';
import img from '~/assets/images';
import styles from './image.module.scss';

function Image({ className, alt, src, fallback: customFallBack = img.noImage, ...passProps }) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            alt={alt}
            src={fallback || src}
            {...passProps}
            onError={handleError}
        />
    );
}

export default Image;
