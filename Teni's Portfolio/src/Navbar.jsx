import Tennie from './assets/teni.jpg'

export default () => {
  const navigation = [
    { title: 'About', path: '#about' },
    { title: 'Skills', path: '#skills' },
    { title: 'Products', path: '#products' },
    { title: 'Collaboration', path: '#build' },
    { title: 'Contact', path: '#contact' }
  ]

  return (
    <div className='bg-gray-900'>
      <header>
        <nav className='items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6'>
          <a href='javascript:void(0)'>
            <h1 className='text-lg font-serif font-medium text-indigo-400'>
              Tennie Dev
            </h1>
          </a>
          <ul className='py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end'>
            {navigation.map((item, idx) => (
              <li className='text-gray-200' key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}
