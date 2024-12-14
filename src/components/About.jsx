import React, { useState } from 'react'
import profilePic from '../assets/profile.jpg'

function About() {
    const [skills, setSkills] = useState(true);
    const [experiance, setExperiance] = useState(false);
    const [education, setEducation] = useState(false);

    const toggleSkillDiv = () => {
        setSkills(true);
        setExperiance(false);
        setEducation(false);
    }

    const toggleExperianceDiv = () => {
        setSkills(false);
        setExperiance(true);
        setEducation(false);
    }

    const toggleEducationDiv = () => {
        setSkills(false);
        setExperiance(false);
        setEducation(true);
    }
    return (
        <>
            <div name="about" className='max-w-screen-2xl container mx-auto mb-5 md:mb-20 px-4 md:px-20 flex flex-col md:flex-row justify-between'>
                <div className='w-full md:w-1/2 mt-12 md:mt-20 space-y-2 order-2'>
                    <h1 className='text-2xl md:text-3xl font-bold cursor-pointer'>About</h1>
                    <p className='text-justify'>Motivated final-year Computer Science & Engineering student with a knack for problem-solving and a deep interest in web development. I specialize in creating responsive and engaging web applications using:
                    </p>
                    <div className='text-justify mt-2'>
                        <h2 className='font-medium'>Frontend:
                            <span className='text-sm font-normal ml-1'>HTML, CSS, JavaScript, React, and Tailwind CSS.</span>
                        </h2>
                        <h2 className='font-medium'>Backend:
                            <span className='text-sm font-normal ml-1'>Node.js, Express.js, and MongoDB.</span>
                        </h2>
                        <h2 className='font-medium'>Tools:
                            <span className='text-sm font-normal ml-1'>Git, GitHub, and VS Code.</span>
                        </h2>
                    </div>
                    <div className='flex space-x-5'>
                        <h2
                            className={`cursor-pointer ${skills ? "underline" : ""}`}
                            onClick={toggleSkillDiv}>
                            Skills
                        </h2>
                        <h2
                            name="experiance"
                            className={`cursor-pointer ${experiance ? "underline" : ""}`}
                            onClick={toggleExperianceDiv}>
                            Experiance
                        </h2>
                        <h2
                            className={`cursor-pointer ${education ? "underline" : ""}`}
                            onClick={toggleEducationDiv}>
                            Education
                        </h2>
                    </div>
                    <div>
                        {skills &&
                            <div className="text-justify">
                                <ul>
                                    <li className='text-gray-500 text-sm mt-2'>HTML</li>
                                    <li className='text-gray-500 text-sm mt-2'>CSS</li>
                                    <li className='text-gray-500 text-sm mt-2'>JavaScript</li>
                                    <li className='text-gray-500 text-sm mt-2'>ReactJs</li>
                                    <li className='text-gray-500 text-sm mt-2'>NodeJs</li>
                                    <li className='text-gray-500 text-sm mt-2'>ExpressJs</li>
                                    <li className='text-gray-500 text-sm mt-2'>MongoDB</li>
                                    <li className='text-gray-500 text-sm mt-2'>Python</li>
                                    <li className='text-gray-500 text-sm mt-2'>Tailwind CSS</li>
                                </ul>
                            </div>
                        }
                        {experiance &&
                            <div className="text-justify">
                                <div className='mt-2'>
                                    <h2 className='text-lg font-medium space-y-1'>Web Development Internship</h2>
                                    <p className='text-gray-500 text-sm'>Tech OCTANET SERVICES PVT LTD</p>
                                    <p className='text-gray-500 text-xs'>1st September 2024 - 1st November 2024</p>
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-lg font-medium space-y-1'>Software Development Internship</h2>
                                    <p className='text-gray-500 text-sm'>GrapplTech</p>
                                    <p className='text-gray-500 text-xs'>24 June 2024 - 24 July 2024</p>
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-lg font-medium space-y-1'>ERP Executive Intern</h2>
                                    <p className='text-gray-500 text-sm'>G.C.R.G Group of Institution, Lucknow, Uttar Pradesh</p>
                                    <p className='text-gray-500 text-xs'>05 April 2023 - 05 November 2023</p>
                                </div>
                            </div>
                        }
                        {education &&
                            <div className="text-justify">
                                <div className='mt-2'>
                                    <h2 className='text-lg font-medium space-y-1'>Bachelor of Technology (B.Tech) in Computer Science & Engineering</h2>
                                    <p className='text-gray-500 text-sm'>G.C.R.G Group of Institution, Lucknow, Uttar Pradesh</p>
                                    <p className='text-gray-500 text-xs'>2021-2025</p>
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-lg font-medium space-y-1'>Class XII, UP Board - Math Stream</h2>
                                    <p className='text-gray-500 text-sm'>Bakshi Ka Talab Inter College, Lucknow, Uttar Pradesh</p>
                                    <p className='text-gray-500 text-xs'>2018-2020</p>
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-lg font-medium space-y-1'>Class X, UP Board - Science Stream</h2>
                                    <p className='text-gray-500 text-sm'>Bakshi Ka Talab Inter College, Lucknow, Uttar Pradesh</p>
                                    <p className='text-gray-500 text-xs'>2016-2018</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='w-full md:w-1/2 mt-12 md:mt-24 grid place-content-center order-1'>
                    <img
                        className='rounded-full h-[300px] w-[300px] lg:h-[450px] lg:w-[450px] object-contain bg-gray-200'
                        src={profilePic}
                        alt="image"
                    />
                </div>
            </div>
            <hr />
        </>
    )
}

export default About