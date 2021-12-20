import React from 'react';

const SingleBanner = () => {
  return (
    <div className='kenne-banner_area kenne-banner_area-4'>
      <div className='banner-img'></div>
      <div className='banner-content'>
        <h3>Get exclusive Products.</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text{' '}
        </p>
        <div className='contact-us'>
          <a href='callto://+123123321345'>(+123) 123 321 345</a>
        </div>
        <div className='kenne-btn-ps_center'>
          <a
            className='kenne-btn transparent-btn'
            href='shop-left-sidebar.html'
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBanner;
