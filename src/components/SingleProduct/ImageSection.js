import React from 'react';

const ImageSection = ({ image }) => {
  return (
    <div className='w-6/12 max-h-screen'>
      <img className='object-cover min-h-full' src={image} alt='' />
    </div>
  );
};

export default ImageSection;
