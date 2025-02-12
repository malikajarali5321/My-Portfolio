import React from 'react'
import { LuCrown } from "react-icons/lu";
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
      useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])
  return (
    <div id='services' className='bg-[#0e0c0c] text-white  pl-[6vw] py-14 h-auto w-[100%]  '>
      <h2  data-aos="fade-down" className='text-6xl pt-20 text-center '><span className='text-[#adff2d] '>My</span> Services</h2>
      <div data-aos="fade-right" className='grid grid-cols-3 py-32 justify-between gap-y-20  max-lg:grid-cols-2 max-md:grid-cols-1' >
        <div className='flex gap-3 px-[6%] border border-[#adff2d] shadow-lg shadow-[#adff2d] w-[78%] h-28 rounded-e-[60px] scale-100 hover:scale-110 ease-in duration-1000 max-md:px-[3%]  max-md:place-self-center'>
          <i className='text-2xl text-[yellowgreen] place-self-center'><LuCrown /></i>
          <h2 className='place-self-center text-2xl'>Web Development</h2>
        </div>
        <div className='flex gap-3 px-[6%] border border-[#adff2d] shadow-lg shadow-[#adff2d] w-[78%] h-28 rounded-e-[60px] scale-100 hover:scale-110 ease-in duration-1000 max-md:px-[3%] max-md:place-self-center '>
          <i className='text-2xl text-[yellowgreen] place-self-center'><LuCrown /></i>
          <h2 className='place-self-center text-2xl'>Wordpress</h2>
        </div>
        <div className='flex gap-3 px-[6%] border border-[#adff2d] shadow-lg shadow-[#adff2d] w-[78%] h-28 rounded-e-[60px] scale-100 hover:scale-110 ease-in duration-1000 max-md:px-[3%] max-md:place-self-center '>
          <i className='text-2xl text-[yellowgreen] place-self-center'><LuCrown /></i>
          <h2 className='place-self-center text-2xl'>Photography</h2>
        </div>
        <div className='flex gap-3 px-[6%] border border-[#adff2d] shadow-lg shadow-[#adff2d] w-[78%] h-28 rounded-e-[60px] scale-100 hover:scale-110 ease-in duration-1000 max-md:px-[3%] max-md:place-self-center '>
          <i className='text-2xl text-[yellowgreen] place-self-center'><LuCrown /></i>
          <h2 className='place-self-center text-2xl'>Graphic Designing</h2>
        </div>
        <div className='flex gap-3 px-[6%] border border-[#adff2d] shadow-lg shadow-[#adff2d] w-[78%] h-28 rounded-e-[60px] scale-100 hover:scale-110 ease-in duration-1000 max-md:px-[3%] max-md:place-self-center '>
          <i className='text-2xl text-[yellowgreen] place-self-center'><LuCrown /></i>
          <h2 className='place-self-center text-2xl'>SEO</h2>
        </div>
        <div className='flex gap-3 px-[6%] border border-[#adff2d] shadow-lg shadow-[#adff2d] w-[78%] h-28 rounded-e-[60px] scale-100 hover:scale-110 ease-in duration-1000 max-md:px-[3%] max-md:place-self-center '>
          <i className='text-2xl text-[yellowgreen] place-self-center'><LuCrown /></i>
          <h2 className='place-self-center text-2xl'>Social Media</h2>
        </div>
      </div>
    </div>
  )
}

export default Services
