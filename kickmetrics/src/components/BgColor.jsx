import { useEffect } from 'react'

const BgColor = (color) => {

    useEffect(() => {
        document.body.style.backgroundColor = color;

        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [color]);

};

export default BgColor