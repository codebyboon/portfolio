import React from 'react'

const LiIcon = () => {
  return (
    <figure className='absolute -ml-10 -left-4'>
        <svg width="75" height="75" viewBox='0 0 100 100'>
            {/* <circle cx="75" cy="25" r="20" className='stroke-[#ff8906] stroke-1 fill-none'/> */}
            <circle cx="77" cy="20" r="15" className='stroke-[1px] fill-[#ff8906]'/>
            <circle cx="77" cy="20" r="10" className='stroke-1 fill-[#121212]'/>
        </svg>
    </figure>
  )
}

export default LiIcon