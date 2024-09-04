import React from 'react'

const CollaborationSection = () => {
  return (
    <section className='relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8'>
      <div className='w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#58AEF1] via-purple-500 to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-20'></div>
      <div className='max-w-xl mx-auto text-center relative z-10'>
        <div className='py-4'>
          <h3 className='text-3xl text-gray-200 font-semibold md:text-4xl'>
            <span className='fade-slide-in animation-delay-0 block'>Let's</span>
            <span className='fade-slide-in animation-delay-1000 block'>
              Collaborate!
            </span>
          </h3>
          <p className='text-gray-300 leading-relaxed mt-3'>
            <span className='fade-slide-in animation-delay-2000 block'>
              I am passionate about building innovative products
            </span>
            <span className='fade-slide-in animation-delay-3000 block'>
              and continually sharpening my development skills.
            </span>
            <span className='fade-slide-in animation-delay-4000 block'>
              If you’re looking for a dedicated and enthusiastic collaborator,
            </span>
            <span className='fade-slide-in animation-delay-5000 block'>
              I’d love the opportunity to work with you on your projects.
            </span>
            <span className='fade-slide-in animation-delay-6000 block'>
              Together, we can create something amazing and push the boundaries
              of technology.
            </span>
          </p>
        </div>
        <div className='mt-5 items-center justify-center gap-3 sm:flex'>
          <a
            href='#contact'
            className='block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md shadow-md duration-150 hover:bg-gray-100 sm:w-auto fade-slide-in animation-delay-7000'
          >
            Get in Touch
          </a>
          <a
            href='#products'
            className='block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gradient-to-r from-gray-700 to-gray-800 rounded-md shadow-md duration-150 hover:bg-gray-900 sm:w-auto fade-slide-in animation-delay-8000'
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default CollaborationSection
