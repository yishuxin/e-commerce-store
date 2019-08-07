import React from 'react';

const Button = ({ content }) => {
  return (
    <button className='text-black shadow-md bg-yellow font-semibold w-24 py-2 px-1 cursor-pointer'>
      {content}
    </button>
  );
};

export default Button;
