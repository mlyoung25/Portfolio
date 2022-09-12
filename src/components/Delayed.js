import { useState, useEffect } from 'react';

const Delayed = ({ children, wait=500 }) => {
    const [isShown, setShown] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShown(true)
        }, wait)
    }, [wait])
    return isShown ? children : null
}

export default Delayed