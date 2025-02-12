import React, {useEffect} from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'

const contact = () => {
      useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])
  return (
    <div id='contact' className='bg-[#242121] h-auto text-white py-3 max-md:h-auto '>
      <div className='flex justify-between py-24 px-[10%] max-lg:flex-col max-md:px-[3%]'>
        <div data-aos="fade-right" className='flex flex-col gap-6 w-[45%] max-lg:w-[95%] '>
          <h2 className='text-5xl font-semibold '>Get In <span className='text-[#adff2d] '>Touch</span></h2>
          <div className='flex flex-col gap-3 pl-16 text-2xl text-[#e6e4e465] w-[100%] max-md:pl-2 max-md:text-xl '>
            <div className='w-[90%] max-md:w-[95%] '>
              <p>If you have any questions or would like to collaborate, please dont hesitate to contact.</p>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#adff2d] '><a href="mailto:malikajarali345@gmail.com"><FaEnvelope /></a></i>
              <h4 className='hover:text-white'><a href="mailto:malikajarali345@gmail.com">malikajarali345@gmail.com</a></h4>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#adff2d] '><a href="tel:+923350030160"><FaPhoneAlt /></a></i>
              <h4 className='hover:text-white'><a href="tel:+923350030160">+92 335 0030160</a></h4>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#adff2d] '><a href="https://www.google.com/maps/place/Rawalpindi,+Pakistan" target="_blank"><IoLocationOutline /></a></i>
              <h4 className='hover:text-white'><a href="https://www.google.com/maps/place/Rawalpindi,+Pakistan" target="_blank">Rawalpindi,Pakistan</a></h4>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#adff2d] '><a href="https://www.facebook.com/malikajar.ali"><FaFacebookSquare /></a></i>
              <h4 className='hover:text-white'><a href="https://www.facebook.com/malikajar.ali">Malik Ajar Ali</a></h4>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#adff2d] '><a href="https://www.instagram.com/malikajarali/"><AiFillInstagram /></a></i>
              <h4 className='hover:text-white'><a href="https://www.instagram.com/malikajarali/">Malik Ajar Ali</a></h4>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#adff2d] '><a href="https://www.linkedin.com/in/malik-ajar-ali-393487329/"><FaLinkedin /></a></i>
              <h4 className='hover:text-white'><a href="https://www.linkedin.com/in/malik-ajar-ali-393487329/">Malik Ajar Ali</a></h4>
            </div>
          </div>
        </div>
       <div data-aos="fade-down" className='w-[45%] max-lg:w-[90%] max-lg:mx-[10%] max-md:mx-[3%] '>
  <div className='flex flex-col gap-5 border-2 border-[yellowgreen] w-[90%] rounded-md p-14 mt-20 max-md:w-[100%] '>
    <input type="text" placeholder='First Name' className='bg-[#2b2a2a] shadow-lg shadow-[grey] p-3' />
    <input type="text" placeholder='Last Name' className='bg-[#2b2a2a] shadow-lg shadow-[grey] p-3' />
    <input type="text" placeholder='Subject' className='bg-[#2b2a2a] shadow-lg shadow-[grey] p-3' />
    <textarea name="text" placeholder='Message' className='resize-none bg-[#2b2a2a] shadow-lg shadow-[grey] pl-3 pt-3 pb-10'></textarea>
    <button className='border border-[#adff2d] w-[50%] p-3 rounded-lg text-[#adff2d] shadow-lg shadow-[#242121] my-3 hover:shadow-[3px 3px] hover:shadow-[#adff2d] max-md:w-[70%] max-md:h-10 max-md:p-2 max-md:ml-[14%] '>
      <a href="mailto:malikajarali345@gmail.com?subject=Subject&body=Hi,%0A%0AMessage%20Body%20Here" target="_blank" rel="noopener noreferrer">Send Message</a>
    </button>
  </div>
</div>

      </div>
    </div>
  )
}

export default contact
