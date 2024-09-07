import { useState } from 'react';

export default () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch('https://formspree.io/f/xyzgvlja', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          alert('Something went wrong, please try again later.');
        }
      })
      .catch(() => alert('There was an error submitting the form.'));
  };

  return (
    <main className='relative py-28 bg-gray-900'>
      <div className='relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8'>
        <div className='max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0'>
          <h3 className='text-cyan-400 font-semibold'>Contact</h3>
          <p className='text-white text-3xl font-semibold sm:text-4xl'>
            Get in touch
          </p>
          <p className='text-gray-300'>
            I’ll love to hear from you! Please fill out the form below.
          </p>
        </div>

        <div className='mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl'>
          {submitted ? (
            <div className='text-green-600'>Thank you for your message!</div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-5'>
              <div>
                <label className='font-medium'>Full name</label>
                <input
                  type='text'
                  name='name'
                  required
                  className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
                />
              </div>
              <div>
                <label className='font-medium'>Email</label>
                <input
                  type='email'
                  name='email'
                  required
                  className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
                />
              </div>
              <div>
                <label className='font-medium'>Message</label>
                <textarea
                  name='message'
                  required
                  className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
                ></textarea>
              </div>
              <button className='w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150'>
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <div
        className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]'
        style={{
          background:
            'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
        }}
      ></div>
    </main>
  );
};
