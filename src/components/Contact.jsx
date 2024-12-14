import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = formRef.current;
        fetch(`https://script.google.com/macros/s/AKfycbw43hJ--Y7sFoJdcd1whdFlvMDvZo9n4zJgQvfGbQOg835cJ-mVAjgEhy4Msa9ZdvvRhQ/exec`, {
            method: 'POST',
            body: new FormData(form),
        })
            .then(() => {
                toast.success('Form submitted successfully!');
            })
            .catch(() => {
                toast.error('Form submission failed!');
            })
            .finally(() => {
                setIsSubmitting(false);
                form.reset();
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
                                    required />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label className='cursor-pointer' htmlFor="email">Email</label>
                                <input
                                    className='rounded-md text-gray-700 focus:outline-none border-none px-3 py-2'
                                    type="email"
                                    placeholder='Enter your email'
                                    name="email"
                                    id="email"
                                    required />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label className='cursor-pointer' htmlFor="message">Message</label>
                                <textarea
                                    className='rounded-md text-gray-700 focus:outline-none border-none px-3 py-2'
                                    type="text"
                                    placeholder='Enter your message'
                                    name="message"
                                    id="message"
                                    required />
                            </div>
                            <button
                                className={`bg-black px-3 py-2 rounded-xl ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'active:bg-slate-700'
                                    } text-white text-sm`}
                                type="submit"
                                disabled={isSubmitting}
                                aria-label="Send message"
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
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