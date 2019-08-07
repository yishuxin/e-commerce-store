import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContext';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

import { FaShoppingBag } from 'react-icons/fa';

const CartIcon = () => {
  const { cartQuantity } = useContext(ProductsContext);
  return (
    <div className='flex justify-center items-baseline'>
      <Link
        className='p-3 text-3xl text-red-800 absolute cursor-pointer'
        style={{
          top: '25px',
          right: '7%',
          zIndex: 100000
        }}
        to='/wishlist'
      >
        <IoMdHeartEmpty />
      </Link>
      <Link
        className='p-3 h-3 text-4xl text-green-600 absolute flex cursor-pointer'
        style={{ top: '20px', right: '20px', zIndex: 100000 }}
        to='/cart'
      >
        <FaShoppingBag />
      </Link>

      <Link
        className='p-3 h-3 font-bold text-sm text-gray-100  absolute flex cursor-pointer'
        style={{ top: '35px', right: '33.1px', zIndex: 100000 }}
        to='/cart'
      >
        {cartQuantity}
      </Link>
    </div>
  );
};

export default CartIcon;
