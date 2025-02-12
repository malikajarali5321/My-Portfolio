import React from 'react'
import { SlCalender } from "react-icons/sl";
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Education = () => {
      useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])
  return (
    <div id='education' className='bg-[#201f1f] text-white h-auto py-28 w-[100%] '>
      <h2  data-aos="fade-up-right" className='text-6xl text-center  '><span className='text-[greenyellow] '>My</span> Journey</h2>
      <div  data-aos="fade-right" className='ml-[14%] flex flex-col gap-11 w-[24%] max-lg:w-[45%] max-md:w-[70%] '>
      <h3 className='text-4xl pt-12  '>Education</h3>
      <div className='border border-[#adff2d] shadow-lg shadow-[#adff2d] rounded-lg h-28  pl-10 '>
        <div className='flex pt-5 gap-3 '>
          <i className='pt-1 '><SlCalender /></i>
          <h5>2020-2022</h5>
        </div>
        <h3 className='text-3xl pt-2 '>Matriculation</h3>
      </div>
        <div className='border border-[#adff2d] shadow-lg shadow-[#adff2d] rounded-lg h-28 pl-10 '>
          <div className='flex pt-5 gap-3 '>
          <i className='pt-1'><SlCalender /></i>
          <h5>2022-2024</h5>
        </div>
        <h3 className='text-3xl pt-2 '>ICS</h3>
      </div>
      </div>
    </div>
  )
}

export default Education