import React from 'react'
import HTML from './assets/images/html-logo.png'
import CSS from './assets/images/css.png'
import JS from './assets/images/javascript-logo.png'
import TS from './assets/images/typescript.png'

const Skills = () => {
  return (
    <div>
      <div className='bg-gray-900 py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
          <h2 className='mb-8 text-center text-2xl font-bold text-gray-50 md:mb-12 lg:text-3xl'>
            Skills
          </h2>

          <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
            <div>
              <a
                href='#'
                className='group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-700 p-4 shadow-lg'
              >
                <img
                  src={HTML}
                  loading='lazy'
                  alt='Photo by Austin Wade'
                  className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                />

                <div className='relative flex w-full flex-col rounded-lg bg-slate-400 p-4 text-center'>
                  <span className='text-gray-500'>HTML</span>
                  <span className='text-lg font-bold text-gray-800 lg:text-xl'>
                    Structures web content
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href='#'
                className='group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-700 p-4 shadow-lg'
              >
                <img
                  src={CSS}
                  loading='lazy'
                  alt='Photo by Austin Wade'
                  className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                />

                <div className='relative flex w-full flex-col rounded-lg bg-slate-400 p-4 text-center'>
                  <span className='text-gray-500'>CSS</span>
                  <span className='text-lg font-bold text-gray-800 lg:text-xl'>
                    Styles web pages
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href='#'
                className='group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-700 p-4 shadow-lg'
              >
                <img
                  src={JS}
                  loading='lazy'
                  alt='Photo by Austin Wade'
                  className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                />

                <div className='relative flex w-full flex-col rounded-lg bg-slate-400 p-4 text-center'>
                  <span className='text-gray-500'>JavaScript</span>
                  <span className='text-lg font-bold text-gray-800 lg:text-xl'>
                    Adds interactivity and dynamic behavior
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href='#'
                className='group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-700 p-4 shadow-lg'
              >
                <img
                  src={TS}
                  loading='lazy'
                  alt='Photo by Austin Wade'
                  className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                />

                <div className='relative flex w-full flex-col rounded-lg bg-slate-400 p-4 text-center'>
                  <span className='text-gray-500'>TypeScript</span>
                  <span className='text-lg font-bold text-gray-800 lg:text-xl'>
                    Enhances JavaScript with type safety
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
