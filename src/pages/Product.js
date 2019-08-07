import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Product = props => {
  const { singleProduct, addToCart } = useContext(ProductsContext);
  const product = singleProduct(props.match.params.slug);

  if (!product) {
    return <p>no product could be found</p>;
  } else {
    return (
      <div className='min-h-screen flex overflow-hidden'>
        <section className='w-3/12 flex flex-col justify-between'>
          <div className='flex-1' style={{ height: '60vh' }}>
            <Link to='/collection'>
              <Button content='go back' />
            </Link>
          </div>
          <div className='' style={{ height: '40vh' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            officia! Possimus, eaque reiciendis? Soluta explicabo iste nihil nam
            impedit delectus!
          </div>
        </section>
        <section className='w-9/12'>
          <div>
            <div className='flex-1 relative' style={{ height: '60vh' }}>
              <h1
                className='absolute text-4xl font-display font-medium capitalize'
                style={{ top: '5rem', left: '5rem' }}
              >
                {product.name}
              </h1>

              <img
                style={{ height: '100%', width: '100%' }}
                src={product.images[1]}
                alt='product'
              />
            </div>
          </div>

          <section
            className='flex bg-black text-gray-400'
            style={{ height: '40vh' }}
          >
            <div className='w-1/6 bg-yellow' style={{ height: '100%' }} />
            <div className='flex flex-col justify-around ml-10'>
              <div className=''>
                <h1 className=' text-3xl'>Discover the details</h1>
              </div>
              <div className='flex'>
                <div className='w-1/3 px-2'>
                  <h1 className='text-lg mb-2 text-gray-600'>Product Info</h1>
                  <p className='text-sm'>{product.description}</p>
                </div>

                <div className='w-1/3 px-24'>
                  <h1 className='text-lg mb-2 text-gray-600'>Extra</h1>
                  <p className='text-sm'>{product.extras[0]}</p>
                </div>

                <div className='w-1/3 px-24'>
                  <h1 className='text-lg mb-2 text-gray-600'>Price</h1>
                  <p className='text-xl mb-4'>${product.price}</p>
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={product.inCart ? true : false}
                    style={
                      product.inCart
                        ? { cursor: 'pointer' }
                        : { cursor: 'default' }
                    }
                    className='text-black bg-yellow w-32 text-lg h-16 inline text-center text-sm cursor-pointer z-1000'
                  >
                    {product.inCart ? 'in cart' : 'Add to cart'}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
};

export default Product;
