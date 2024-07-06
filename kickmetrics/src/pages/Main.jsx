import React, { useState, useEffect } from 'react';
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'
import { BgColor, Logo, LoginSignup, Info, Slideshow, Footer } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Main = () => {
    BgColor('#6F6F6F');

    const[isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (
        <div className='w-full'>
            <Logo />
            <div className='relative w-full h-screen'>
                <p className='roboto-regular tracking-tighter text-black text-[1.4em] md:text-[1.8em] lg:text-[2em] absolute w-auto top-[22%] lg:top-[25%] right-[8%] pl-6 hidden sm:flex'>A place to keep track of your<br /> favorite players and teams stats.</p>
                <img data-aos="fade-up-left" src={home1} className='w-[700px] absolute right-0 top-[22%] sm:top-[37%] lg:w-[750px] lg:top-[40%]'/>
                <LoginSignup isLogin={isLogin} setIsLogin={setIsLogin}  />
            </div>
            <div className='relative w-full h-screen'>
                <p data-aos="fade-left" className='w-[75%] sm:w-[55%] lg:w-[50%] roboto-regular tracking-tighter text-black text-[1.1em] lg:text-[1.3em] absolute top-[50%] sm:top-[100%] right-[10%] lg:top-[40%] lg:right-[30%] pl-6'>At Kick Metrics, we are your ultimate source for your latest insight on football related content. Whether you’re a passionate fan or have a curiosity of knowing player and club performances, we provide comprehensive and up-to-date stats on all your favorite players and teams.</p>
                <div className='absolute top-[130%] lg:top-[80%] w-full h-[158vh] sm:h-[142vh] bg-black'></div>
                <img data-aos="fade-up-right" src={home2} className='w-[250px] lg:w-[30%] absolute md:left-[10%] top-[100%] sm:top-[125%] left-[12%] lg:top-[60%] lg:left-16'/>
            </div>
            <div className='relative w-full h-screen'>
                <Info  />
            </div>
            <div className='relative h-screen w-full'>
                <Slideshow />
                <Footer setIsLogin={setIsLogin}  />
            </div>
        </div>
    )
}

export default Main