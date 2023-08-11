import React from 'react'
import Image from 'next/image'
import {myIntroduction} from '@/constants/index'
import CardsContainer from '@/components/Cards/CardsContainer'

/**
 * About Method
 * * Used to design/import all the elements to be displayed in About page
 */

const About = () => {
  return (
    
    <section className="flex-col lg:px-16 px-6 lg:py-16 py-10 max-w-fit mx-auto relative z-0 scroll-m-20">
        
        <div className="container flex flex-col lg:flex-row ">
            <div className="relative w-[100%] max-w-3xl">
            <Image src="/images/profile.jpg" alt="codebyboon" 
            width={400}
            height={400}
            sizes="(max-width: 1080px) 100vw, 700px"
            priority
            className='h-96 rounded-2xl mx-auto' />
            </div>
            
            <div className="opacity-1 transform-none lg:pl-8 mt-5 mx-auto lg:mt-0 ">
                <p className="lg:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    About me
                </p>
                <div className="flex">
                    <h2 className="text-[#fffffe] font-black md:text-6xl lg:text-5xl xs:text-4xl text-3xl">Hi, I'm </h2>
                    <h2 className="text-[#ff8906] font-black md:text-6xl lg:text-5xl xs:text-4xl text-3xl ml-3">Boon</h2>
                    <h2 className="text-[#fffffe] font-black md:text-6xl lg:text-5xl xs:text-4xl text-3xl">!</h2>
                </div>
                <p className="text-secondary text-[17px] max-w-full leading-[30px] opacity-1 transform-none">
                    {myIntroduction}
                </p>
            </div>
        </div>
        <CardsContainer />
    </section>
  )
}

export default About

