import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import {
  IoMdTrash,
  IoIosAdd,
  IoMdRemove,
  IoIosArrowRoundBack
} from 'react-icons/io';

const ShoppingCart = () => {
  const {
    cartQuantity,
    cartIncrement,
    cartDecrement,
    clearCart,
    total,
    tax,
    removeProduct,
    cart
  } = useContext(ProductsContext);
  if (cart.length > 0) {
    console.log(cart);
    return (
      <div className='bg-yellow mx-auto min-h-screen '>
        <div
          className='flex justify-between absolute'
          style={{ top: 0, left: 0 }}
        >
          <h1 className='text-gray-400 bg-black p-4 text-4xl font-display'>
            shopping cart
          </h1>
        </div>
        <div className='p-16' />
        {cart.map(item => {
          return (
            <div
              key={`${item.id}__${item}`}
              className='flex p-2 justify-around border-b border-gray-200 items-center text-lg'
            >
              <div className=''>
                <img className='h-16' src={item.images[0]} alt='' />
              </div>

              <div className=''>{item.name}</div>

              <div className=''>${item.price}</div>

              <div className='flex items-center'>
                <IoIosAdd
                  className='text-2xl cursor-pointer inline'
                  onClick={() => cartIncrement(item.id)}
                />
                <div>{item.count}</div>
                <IoMdRemove
                  onClick={() => cartDecrement(item.id)}
                  className='text-2xl cursor-pointer inline'
                />
              </div>

              <div
                className='text-xl cursor-pointer'
                onClick={() => removeProduct(item.id)}
              >
                <IoMdTrash />
              </div>
              <div className=''>subtotal: {item.total}</div>
            </div>
          );
        })}
        <div className='flex justify-between items-center'>
          <Link
            to='/collection'
            className='ml-8 border-gray-200 border-b p-2 text-lg flex items-center '
          >
            <span className='text-4xl'>
              <IoIosArrowRoundBack />
            </span>
            <span className='ml-2'>countine shopping</span>
          </Link>
          <div
            className='flex flex-col text-lg my-8 mr-4 w-1/5 float-right text-center justify-center'
            style={{ bottom: 0, right: 0 }}
          >
            <div
              className='cursor-pointer border-b'
              onClick={() => clearCart()}
            >
              clear cart
            </div>
            <div className='px-7 py-1 text-gray-700'>
              Items :{' '}
              <span className='text-gray-900 text-xl'>{cartQuantity}</span>
            </div>
            <div className='px-7 py-1 text-gray-700'>
              Tax : <span className='text-gray-900 text-xl'>{tax}</span>
            </div>
            <div className='px-7 py-1 text-gray-700'>
              Total : <span className='text-gray-900 text-xl'>{total}</span>
            </div>
            <div className='px-7 py-1 mt-6 text-xl text-gray-700 cursor-pointer border-gray-200 border-b'>
              Check Out
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return '';
  }
};

export default ShoppingCart;
