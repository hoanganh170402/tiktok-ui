import { useState } from 'react';
import classNames from 'classnames';

import styles from './Image.module.scss';
import img from '~/assets/images';

function Image({ className, src, alt, fallBack: customFallBack = img.noImages, ...passProps }) {
    const [fallBack, setFallBack] = useState('');
    const handleOnError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            {...passProps}
            onError={handleOnError}
        />
    );
}

export default Image;
