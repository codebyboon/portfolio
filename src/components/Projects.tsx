import React from 'react'

const Projects = () => {

    return (
      <div className='my-auto scroll-mt-28 mt-20' id='projects'>
        <h2 className='font-bold md:text-6xl sm:text-5xl xs:text-4xl text-3xl mb-20 w-full text-center text-[#fffffe]'>
          Projects
        </h2>
  
        <div className="grid grid-cols-2 px-4 md:px-80 md:grid-cols-3 gap-4 ">            
          
            <div className="max-w-sm w-48 md:w-auto mx-auto md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#2e2f3e] dark:border-[#2e2f3e]">
                <img className="rounded-t-lg col-span-6 md:col-span-4 lg:col-span-3 aspect-square w-full" src="/projects/comingsoon.jpg" alt="" />
                <div className="p-5">
                    {/* <a href="#"> */}
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-[#ff8906]">Travel WebApp </h5>
                    {/* </a> */}
                    <h2 className="mb-4 text-xl tracking-tight font-semibold">Tech - unknown</h2>
                    <p className="mb-3 text-font-normal text-gray-700 dark:text-gray-400">Web application of travel journeys</p>
                    <a href="" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-[#121212] bg-[#ff8906] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#e53170]">
                        Coming Soon
                        {/* <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg> */}
                    </a>
                </div>
            </div>

            <div className="max-w-sm w-48 md:w-auto mx-auto md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#2e2f3e] dark:border-[#2e2f3e]">
                <img className="rounded-t-lg col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full" src="/projects/go-currency-converter.png" alt="" />
                <div className="p-5">
                    <a href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-[#ff8906]">CLI Currency Converter</h5>
                    </a>
                    <h2 className="mb-4 text-xl tracking-tight font-semibold">Tech - Golang</h2>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Built a CLI Currency Converter using Golang.</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The currency conversion rate will be retrieved from different public API that shares current rate.</p>
                    <a href="https://github.com/codebyboon/Currency-Converter-Go" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-[#121212] bg-[#ff8906] rounded-lg hover:bg-[#ff8906] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#fffffe] dark:hover:bg-[#ff8906] dark:hover:text-[#fffffe] dark:focus:ring-[#ff8906]">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="max-w-sm w-48 md:w-auto mx-auto md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#2e2f3e] dark:border-[#2e2f3e]">
                <img className="rounded-t-lg col-span-6 md:col-span-4 lg:col-span-3 aspect w-full" src="/docs/images/blog/image-1.jpg" alt="" />
                <div className="p-5">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-[#ff8906]">Automate Bot</h5>
                    <h2 className="mb-4 text-xl tracking-tight font-semibold">Tech - Python, Selenium</h2>
                    <p className="mb-3 text-font-normal text-gray-700 dark:text-gray-400">Built an automated bot to help book badminton court when new slot is open for booking.</p>
                    <p className="mb-3 text-sm font-normal italic text-gray-700 dark:text-gray-400">P/S: Source code not sharable due to the nature of the project</p>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default Projects