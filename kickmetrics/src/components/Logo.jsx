import React, { useState, useEffect } from 'react'

const Logo = () => {


    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 480);

    useEffect(() => {
        const handleResize = () => {
            setSmallScreen(window.innerWidth < 480);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



return (
<div>
    <h1 className={`roboto-medium z-[1000] tracking-tight mix-blend-difference text-[#6F6F6F] fixed mx-6 my-6 text-[4em] md:text-[6.5em] lg:text-[7em] cursor-pointer`}>
        {smallScreen ? 'KICK\nMETRICS' : 'KICKMETRICS'}
    </h1>
</div>
)
}

export default Logo