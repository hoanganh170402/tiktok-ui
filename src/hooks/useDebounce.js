import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [dbValue, setDbValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDbValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return dbValue;
}

export default useDebounce;
