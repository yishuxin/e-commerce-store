import React, { useContext } from 'react';
import { ProductsContext } from '../../context/ProductContext';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const getWidth = (productQuantity, counter) => {
  let width = '';
  if (productQuantity && counter) {
    width += (100 / productQuantity) * counter;
  }
  return width;
};

const GalleryNav = ({ counter, id, inCart }) => {
  const { productQuantity, nextProduct, prevProduct, addToCart } = useContext(
    ProductsContext
  );
  let width = getWidth(productQuantity, counter);

  return (
    <div className='flex w-screen absolute bottom-0 left-0 m-0 justify-between'>
      <div className='flex w-2/3'>
        <button
          className='w-2/6 ml-32 h-20 self-end bg-yellow flex justify-center items-center cursor-pointer'
          onClick={() => addToCart(id)}
          disabled={inCart ? true : false}
        >
          {inCart ? 'in cart' : 'Add to cart'}
        </button>
        <div className='flex w-2/5 h-32 bg-black text-white items-center text-6xl relative '>
          <h2 className='ml-6'>{counter < 10 ? `0${counter}` : counter}</h2>
          <div className='w-3/5 bg-yellow absolute right-0 h-1 bottom-0 mb-8 mr-4 '>
            <div style={{ width: `${width}%`, border: '2px solid white' }} />
          </div>
        </div>
      </div>
      <div className='w-48 flex items-end'>
        <div
          className='flex flex-1 bg-white h-24 justify-center items-center text-4xl cursor-pointer'
          onClick={prevProduct}
        >
          <IoIosArrowBack />
        </div>
        <div
          className='flex flex-1 bg-yellow h-24 justify-center items-center text-4xl cursor-pointer'
          onClick={nextProduct}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default GalleryNav;
