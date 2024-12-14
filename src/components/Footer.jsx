import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
    return (
        <footer className='py-12'>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col items-center justify-center '>
                <div className='flex items-center justify-center space-x-4 list-none'>
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
                <div className='mt-4 border-gray-700 border-t-2 text-center pt-5'>
                    <p className='text-sm'>
                        &copy;copyright 2024 All rights reserved.
                    </p>
                    <p className='text-sm'>
                        Thanks for visit ❤️
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer