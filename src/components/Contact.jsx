import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbw43hJ--Y7sFoJdcd1whdFlvMDvZo9n4zJgQvfGbQOg835cJ-mVAjgEhy4Msa9ZdvvRhQ/exec'; // Replace with your Google Sheets script URL
        const form = formRef.current;

        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form),
        })
            .then((response) => {
                toast.success('Form submitted successfully!')
            })
            .catch((error) => {
                toast.error('Form submission failed!');
            });
    };
    return (
        <>
            <div name="contact" className='max-w-screen-2xl container mx-auto mb-5 md:mb-20 px-4 md:px-20 '>
                <div className='w-full mt-12 md:mt-20'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Contact Me</h1>
                    <p className='text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className='flex justify-center'>
                        <form ref={formRef} onSubmit={handleSubmit} action="" className='w-96 p-5 bg-slate-200 rounded-md'>
                            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                            <div className='flex flex-col mb-4'>
                                <label className='cursor-pointer' htmlFor="fullName">Full Name</label>
                                <input
                                    className='rounded-md text-gray-700 focus:outline-none border-none px-3 py-2'
                                    type="text"
                                    placeholder='Enter your fullName'
                                    name="fullName"
                                    id="fullName" 
                                    required/>
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label className='cursor-pointer' htmlFor="email">Email</label>
                                <input
                                    className='rounded-md text-gray-700 focus:outline-none border-none px-3 py-2'
                                    type="email"
                                    placeholder='Enter your email'
                                    name="email"
                                    id="email" 
                                    required/>
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label className='cursor-pointer' htmlFor="message">Message</label>
                                <textarea
                                    className='rounded-md text-gray-700 focus:outline-none border-none px-3 py-2'
                                    type="text"
                                    placeholder='Enter your message'
                                    name="message"
                                    id="message" 
                                    required/>
                            </div>
                            <button className='bg-black px-3 py-2 rounded-xl active:bg-slate-700 text-white text-sm' type="submit">Send</button>
                        </form>
                    </div>
                </div>
            <ToastContainer />
            </div>
            <hr />
        </>
    )
}

export default Contact