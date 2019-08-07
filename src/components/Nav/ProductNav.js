import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductContext';

export default function Nav() {
  const {
    getPopularProducts,
    getTrendingProducts,
    getNewProducts
  } = useContext(ProductsContext);
  return (
    <div className='flex absolute top-0 left-0 flex-wrap bg-white p-5 w-2/3 justify-between'>
      <div className='w-1/4 bg-gray-500 items-center flex-shrink-0 text-white mr-6'>
        logo
      </div>
      <nav className='w-3/4  block flex-grow lg:flex lg:justify-around lg:w-auto lg:flex-1'>
        <Link to='#' className='text-xl text-gray-800 '>
          <span>collection</span>
        </Link>
        <Link to='#' className='text-xl text-gray-800 '>
          <span onClick={getPopularProducts}>popular</span>
        </Link>
        <Link to='#' className='text-xl text-gray-800 '>
          <span onClick={getTrendingProducts}>trending</span>
        </Link>
        <Link to='#' className='text-xl text-gray-800 '>
          <span onClick={getNewProducts}>new</span>
        </Link>
      </nav>
    </div>
  );
}
