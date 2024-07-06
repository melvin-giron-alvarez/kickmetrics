import React, { useEffect } from 'react'
import { links } from '../constants'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'

const NavLinks = () => {

  useEffect(() => {
    AOS.init({duration: 1000})
}, [])


  return (
    <div className='w-full block'>
        {links.map((item, index) => (
            <Link key={item.id} to={item.section} >
            <div data-aos="fade-right" className={`${index % 2 === 0 ? 'bg-[#6f6f6fe5]' : 'bg-[#0B1314e5]' } cursor-pointer py-[1.5em] sm:py-[2em] lg:py-[3.5em] my-3 md:my-8 }`}>
                <p className='roboto-medium tracking-tight text-dimwhite text-[1.5em] sm:text-[2em] md:text-[3em] ml-3 sm:ml-6'>{item.text}</p>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default NavLinks