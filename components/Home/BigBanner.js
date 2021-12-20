import React from 'react';

const BigBanner = () => {
  return (
    <div className='banner-area banner-area-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='banner-item img-hover_effect'>
              <div className='banner-img'>
                <a href='javascrip:void(0)'>
                  <img
                    className='img-full'
                    src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/banner/1-4.jpg'
                    alt='Banner'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='banner-item img-hover_effect'>
              <div className='banner-img'>
                <a href='javascrip:void(0)'>
                  <img
                    className='img-full'
                    src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/banner/1-5.jpg'
                    alt='Banner'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
