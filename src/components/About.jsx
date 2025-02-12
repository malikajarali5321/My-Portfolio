import React from "react";
import Ajar from "../images/malik ajar ali.jpeg";
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
      useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])
  return (
    <div id="about" className="bg-[#161010] text-white h-auto w-[100%] py-10 ">
    
      <h2  data-aos="fade-up" className="text-center text-5xl pt-8 ">
        About<span className="text-[greenyellow]"> Me</span>
      </h2>
      <div className="pt-4 mt-5 rounded-full border-t-8 border-b-8 border-[white] place-self-center w-64 h-[270px] ">
        <img  data-aos="flip-right"
          className="rounded-full w-56 h-56 ml-4 border-2 border-[#adff2d] "
          src={Ajar}
          alt=""
        />
      </div>
      <h3 className="text-center pt-3 text-3xl font-bold ">
        Frontend Developer <span className="text-[#adff2d]">!</span>
      </h3>
      <p  data-aos="fade-up" className="mt-3 mb-6 text-2xl place-self-center text-justify w-[80%] max-md:w-[95%] max-md:px-[2.5%] max-md:text-xl ">
        I am dedicated web developer with a passion for creating modern,
        responsive, and user-focused digital experiences. My expertise lies in
        web development, design, and online marketing, helping startups and
        small businesses turn their ideas into impactful digital solutions.I
        specialize in building websites that not only look great but also
        deliver seamless functionality and measurable results. With a commitment
        to collaboration, I work closely with my clients to bring their visions
        to life while ensuring every project aligns with their goals.My approach
        combines technical precision with a deep understanding of user
        experience, ensuring that every website I create is not only visually
        striking but also optimized for performance and scalability.
      </p>
      <div className="place-self-center pt-4">
      <a
        className="border-2 border-[greenyellow] hover:text-[black] hover:bg-[greenyellow]  p-3 px-8 text-[greenyellow] text-xl rounded-lg  "
        href="#home"
      >
        Read More
      </a>
      </div>
    </div>
  );
};

export default About;
