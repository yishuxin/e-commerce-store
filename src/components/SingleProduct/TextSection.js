import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';

const TextSection = ({ title, description, slug }) => {
  return (
    <div className='container w-5/12 my-32 mx-32 '>
      <h2 className='my-10 text-5xl font-display font-medium capitalize'>
        {title}
      </h2>
      <p className='leading-loose my-4'>{description}</p>
      <Link to={`/collection/${slug}`} className='flex items-center'>
        <h4 className='font-display tracking-widest cursor-pointer uppercase text-lg'>
          Details
        </h4>
        <IoIosAdd className='inline-block text-3xl hover:rotate-180' />
      </Link>
    </div>
  );
};

export default TextSection;
