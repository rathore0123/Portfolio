import React from 'react'
import resume from '../assets/Resume.pdf'
import homeImage from '../assets/nav-image.jpg'
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandMongodb } from "react-icons/tb";
import { ReactTyped } from "react-typed";


function Home() {
    return (
        <>
            <div name="home" className='max-w-screen-2xl container mx-auto mb-5 md:mb-20 px-4 md:px-20 pt-16 flex flex-col-reverse md:flex-row'>
                <div className='w-full md:w-1/2 mt-12 md:mt-24'>
                    <span className='text-xl'>Welcome In My Feed</span>
                    <div className='text-2xl md:text-4xl mb-4 mt-2'>
                        <h1>Hello I'm a
                            <ReactTyped
                                className='text-red-700 font-bold ml-2'
                                strings={["Web Developer", "Programmer", "Web Designer", "App Developer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </h1>
                    </div>
                    <p className='text-sm md:text-base text-justify'>
                        Hello, I'm <span className='text-red-500 mx-[2px]'>Anuj Rathore</span> – A Web Developer
                        Crafting innovative and user-friendly web applications with a passion for clean, efficient code. Currently building a comprehensive house renting platform to simplify property management and tenant-locator services.
                    </p>

                    <div className='w-full flex flex-col items-center gap-5 md:flex-row md:justify-between my-10'>
                        <div className='w-fit md:w-1/2'>
                            <h1 className='font-bold'>Available on</h1>
                            <div className='flex items-center space-x-4 list-none'>
                                <li className='bg-slate-300 rounded-full p-1 active:bg-slate-500'>
                                    <a href="https://www.linkedin.com/in/anujrathore23" target='_blank'>
                                        <CiLinkedin size={24} className='cursor-pointer font-extrabold' />
                                    </a>
                                </li>
                                <li className='bg-slate-300 rounded-full p-1 active:bg-slate-500'>
                                    <a href="https://wa.me/9129172583" target='_blank'>
                                        <FaWhatsapp size={24} className='cursor-pointer font-extrabold' />
                                    </a>
                                </li>
                                <li className='bg-slate-300 rounded-full p-1 active:bg-slate-500'>
                                    <a href="https://x.com/anujrathore009" target='_blank'>
                                        <FaXTwitter size={20} className='cursor-pointer font-extrabold' />
                                    </a>
                                </li>
                                <li className='bg-slate-300 rounded-full p-1 active:bg-slate-500'>
                                    <a href="https://www.instagram.com/ra_thor_23" target='_blank'>
                                        <FaInstagram size={22} className='cursor-pointer font-extrabold' />
                                    </a>
                                </li>
                            </div>
                        </div>
                        <div className='w-fit md:w-1/2'>
                            <h1 className='font-bold'>Currently Working on</h1>
                            <div className='flex items-center space-x-4 list-none'>
                                <li className='bg-slate-300 rounded-full p-1 active:bg-slate-500'>
                                    <a href="">
                                        <IoLogoNodejs size={24} className='cursor-pointer font-extrabold' />
                                    </a>
                                </li>
                                <li className='bg-slate-300 rounded-full p-1 active:bg-slate-500'>
                                    <a href="">
                                        <SiExpress size={22} className='cursor-pointer font-extrabold' />
                                    </a>
                                </li>
                                <li className='bg-slate-300 rounded-full p-1 active:bg-slate-500'>
                                    <a href="">
                                        <RiReactjsLine size={20} className='cursor-pointer font-extrabold' />
                                    </a>
                                </li>
                                <li className='bg-slate-300 rounded-full p-1 active:bg-slate-500'>
                                    <a href="">
                                        <TbBrandMongodb size={22} className='cursor-pointer font-extrabold' />
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <a href={resume} download="resume.pdf"
                            className='text-xs font-bold mx-auto text-white bg-gradient-to-r from-red-500 to-violet-500 px-3 py-2 rounded-md text-center active:shadow-xl'
                        >
                            Download CV
                        </a>
                        {/* <button type="button"></button> */}
                    </div>
                </div>
                <div className='w-full md:w-1/2 mt-12 md:mt-24 grid place-content-center'>
                    <img
                        className='rounded-full h-[300px] w-[300px] lg:h-[450px] lg:w-[450px]'
                        src={homeImage}
                        alt="image"
                    />
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home