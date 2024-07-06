import React, { useEffect } from 'react'
import Letter from './Letter'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Board = () => {

    useEffect(() => {
        AOS.init({duration: 900})
    }, [])

  return (
    <div className='flex w-[250px] sm:w-[300px] h-[320px] sm:h-[370px] flex-col mx-auto'>
        <div data-aos="flip-down" className='flex flex-row mb-1'>
            <Letter position={0} attempt={0} />
            <Letter position={1} attempt={0} />
            <Letter position={2} attempt={0} />
            <Letter position={3} attempt={0} />
            <Letter position={4} attempt={0} />
        </div>
        <div data-aos="flip-up" className='flex flex-row mb-1'>
            <Letter position={0} attempt={1} />
            <Letter position={1} attempt={1} />
            <Letter position={2} attempt={1} />
            <Letter position={3} attempt={1} />
            <Letter position={4} attempt={1} />
        </div>
        <div data-aos="flip-down" className='flex flex-row mb-1'>
            <Letter position={0} attempt={2} />
            <Letter position={1} attempt={2} />
            <Letter position={2} attempt={2} />
            <Letter position={3} attempt={2} />
            <Letter position={4} attempt={2} />
        </div>
        <div data-aos="flip-up" className='flex flex-row mb-1'>
            <Letter position={0} attempt={3} />
            <Letter position={1} attempt={3} />
            <Letter position={2} attempt={3} />
            <Letter position={3} attempt={3} />
            <Letter position={4} attempt={3} />
        </div>
        <div data-aos="flip-down" className='flex flex-row mb-1'>
            <Letter position={0} attempt={4} />
            <Letter position={1} attempt={4} />
            <Letter position={2} attempt={4} />
            <Letter position={3} attempt={4} />
            <Letter position={4} attempt={4} />
        </div>
        <div data-aos="flip-up" className='flex flex-row mb-1'>
            <Letter position={0} attempt={5} />
            <Letter position={1} attempt={5} />
            <Letter position={2} attempt={5} />
            <Letter position={3} attempt={5} />
            <Letter position={4} attempt={5} />
        </div>
    </div>
  )
}

export default Board