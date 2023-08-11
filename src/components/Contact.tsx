"use client"

import React, { useState } from 'react'

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { error: "", values: initValues };

    /**
    * sendContactForm Method
    * * The overall design of the Contact section in the page
    */

const Contact = () => {

    const [state, setState] = useState(initState);

    const { values, error } = state;

    /**
    * handleChange Method
    * * To capture the values inputted by users in the Contact form
    * @param target
    */
    const handleChange = ({ target }: {target:any}) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

    /**
    * sendContactForm Method
    * * To trigger the Post API handler after user click Submit button
    * @param data
    */
    const sendContactForm = (data: any) => fetch("/api/email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json" 
              },
              body: JSON.stringify(data),
        }).then((res) => {
            if (!res.ok) throw new Error("Failed to send message");
            return res.json();
        });

    const onSubmit = async (e: { preventDefault: () => void; }) => {

        e.preventDefault()
        try{ 
            await sendContactForm(values)
            setState(initState) //reset the form after submitting
        } catch (err: any) {
            setState((prev) => ({
                ...prev,
                error: err.message
            }))

        }
        
    }

    return (
    // <section className="flex-col sm:px-16 px-6 sm:py-16 py-10 max-w-fit mx-auto relative z-0" id='contact'>
        <div className="flex flex-col relative w-[75%] py-8 lg:py-16 mx-auto my-5 scroll-mt-10" id="contact">
        <h2 className='font-bold md:text-6xl sm:text-5xl xs:text-4xl text-3xl mb-5 w-full text-center text-[#fffffe]'>
        Let's <span className="text-[#ff8906]">connect</span>
        </h2>
            <p className="font-light text-center  text-gray-500 dark:text-gray-400 sm:text-xl">Do you have job opportunities to offer? Do you need to hire freelancer for your projects? Do you have any comments regarding the website?</p>
            <p className="mb-10 font-light text-center  text-gray-500 dark:text-gray-400 sm:text-xl">Feel free to get in touch! 🤙</p> 
            <p className="mb-5 lg:mb-5 text-center sm:text-xl">Email directly to <a href="mailto:codebyboon@gmail.com" className="underline text-primary">codebyboon@gmail.com</a> or submit form below! </p>
            {error && (<p className="mb-8 lg:mb-16 font-light text-center text-red-500 sm:text-xl">{error}</p>)}
            <form action="#" className="space-y-8">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#2e2f3e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Smith" required onChange={handleChange} value={values.name} />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#2e2f3e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@email.com" required onChange={handleChange} value={values.email} />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" name="subject" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#2e2f3e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required onChange={handleChange} value={values.subject} />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#2e2f3e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Please leave a message." required onChange={handleChange} value={values.message}></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-white dark:text-[#121212] dark:hover:bg-[#ff8906] dark:hover:text-[#fffffe] dark:focus:ring-[#ff8906]" onClick={onSubmit}>Send email</button>
            </form>
        </div>
    // </section>
    )
}

export default Contact