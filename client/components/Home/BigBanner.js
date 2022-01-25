import React from 'react';
import Link from 'next/link'

const BigBanner = () => {
  return (
    <div className='banner-area banner-area-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='banner-item img-hover_effect'>
              <div className='banner-img'>
              <Link href='/products/:id'><a>
                  <img
                    className='img-full'
                    src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/banner/1-4.jpg'
                    alt='Banner'
                  />
                </a></Link>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='banner-item img-hover_effect'>
              <div className='banner-img'>
              <Link href='/products/:id'><a>
                  <img
                    className='img-full'
                    src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/banner/1-5.jpg'
                    alt='Banner'
                  />
                </a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
