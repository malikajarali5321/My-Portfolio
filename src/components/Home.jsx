
// import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Ajar from "../images/malik ajar ali.jpeg";
import CV from '../images/Malik Ajar Ali.CV.png'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
      useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])
  return (
    <div id="home" className="text-white bg-black h-auto w-[100%] py-12 ">
      <div className="flex pt-[135px] justify-around max-lg:flex-col max-lg:pt-12 max-lg:place-self-center  ">
        <div data-aos="fade-right" className="pl-14 pt-12 w-[53%] max-lg:w-[95%] max-lg:text-center max-md:pl-1 ">
          <h2 className="text-5xl font-bold">
            Hi,I'm <span className="text-[greenyellow] ">Malik Ajar Ali </span>
          </h2>
          <h3 className="mt-7 text-3xl motion-preset-typewriter-[18] motion-duration-[3s] font-bold text-[lightgreen] max-lg:place-self-center ">
            Frontend Developer
          </h3>
          <p className="pt-6 text-xl max-lg:text-justify max-md:px-3">
            I'm a passionate and dedicated web developer specializing in
            creating modern, responsive, and user-friendly websites. With a keen
            eye for design and a commitment to clean, efficient code, I bring
            ideas to life on the web. My expertise lies in crafting responsive
            designs and writing optimized code that ensures seamless user
            experiences across all devices."
          </p>
          <div className="flex gap-20 pt-8 max-lg:place-self-center max-md:flex-col max-md:gap-5">
            <button className="border-2 border-[greenyellow] hover:text-[black] hover:bg-[greenyellow]  p-2 px-8 text-[greenyellow] text-xl rounded-lg ">
             <a href="http://wa.me/3350030160"> Let's Talk</a>
            </button>
            <button className="border-2 border-[greenyellow] hover:text-[black] hover:bg-[greenyellow] p-2 px-8 text-[greenyellow] text-xl rounded-lg">
              <a href={CV} >Resume</a>
            </button>
          </div>
          <div className="flex gap-10 pt-10 max-lg:place-self-center">
            <i className="border-2 p-2  text-2xl rounded-full hover:bg-[lightblue] text-[blue] ">
              <a href="https://www.facebook.com/malikajar.ali"><FaFacebookF /></a>
            </i>
            <i className="border-2 p-2  text-2xl rounded-full hover:bg-[lightblue] text-[#e2578c]">
              <a href="https://www.instagram.com/malikajarali/"><FaInstagramSquare />
              </a>
            </i>
            <i className="border-2 p-2  text-2xl rounded-full hover:bg-[lightblue] text-[blue]">
              <a href="https://www.linkedin.com/in/malik-ajar-ali-393487329/"><FaLinkedinIn /></a>
            </i>
          </div>
        </div>
        <div className="pt-2 ml-4 max-lg:place-self-center max-lg:ml-0 max-lg:pt-8">
          <img  data-aos="flip-right"
            className="w-[400px] h-[70vh] rounded-xl max-lg:h-[40vh] max-md:w-72 " 
            src={Ajar}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;