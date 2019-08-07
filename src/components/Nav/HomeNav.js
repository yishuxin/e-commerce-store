import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className='flex flex-wrap bg-yellow-500 p-4 justify-between w-2/3'>
      <div className='flex-1 items-center flex-shrink-0 text-white mr-6'>
        logo
      </div>
      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>

      <div className='w-full  block flex-grow lg:flex lg:justify-around lg:w-auto lg:flex-1'>
        <Link
          className='mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4'
          to='/'
        >
          Home
        </Link>
        <Link
          className='mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4'
          to='/collection'
        >
          Collection
        </Link>
        <Link
          className='mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4'
          to='/about'
        >
          About
        </Link>
        <Link
          className='mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4'
          to='/contact'
        >
          Contact
        </Link>
      </div>
    </ul>
  );
};

export default Navbar;
