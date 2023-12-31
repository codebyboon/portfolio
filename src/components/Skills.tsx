"use client"

import React from 'react'
import Image from 'next/image'

import sqlIcon from 'public/images/sql-icon.png';
import tailwindIcon from 'public/images/tailwind-icon.png';
import pythonIcon from 'public/images/python-icon.png';
import jsIcon from 'public/images/js-icon.png';
import nextIcon from 'public/images/nextjs-icon.png';
import reactIcon from 'public/images/react-icon.png';
import informixIcon from 'public/images/informix-icon.png';
import oracleIcon from 'public/images/oracle-siebel.svg'
import tsIcon from 'public/images/typescript-icon.png'
import goIcon from 'public/images/golang-icon.png'
import requirementsIcon from 'public/images/requirements-icon.png'
import waterfallIcon from 'public/images/waterfall-icon.png'
import baIcon from 'public/images/ba-icon.png'
import agileIcon from 'public/images/agile-icon.png'
import pmIcon from 'public/images/pm-icon.png'
import teamIcon from 'public/images/team-icon.png'

/**
 * * Design of Rating bar for each skills
 */
const Ratingbar = ({skill, style, progress, imgsrc} : {skill: string, style: string , progress: string, imgsrc: any}) => {
  return (
    <>
      <div className="flex flex-row my-2">
      <Image priority src={imgsrc} alt={skill} width={40} height={40}/><p className="py-2 ml-2">{skill}</p>
      </div>
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
    <div className='my-24 scroll-mt-28' id='skills'>
      <h2 className='font-bold md:text-6xl sm:text-5xl xs:text-4xl text-3xl mt-10 lg:mt-0 mb-10 lg:mb-20 w-full text-center text-[#fffffe]'>
        Skills
      </h2>

      <div className='flex flex-col lg:flex-row mx-5 lg:mx-0 lg:w-[100%] text-center lg:text-left justify-evenly'>            
        <div>
          <h3 className='capitalize mb-5'>Proficient Tech/Languages&nbsp;</h3>
          <div className='w-auto min-[400px]:w-96'>
            <Ratingbar skill="Siebel" style="skills siebel" progress="90%" imgsrc={oracleIcon} />
            <Ratingbar skill="SQL" style="skills sql" progress="90%" imgsrc={sqlIcon}  />
            <Ratingbar skill="Javascript" style="skills js" progress="80%" imgsrc={jsIcon}/>
            <Ratingbar skill="Informix" style="skills informix" progress="80%" imgsrc={informixIcon}/>
            <Ratingbar skill="Python" style="skills python" progress="75%" imgsrc={pythonIcon} />
          </div>
        </div>
            
        <div>
          <h3 className='capitalize mb-1 mt-10 lg:mt-0 lg:mb-5'>Experience&nbsp;</h3>
          <div className='w-auto min-[400px]:w-96'>
            <Ratingbar skill="Tailwind CSS" style="skills tailwind" progress="70%" imgsrc={tailwindIcon}/>
            <Ratingbar skill="Typescript" style="skills ts" progress="70%" imgsrc={tsIcon}/>
            <Ratingbar skill="React" style="skills react" progress="65%" imgsrc={reactIcon}/>
            <Ratingbar skill="NextJS" style="skills next" progress="60%" imgsrc={nextIcon}/>
            <Ratingbar skill="Go" style="skills go" progress="50%" imgsrc={goIcon}/>
          </div>
        </div>

        <div>
          <h3 className='capitalize mb-1 mt-10 lg:mt-0 lg:mb-5'>Other skills&nbsp;</h3>
          <div className='w-auto min-[400px]:w-96'>
            <Ratingbar skill="Requirements Gathering & Analysis" style="skills requirements" progress="90%" imgsrc={requirementsIcon}/>
            <Ratingbar skill="Waterfall Methodology" style="skills waterfall" progress="90%" imgsrc={waterfallIcon}/>
            <Ratingbar skill="Business Analysis" style="skills ba" progress="80%" imgsrc={baIcon}/>
            <Ratingbar skill="Agile Methodology" style="skills agile" progress="70%" imgsrc={agileIcon}/>
            <Ratingbar skill="Project Management" style="skills project" progress="70%" imgsrc={pmIcon}/>
            <Ratingbar skill="Team Management" style="skills team" progress="60%" imgsrc={teamIcon}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills