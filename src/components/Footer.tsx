"use client"

import React from 'react'

/*Navigation bar for the website*/
const Footer = () => {
    return (
        <footer className="sm:px-16 px-6 w-full bg-[#121212] mb-10">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto my-auto">
                <p className="text-[#fffffe] text-[10px] lg:text-[20px] font-light">2023 © All Rights Reserved.</p>
                <div className="flex flex-row my-auto">
                    <p className="text-[#fffffe] text-[10px] lg:text-[20px] font-light">All icons designed by <a target="_blank" href="https://icons8.com"><u className="text-[#ff8906] text-[10px] lg:text-[20px] font-bold cursor-pointer text-center ml-0.5 lg:ml-2">Icons8</u></a></p>
                    
                </div>
            </div>
        </footer>

           
    )

    
}

export default Footer