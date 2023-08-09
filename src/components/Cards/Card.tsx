import React from 'react'

/**
 * Card Method
 * * Used to design the card and display the info imported from constant folder
 */

const Card = ({title, heading, description, href}: {title: string, heading: string, description: string, href: string}) => {
  return (
    
    // <div className="p-6 w-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 w-screen mx-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#E1D9D1]">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-[#0f0e17]">{title}</h5>
        <h6 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-[#e53170] underline">{heading}</h6>
        <p className="mb-3 font-normal text-gray-700 dark:text-[#2e2f3e]">{description}</p>
        <a href={href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#fffffe] bg-[blue-700] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#ff8906] dark:hover:bg-[#ff7406] dark:focus:ring-[#ff6006]">
            Read more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>

  )
}

export default Card