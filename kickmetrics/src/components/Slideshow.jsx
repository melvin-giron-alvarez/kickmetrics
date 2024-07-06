import React, { useEffect, useState } from 'react'
import { slider } from '../constants'

const Slideshow = () => {


    return (
        <div className="slide flex w-full overflow-hidden absolute top-[90%] sm:top-[75%] lg:top-[25%]">
            <div className=' flex w-full slide-small sm:slide-container'>
                {slider.map((item, index) => (
                    <img key={item.id} src={item.image} className='mx-1 w-[300px] md:w-[410px] h-auto ' />
                ))}
            </div>
        </div>
    );
}

export default Slideshow;