import React from 'react';

const SidebarSection = () => {
  return (
    <div className='w-24'>
      <div className='sidebartop'>
        <div className='ham-cart'>
          <div className='ham'>
            <ion-icon name='menu' />
          </div>
          <div className='cart'>
            <ion-icon name='cart' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
