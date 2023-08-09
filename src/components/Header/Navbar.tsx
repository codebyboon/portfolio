"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import Icons from './Icons'

/*Custom Link to reduce the repetitive linking to different path */
const CustomLink = ({href , title, className=""}: {href: string, title: string, className: string}) => {

    const pathName = usePathname()

    return(
        <motion.li className={`${className} relative group text-[#fffffe]`} whileHover={{scale:1.2}}>
            <Link href={href}>{title}</Link>

            <span className={`h-[1px] inline-block bg-[#ff8906] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathName === href ? 'w-full':'w-0'}`}>&nbsp;</span>

        </motion.li>
    )

}

/*Navigation bar for the website*/
const Navbar = () => {
    return (
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-[#121212]">
                <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                    <a href="/" className="flex">
                    <p className="text-[#fffffe] text-[20px] font-bold cursor-pointer ">codeby</p>
                    <p className="text-[#ff8906] text-[30px] font-bold cursor-pointer">boon &nbsp;</p>
                    </a>
                    <ul className="list-none hidden sm:flex flex-row gap-1">
                        <CustomLink href="/" title="Home" className='mr-4'/>
                        <CustomLink href="/#about" title="About" className='mx-4' />
                        <CustomLink href="/project" title="Project" className='mx-4'/>
                        <CustomLink href="/#contact" title="Contact" className='mx-4'/>
                        <Link href="/dummy.pdf" target={"_blank"} className="ml-2 relative group text-[#121212] bg-[#fffffe] rounded-lg font-semibold px-2 hover:bg-[#ff8906] hover:text-white border border-solid border-transparent hover:border-[#ff8906]" download={true}>Download CV
                            
                        </Link>
                    </ul>
                    
                        <Icons />
                </div>
            </nav>
        </div>
           
    )

    
}

export default Navbar