import React from 'react'

const About = () => {
  return (
    <div>
      <div className='bg-gray-900 py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-md px-4 md:px-8'>
          <h2 className='mb-2 text-xl font-semibold text-gray-50 sm:text-2xl md:mb-4'>
            About Me
          </h2>
          <p className='mb-6 text-gray-200 sm:text-lg md:mb-8'>
            I am currently a tech mentee at SAIL INNOVATIVE LAB, where I have
            developed strong skills in HTML, CSS, JavaScript, and TypeScript. I
            am eager to apply my expertise in real-world projects and am
            enthusiastic about the opportunities to further enhance my
            abilities. My experience has provided me with a solid foundation in
            client-side web development, and I am excited to embrace new
            challenges and opportunities in the field.
          </p>
          <ul className='mb-6 list-inside list-disc text-gray-200 sm:text-lg md:mb-8'>
            <li>Tech mentee at SAIL INNOVATIVE LAB</li>
            <li>Proficient in HTML, CSS, JavaScript, and TypeScript</li>
            <li>Focused on applying skills to practical projects</li>
            <li>Strong background in client-side web development</li>
            <li>Passionate about tackling new challenges and opportunities</li>
          </ul>
          <blockquote className='mb-6 border-l-4 pl-4 italic text-gray-200 sm:text-lg md:mb-8 md:pl-6'>
            “My time at SAIL INNOVATIVE LAB has been an incredible learning
            journey. The hands-on projects and guidance from experienced mentors
            have significantly deepened my understanding of web technologies.
            This experience has not only refined my technical skills but also
            boosted my confidence in tackling complex development challenges. I
            am grateful for the opportunity to grow and look forward to
            leveraging these insights in future projects.”
          </blockquote>
          <div className='relative mb-6 overflow-hidden rounded-lg bg-gray-800 shadow-lg md:mb-8'>
            <img
              src='https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350'
              loading='lazy'
              alt='Photo by Minh Pham'
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
