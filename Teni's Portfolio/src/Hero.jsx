import Tennie from './assets/teni.jpg'

export default () => {
  return (
    <div className='bg-gray-900'>
      <section className='pt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8'>
        <div className='space-y-4 flex-1 sm:text-center lg:text-left'>
          <h1 className='text-white font-bold text-4xl xl:text-5xl'>
            Hi,
            <span className='text-indigo-400'> I'm TENIOLA JIMOH</span>
            <br />
            an entry-level
            <br />
            SOFTWARE DEVELOPER
          </h1>
          <p className='text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0'>
            A highly motivated student studying software engineering but
            currently still in frontend engineering. Actively seeking
            opportunities to apply my skills and knowledge to real-world
            projects and contribute to the advancement of the industry.
          </p>
          <div className='pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
            <a
              href='#products'
              className='px-7 py-3 w-full font-semibold bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto'
            >
              View My Work
            </a>
          </div>
        </div>
        <div className='flex-1 text-center mt-7 lg:mt-0 lg:ml-3'>
          <img
            src={Tennie}
            className='w-full mx-auto sm:w-10/12 lg:w-full rounded-lg h-[28rem]'
            alt='Illustration'
          />
        </div>
      </section>
    </div>
  )
}
