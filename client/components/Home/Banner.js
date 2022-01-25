import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link'

const Banner = () => {
  return (
    <div className='banner-area'>
      <div className='container'>
        <Slider className='row'>
          <div className='col-md-4 col-6 custom-xxs-col'>
            <div className='banner-item img-hover_effect'>
              <div className='banner-img'>
                <Link href='/products/:id'><a>
                  <img
                    src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/banner/1-1.jpg'
                    alt='Banner'
                  />
                </a></Link>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-6 custom-xxs-col'>
            <div className='banner-item img-hover_effect'>
              <div className='banner-img'>
              <Link href='/products/:id'><a>
                  <img
                    src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/banner/1-2.jpg'
                    alt='Banner'
                  />
                </a></Link>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-6 custom-xxs-col'>
            <div className='banner-item img-hover_effect'>
              <div className='banner-img'>
              <Link href='/products/:id'><a>
                  <img
                    src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/banner/1-3.jpg'
                    alt='Banner'
                  />
                </a></Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
