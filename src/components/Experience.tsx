"use client"

import { jobExperience } from '@/constants'
import React, { useRef } from 'react'
import { motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address} : {position: string, company: string, companyLink: string, time: string, address: string}) => {
  return (
    <li>
      <LiIcon />
      <div>
        <h3 className='capitalize'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-[#e53170] capitalize'>@ {company}</a></h3>
      </div>
      <div className='mb-6 lg:mb-0'>
        <span >
            {time} | {address}
        </span>
      </div>
    </li>
  )
}

/**
* Experience Method
* * The overall design of Experience section in the page.
*/

const Experience = () => {

  const ref = useRef(null);
  
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className='my-auto scroll-mt-28' id='work'>
      <h2 className='font-bold md:text-6xl sm:text-5xl xs:text-4xl text-3xl mb-20 w-full text-center text-[#fffffe]'>
        Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-0 top-0 w-[4px] h-full bg-[#e53170] origin-top" />
        <ul className='w-full flex flex-col items-start justify-between ml-10'>
            <Details 
            position = "Application Development Specialist"
            company = "Accenture"
            companyLink='https://www.accenture.com/my-en'
            time = "Jun 2022 - May 2023"
            address = "Kuala Lumpur, Malaysia"/>
            <p className='w-full text-[#fffffe]'>
            {jobExperience[0]}
            </p>
            <Details 
            position = "Application Development Senior Analyst"
            company = "Accenture"
            companyLink='https://www.accenture.com/my-en'
            time = "Dec 2019 - May 2022"
            address = "Kuala Lumpur, Malaysia"/>
            <p className='w-full text-[#fffffe]'>
            {jobExperience[1]}
            </p>
            <Details 
            position = "Software Developer"
            company = "Accenture"
            companyLink='https://www.accenture.com/my-en'
            time = "Aug 2017 - Nov 2019"
            address = "Kuala Lumpur, Malaysia"/>
            <p className='w-full text-[#fffffe]'>
            {jobExperience[2]}
            </p>
        </ul>
      </div>

    </div>
  )
}

export default Experience