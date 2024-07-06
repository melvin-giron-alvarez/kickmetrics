import { useState, useEffect } from 'react'
import { BgColor, Welcome, NavLinks } from '../components';
import { Link } from 'react-router-dom';
import { players } from '../constants';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Homepage = () => {
    BgColor('#EFEEED')

    const [playerIMG, setPlayerIMG] = useState(0);

    useEffect (() => {
        const interval = setInterval(() => {
            setPlayerIMG((prevIndex) => (prevIndex + 1 ) % players.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])


  return (
    <div className='w-full h-screen'>
        <Welcome color={'grey'} hover={'black'}s />
        <div className='w-full flex flex-wrap px-8 mt-7 justify-between md:items-center'>
            <div className='mx-auto pb-[40%] sm:pb-[15%] md:pb-0 md:mx-0 w-[70%] md:w-[55%]'>
                <div className='block text-black text-center sm:flex justify-evenly w-full roboto-medium '>
                    <Link to='/homepage/standings'><h1 className='mb-2  w-auto text-[.9em] sm:text-[1em] md:text-[1.1em] cursor-pointer'>STANDINGS</h1></Link>
                    <a href='/homepage/footble'><h1 className='w-auto text-[.9em] sm:text-[1em] md:text-[1.1em]'>FOOTBLE</h1></a>
                </div>
                <NavLinks />
            </div>
            <div className='mx-auto md:mx-0 w-[73%] sm:w-[40%] relative flex justify-center items-center'>
                {players.map((items, index) => (
                    <img key={items.id} src={items.image} className={`w-full absolute drop-shadow-[-5px_-5px_10px_rgba(0,0,0,0.25)] transition-opacity duration-700 ease ${index === playerIMG ? 'z-[10] opacity-100' : 'opacity-0'}`}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Homepage