"use client"

import React from 'react'

/*Navigation bar for the website*/
const Footer = () => {
    return (
        <footer className="sm:px-16 px-6 w-full bg-[#121212] mb-10">
            <div className="w-full flex justify-evenly items-center max-w-7xl mx-auto my-auto">
                <p className="text-[#fffffe] text-[20px] font-light">2023 © All Rights Reserved.</p>
                <div className="flex">
                    <p className="text-[#fffffe] text-[20px] font-light">All icons designed by</p>
                    <a target="_blank" href="https://icons8.com"><u className="text-[#ff8906] text-[20px] font-bold cursor-pointer ml-2">Icons8</u></a>
                </div>
            </div>
        </footer>

           
    )

    
}

export default Footer