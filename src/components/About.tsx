import React from 'react'
import Image from 'next/image'
import {myIntroduction} from '@/constants/index'
import CardsContainer from '@/components/Cards/CardsContainer'

const About = () => {
  return (
    
    <section className="flex-col sm:px-16 px-6 sm:py-16 py-10 max-w-fit mx-auto relative z-0 scroll-mt-20" id='about'>
        
        <div className="container flex justify-center">
            {/* <div className="col-span-3 relative h-max transform-none rounded-2xl border-2 border-solid border-white p-2"> */}
                <Image src="/images/profile.jpg" alt="codebyboon" width={400} height={400} className='h-auto rounded-2xl' />
            {/* </div> */}
            
            <div className="opacity-1 transform-none pl-8">
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    About me
                </p>
                <h2 className="text-[#fffffe] font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl">Introduction</h2>
                <p className="mt-4 text-secondary text-[17px] max-w-full leading-[30px] opacity-1 transform-none">
                    {myIntroduction}
                </p>
            </div>
        </div>
        <CardsContainer />
    </section>
  )
}

export default About

