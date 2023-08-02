import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-transparent">
                <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                    <a href="/">
                    <p className="text-white hover:text-purple-600 text-[18px] font-bold cursor-pointer flex ">codebyboon &nbsp;</p>
                    </a>
                    <ul className="list-none hidden sm:flex flex-row gap-10">
                        <li className="text-white hover:text-lime-300 text-[18px] font-medium cursor-pointer"><a href="#about">About</a></li>
                        <li className="text-secondary hover:text-yellow-200 text-[18px] font-medium cursor-pointer"><a href="#project">Project</a></li>
                        <li className="text-secondary hover:text-yellow-200 text-[18px] font-medium cursor-pointer"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
           
    )

    
}

export default Navbar