import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
      useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])
  return (
    <div className='text-center bg-black text-white p-2'>
      <i className='text-[#34ff2d9f]  z-[9999] text-6xl fixed right-16 bottom-16 max-lg:text-5xl max-md:right-6 max-md:bottom-20'><a href="http://wa.me/3350030160"><IoLogoWhatsapp /></a></i>
      <p className='text-lg'>Copyright © 2024 by Malik Ajar Ali | All Rights Reserved.</p>
    </div>
  )
}

export default Footer
