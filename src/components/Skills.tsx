"use client"

import React from 'react'
import LiIcon from './LiIcon'

/**
 * * Design of Rating bar for each skills
 */
const Ratingbar = ({skill, style, progress} : {skill: string, style: string , progress: string}) => {
  return (
    <>
      <p>{skill}</p>
      <div className="rating">
        <div className={style}>{progress}</div>
      </div>
    </>
  )
}

/**
* Skills Method
* * The overall design of Skills section in the page.
*/
const Skills = () => {

  return (
    <div className='my-auto scroll-mt-28' id='skills'>
      <h2 className='font-bold md:text-6xl sm:text-5xl xs:text-4xl text-3xl mb-20 w-full text-center text-[#fffffe]'>
        Skills
      </h2>

      <div className='flex flex-row w-[100%] justify-evenly'>

            {/* <div className="absolute left-0 top-0 w-[4px] h-full bg-[#e53170] origin-top" /> */}
            
            <div>
              <h3 className='capitalize mb-5'>Proficient Tech/Languages&nbsp;</h3>
              <div className='w-96'>
                <Ratingbar skill="Siebel" style="skills siebel" progress="90%" />
                <Ratingbar skill="SQL" style="skills sql" progress="90%" />
                <Ratingbar skill="Javascript" style="skills js" progress="85%" />
                <Ratingbar skill="Informix" style="skills informix" progress="80%" />
                <Ratingbar skill="Python" style="skills python" progress="80%" />
              </div>
            </div>

   

            {/* <div className="absolute right-80 top-0 w-[4px] h-full bg-[#e53170] origin-top" /> */}
            
            <div>
              <h3 className='capitalize mb-5'>Experience&nbsp;</h3>
              <div className='w-96'>
                <Ratingbar skill="Tailwind CSS" style="skills tailwind" progress="75%" />
                <Ratingbar skill="Typescript" style="skills ts" progress="75%" />
                <Ratingbar skill="React" style="skills react" progress="70%" />
                <Ratingbar skill="NextJS" style="skills next" progress="60%" />
              </div>
            </div>


            {/* <div className="absolute right-100 top-0 w-[4px] h-full bg-[#e53170] origin-top" /> */}

            <div>
              <h3 className='capitalize mb-5'>Learning&nbsp;</h3>
              <div className='w-96'>
                <Ratingbar skill="Go" style="skills go" progress="40%" />
                <Ratingbar skill="Flutter" style="skills flutter" progress="20%" />
              </div>
            </div>


      </div>

    </div>
  )
}

export default Skills