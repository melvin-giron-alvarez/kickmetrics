import React, { useState } from 'react'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({ setIsLogin }) => {


    const [email, setEmail] = useState('');


  return (
    <div className='absolute h-[54vh] md:h-[39vh] w-full bg-dimwhite top-[117%] sm:top-[103%] md:top-[112%] lg:top-[63%] '>
        <div className='flex flex-wrap w-full p-10 justify-between'>
            <div className='w-[95%] md:w-[32%] mb-[2em] md:mb-0'>
                <h1 className='roboto-medium text-black tracking-tight pb-[1.1em] text-[1.1em]'>JOIN OUR COMMUNITY</h1>
                <p className='roboto-regular tracking-tighter text-black pb-[1.4em] text-[.75em]'>Become part of our Kick Metrics community by subscribing. Get exclusive content and unlock the full package of football analytics!</p>
                <div className='block w-full roboto-medium'>
                    <p className='tracking-normal text-grey text-[.8em] pb-[1%]'>EMAIL*</p>
                    <input value={email}
                            type='email'
                            placeholder='Enter Email'
                            onChange={(e) => setEmail(e.target.value)} 
                            className='home w-full outline-none text-black tracking-tight py-[1%] border-b-[1px] border-grey bg-[transparent]'
                            required />
                </div>
            </div>
            <div className='block md:flex w-[30%] md:w-[30%] roboto-medium text-black justify-evenly text-[1.1em]'>
                <h1 onClick={() => setIsLogin(true)} className={`tracking-tighter w-auto cursor-pointer pb-[1em]`}><a href='#login'>LOG IN</a></h1>
                <h1 onClick={() => setIsLogin(false)} className={` tracking-tighter w-auto cursor-pointer`}><a href='#login'>SIGN UP</a></h1>
            </div>
            <div className='w-[30%] md:w-[15%]'>
                <div className='w-[15%]'>
                    <h1 className='roboto-medium text-black tracking-tight pb-[1.1em] text-[1.1em]'>SOCIALS</h1>
                    <div className='flex text-black text-[1em] sm:text-[1.2em]'>
                        <a href='https://www.instagram.com/433' target="_blank" rel="noopener noreferrer"><FaInstagram className='mr-2' /></a>
                        <a href='https://www.facebook.com/official433' target="_blank" rel="noopener noreferrer"><FaFacebook className='mr-2'/></a>
                        <a href='https://x.com/433' target="_blank" rel="noopener noreferrer"><FaXTwitter className='mr-2'/></a>
                    </div>
                </div>
            </div>
            <div className='w-[30%] md:w-[15%]'>
                    <h1 className='roboto-medium text-black tracking-tight pb-[1.1em] text-[1.1em]'>CONTACT</h1>
                    <p className='roboto-regular tracking-tighter text-black pb-[.5em] text-[.7em]'>+1 (123) 456 - 7890</p>
                    <p className='roboto-regular tracking-tight text-black text-[.7em]'>info@kickmetrics.com</p>
            </div>
        </div>
        <p className='roboto-medium tracking-normal pt-[3.3em] text-[.7em] text-black text-center'>ALL RIGHTS RESERVED<br />© 2024</p>
    </div>
  )
}

export default Footer