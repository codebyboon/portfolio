"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

import Icons from './Icons'

/*Custom Link to reduce the repetitive linking to different path */
const CustomLink = ({href , title, className=""}: {href: string, title: string, className: string}) => {

    const params = useParams();
    const [sameLink, setLink] = useState(false);

    useEffect(() => {

        const hash = "/" + window.location.hash

        if (hash === href) {
            setLink(true)
        } else {
            setLink(false)
        }

    }, [params]);

    return(
        <motion.li className={`${className} md:mt-0 relative group text-[#fffffe] transition-all`} whileHover={{scale:1.2}}>
            <Link href={href} className='xs:text-xs sm:text-sm md:text-base lg:text-lg'>{title}</Link>

            <span className={`h-[1px] inline-block bg-[#ff8906] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${sameLink ? 'w-full':'w-0'}`}>&nbsp;</span>

        </motion.li>
    )

}

/*Custom MobileLink to reduce the repetitive linking to different path */
const CustomMobileLink = ({href , title, className="", toggle}: {href: string, title: string, className: string, toggle:any}) => {

    const params = useParams();
    const [sameLink, setLink] = useState(false);

    useEffect(() => {

        const hash = "/" + window.location.hash

        if (hash === href) {
            setLink(true)
        } else {
            setLink(false)
        }

    }, [params]);

    const handleClick = () => {
        toggle()
    }

    return(
        <button className={`${className} md:mt-0 relative group text-[#fffffe] dark:text-[#121212] my-2`} onClick={handleClick}>
            <Link href={href} className='xs:text-xs sm:text-sm md:text-base lg:text-lg'>{title}</Link>

            <span className={`h-[1px] mb-1 inline-block bg-[#ff8906] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${sameLink ? 'w-full':'w-0'}`}>&nbsp;</span>

        </button>
    )

}

/*Navigation bar for the website*/
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    
    return (
        <div className="bg-hero-pattern bg-cover bg-no-repeat">
            <nav className="sm:px-0 px-10 w-full flex items-center py-5 fixed top-0 z-20 bg-[#121212]">
                <div className="w-full flex justify-evenly lg:justify-between items-center max-w-7xl mx-auto ">
                    <a href="/" className="flex">
                    <p className="text-[#fffffe] text-[15px] lg:text-[25px] font-bold cursor-pointer ">codeby</p>
                    <p className="text-[#ff8906] text-[25px] sm:mr-5 lg:text-[40px] font-bold cursor-pointer">boon &nbsp;</p>
                    </a>
                    <ul className="list-none hidden sm:flex flex-row gap-1">
                        <CustomLink href="/" title="Home" className='mr-4'/>
                        <CustomLink href="/#work" title="Work" className='mx-4'/>
                        <CustomLink href="/#skills" title="Skills" className='mx-4'/>
                        <CustomLink href="/#projects" title="Projects" className='mx-4'/>
                        <CustomLink href="/#contact" title="Contact" className='mx-4'/>
                        <Link href="/Resume-Saw-Yee-Boon.pdf" target={"_blank"} className="ml-2 mr-4 lg:mr-0 relative group xs:text-xs sm:text-sm md:text-base lg:text-lg text-[#121212] bg-[#fffffe] rounded-lg font-semibold px-2 hover:bg-[#ff8906] hover:text-white border border-solid border-transparent hover:border-[#ff8906]" download={true}>
                        Download CV
                        </Link>
                    </ul>

                    {
                        isOpen ?
                            <motion.div
                            initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                            animate={{scale:1, opacity:1}}
                            className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop-blur-md dark:bg-white/75 py-14 md:hidden ">
                                <ul className="flex flex-col items-center">
                                    <CustomMobileLink href="/" title="Home" className='mx-4' toggle={handleClick}/>
                                    <CustomMobileLink href="/#work" title="Work" className='mx-4' toggle={handleClick}/>
                                    <CustomMobileLink href="/#skills" title="Skills" className='mx-4' toggle={handleClick}/>
                                    <CustomMobileLink href="/#projects" title="Projects" className='mx-4' toggle={handleClick}/>
                                    <CustomMobileLink href="/#contact" title="Contact" className='mx-4' toggle={handleClick}/>
                                    <Link href="/Resume-Saw-Yee-Boon.pdf" target={"_blank"} className="mx-4 my-2 relative group xs:text-xs sm:text-sm md:text-base lg:text-lg text-[#121212] bg-[#fffffe] rounded-lg font-semibold px-2 hover:bg-[#ff8906] hover:text-white border border-solid border-transparent hover:border-[#ff8906]" download={true}>
                                    Download CV
                                    </Link>
                                </ul>
                            </motion.div>  
                        :
                        null
                    }
                       
               
                    <Icons />
                    <button className="flex flex-col justify-center items-center md:hidden " onClick={handleClick}>
                        <span className={`dark:bg-[#fffffe] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                        <span className={`dark:bg-[#fffffe] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`dark:bg-[#fffffe] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>

                    </button>
                </div>
            </nav>
        </div>
           
    )

    
}

export default Navbar