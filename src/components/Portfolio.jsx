import React from 'react'
import passwordMeter from '../assets/password-meter.png'
import streamMovies from '../assets/stream-movies.webp'
import portfolioImage from '../assets/portfolio-image.jpg'

function Portfolio() {
    const cards = [
        {
            id: 1,
            image: passwordMeter,
            name: "Password Strength Meter",
            description: "Password Strength Meter is a tool that evaluates the strength of a password based on factors like length, complexity, and uniqueness. It provides visual feedback to help users create more secure and resilient passwords.",
            code: "https://github.com/rathore0123/Suggest-a-Password",
        },
        {
            id: 2,
            image: streamMovies,
            name: "Streamify",
            description: "Streamify is a movie streaming platform that offers a seamless experience for watching and discovering a wide range of films.",
            code: "https://github.com/rathore0123/Streamify",
        },
        {
            id: 3,
            image: portfolioImage,
            name: "Portfolio",
            description: "A personal portfolio website showcasing my skills, projects, and experience as a web developer, designed with a clean UI and responsive design for seamless user interaction.",
            code: "https://github.com/rathore0123/Portfolio",
        },
        
    ]
    return (
        <>
            <div name="portfolio" className='max-w-screen-2xl container mx-auto mb-5 md:mb-20 px-4 md:px-20'>
                <div className='w-full mt-12 md:mt-20'>
                    <h1 className='text-2xl md:text-3xl font-bold cursor-pointer mb-3'>Portfolio</h1>
                    <p className='underline mb-10'>Featured Projects</p>
                    <div className='grid place-content-center place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                        {cards.map((card) => (
                            <div
                                style={{ backgroundImage: `url(${card.image})` }}
                                className={`bg-cover bg-center hover:scale-[1.03] transition-all duration-500 rounded-xl w-full md:w-[250px] h-[260px] mb-5 relative`}
                                key={card.id}>
                                <div className='w-full h-full rounded-xl hover:bg-pink-300/70 transition-all duration-300 flex items-end p-4'>
                                    <div className='w-full space-y-1'>
                                        <h1 className='font-bold text-white underline'>{card.name}</h1>
                                        <p className='text-xs text-[#cccccc] text-justify'>{card.description}</p>
                                        <div className='flex mt-4'>
                                            <a href={card.code} className='text-sm px-3 py-2 rounded-md text-white bg-blue-500 active:bg-blue-900 mx-auto'>Source Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Portfolio