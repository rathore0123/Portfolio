import React, { useState } from 'react'
import { Link } from 'react-scroll';
import navImage from '../assets/nav-image.jpg'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
    const [menu, setMenu] = useState(true);

    const openMenu = () => {
        setMenu((prev) => !prev);
    }
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 z-10 bg-white'>
            <div className='flex justify-between items-center h-16'>
                <div className='flex space-x-2'>
                    <img
                        className='h-12 w-12 rounded-full'
                        src={navImage}
                        alt="hackerImage" />
                    <h1 className='font-semibold text-xl cursor-pointer'>Anu<span className='text-green-500 text-2xl'>j</span>
                        <p className='text-sm'>Web Developer</p>
                    </h1>
                </div>
                <div onClick={openMenu}>
                    {menu ? (<IoMdMenu className='md:hidden text-2xl cursor-pointer' />) : (<IoCloseSharp className='md:hidden text-2xl cursor-pointer' />)}
                    <ul className='hidden md:flex space-x-5'>
                        <li className='hover:scale-105 cursor-pointer'>
                            <Link
                                to='home'
                                smooth
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >
                                Home
                            </Link>
                        </li>
                        <li className='hover:scale-105 cursor-pointer'>
                            <Link
                                to='about'
                                smooth
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >
                                About
                            </Link>
                        </li>
                        <li className='hover:scale-105 cursor-pointer'>
                            <Link
                                to='experiance'
                                smooth
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >
                                Experiance
                            </Link>
                        </li>
                        <li className='hover:scale-105 cursor-pointer'>
                            <Link
                                to='portfolio'
                                smooth
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className='hover:scale-105 cursor-pointer'>
                            <Link
                                to='contact'
                                smooth
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className=''>
                {!menu && (
                    <ul className='md:hidden bg-gray-300 text-center absolute top-16 left-0 w-full h-screen p-8 flex flex-col gap-2 justify-center'>
                        <li className='hover:scale-105 cursor-pointer'>
                            <Link
                                onClick={openMenu}
                                to='home'
                                smooth
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >
                                Home
                            </Link>
                        </li>
                        <li className='hover:scale-105 cursor-pointer'>
                            <Link
                                onClick={openMenu}
                                to='about'
                                smooth
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >
                                About
                            </Link>
                        </li>
                        <li className='hover:scale-105 cursor-pointer'>
                            <Link
                                onClick={openMenu}
                                to='experiance'
                                smooth
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >
                                Experiance
                            </Link>
                        </li>
                        <li className='hover:scale-105 cursor-pointer'>
                            <Link
                                onClick={openMenu}
                                to='portfolio'
                                smooth
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className='hover:scale-105 cursor-pointer'>
                            <Link
                                onClick={openMenu}
                                to='contact'
                                smooth
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Header