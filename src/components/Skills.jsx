import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/javascript.png'
import react from '../images/react.png'
import tailwindcss from '../images/tailwindcss.png'
import bootstrap from '../images/bootstrap.png'
import node from '../images/node.svg'
import wordpress from '../images/wordpress.png'
import digital from '../images/Digital-Marketing.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Skills = () => {
    useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      })
    }, [])
  return (
    <div id='skills' className='bg-[#1a1818] text-white h-auto py-20 w-[100%] text-center'>
      <h2  data-aos="fade-down" className=' text-center text-6xl  '><span className='text-[greenyellow] '>My</span> Skills</h2>
      <div className='flex gap-28 place-self-center pt-16 max-lg:gap-8 max-md:flex-col  '>
        <div data-aos="fade-right" className='w-56 h-48 border border-[#adff2d] shadow-lg shadow-[#adff2d] rounded '>
          <img className='w-[90%] py-1 place-self-center' src={html} alt="" />
          <h3 className='text-[#adff2d]  text-xl '>Html</h3>
        </div>
        <div data-aos="fade-right" className='w-56 h-48  border border-[#adff2d] shadow-lg shadow-[#adff2d] rounded '>
          <img className='w-[70%] place-self-center' src={css} alt="" />
          <h3 className='text-[#adff2d] text-xl '>CSS</h3>
        </div>
        <div data-aos="fade-right" className='w-56 h-48  border border-[#adff2d] shadow-lg shadow-[#adff2d] rounded '>
          <img className='w-[50%] place-self-center py-4' src={js} alt="" />
          <h3 className='text-[#adff2d] text-xl '>Javascript</h3>
        </div>
      </div>
      <div className='flex gap-28 place-self-center pt-16 max-lg:gap-8  max-md:flex-col'>
        <div data-aos="fade-right" className='w-56 h-48  border border-[#adff2d] shadow-lg shadow-[#adff2d] rounded '>
          <img className='w-[90%] py-2 place-self-center' src={react} alt="" />
          <h3 className='text-[#adff2d] text-xl '>React Js</h3>
        </div>
        <div data-aos="fade-right" className='w-56 h-48  border border-[#adff2d] shadow-lg shadow-[#adff2d] rounded '>
          <img className='w-[70%] place-self-center' src={tailwindcss} alt="" />
          <h3 className='text-[#adff2d] text-xl '>Tailwindcss</h3>
        </div>
        <div data-aos="fade-right" className='w-56 h-48  border border-[#adff2d] shadow-lg shadow-[#adff2d] rounded '>
          <img className='w-[70%] py-4 place-self-center' src={bootstrap} alt="" />
          <h3 className='text-[#adff2d] text-xl '>Bootstrap</h3>
        </div>
      </div>
      <div  className='flex gap-28 place-self-center pt-16 max-lg:gap-8 max-md:flex-col '>
        <div data-aos="fade-right" className=' w-56 h-48  border border-[#adff2d] shadow-lg shadow-[#adff2d] rounded '>
          <img className='w-[70%] place-self-center py-8 ' src={node} alt="" />
          <h3 className='text-[#adff2d] text-xl '>Node Js</h3>
        </div>
        <div data-aos="fade-right" className=' w-56 h-48  border border-[#adff2d] shadow-lg shadow-[#adff2d] rounded '>
          <img className='w-[70%] place-self-center' src={wordpress} alt="" />
          <h3 className='text-[#adff2d] text-xl '>Wordpress</h3>
        </div>
        <div data-aos="fade-right" className='w-56 h-48  border border-[#adff2d] shadow-lg shadow-[#adff2d] rounded'>
          <img className='w-[100%] py-6 ' src={digital} alt="" />
          <h3 className='text-[#adff2d] text-xl '>Social Media Marketing</h3>
        </div>
      </div>
    </div>
  )
}

export default Skills
// html,css,js,bootstrap,react js,tailwindcss,seo,wordpress,node js
