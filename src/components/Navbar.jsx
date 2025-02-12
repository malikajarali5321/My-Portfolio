import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useEffect } from 'react';
import { useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'


const Navbar = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  const [mode, setmode] = useState(0)
  const [another, setanother] = useState('none')
  const [count, setcount] = useState('flex')
  const [bar, setbar] = useState('flex')

  function change() {

    let hamburger = document.getElementById('hamburger');
    let cross = document.getElementById('cross');
    let nav = document.getElementById('nav');

    hamburger.style.display = another;
    cross.style.display = count;
    nav.style.display = bar;

    if (mode == 0) {
      setanother('flex')
      setcount('none')
      setbar('none')
      setmode(1)
    }
    else {
      setanother('none')
      setcount('flex')
      setbar('flex')
      setmode(0)
    }

  }
  return (
    <div className='fixed w-[100%] z-[9999]'>
      <div className='bg-[#141414] h-20'>
        <div className='flex items-center justify-between w-full px-16 py-2 max-lg:px-8 max-md:px-4 '>
          <h2 className='text-3xl text-white'><a href="#home">Malik <span className='text-[#adff2d] font-semibold '>Ajar.</span></a></h2>
          <div className='flex items-center py-3 '>
            <ul className='flex gap-10 text-xl text-white max-lg:hidden '>
              <li className='motion-preset-expand hover:text-[greenyellow]'><a href="#home">Home</a></li>
              <li className='motion-preset-expand hover:text-[greenyellow]'><a href="#about">About</a></li>
              <li className='motion-preset-expand hover:text-[greenyellow]'><a href="#education">Education</a></li>
              <li className='motion-preset-expand hover:text-[greenyellow]'><a href="#skills">Skills</a></li>
              <li className='motion-preset-expand hover:text-[greenyellow]'><a href="#services">Services</a></li>
              <li className='motion-preset-expand hover:text-[greenyellow]'><a href="#contact">Contact</a></li>
            </ul>
            <div className='flex max-lg:text-white max-lg: '>
              <i id='hamburger' onClick={change} className='hidden max-lg:flex '><RxHamburgerMenu /></i>
              <i id='cross' onClick={change} className='hidden ' ><RxCross2 /></i>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul id='nav' onClick={change} className='flex-col px-4 text-xl bg-[#edf0eee7] gap-3 h-[24vh] pt-2 hidden max-md:h-[38%] '>
          <li className='motion-preset-slide-right-md hover:text-[#adff2d]'><a href="#home">Home</a></li>
          <li className='motion-preset-slide-left-md hover:text-[#adff2d]'><a href="#about">About</a></li>
          <li className='mmotion-preset-slide-right-md hover:text-[#adff2d]'><a href="#education">Education</a></li>
          <li className='motion-preset-slide-left-md hover:text-[#adff2d]'><a href="#skills">Skills</a></li>
          <li className='motion-preset-slide-right-md hover:text-[#adff2d]'><a href="#services">Services</a></li>
          <li className='motion-preset-slide-left-md hover:text-[#adff2d]'><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
