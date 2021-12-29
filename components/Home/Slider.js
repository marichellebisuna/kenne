import React from 'react';
import Link from 'next/link';

const Slider = () => {
  return (
    <div className='slider-area'>
      <div
        className='kenne-element-carousel home-slider arrow-style'
        data-slick-options='{
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "infinite": true,
      "arrows": true,
      "dots": false,
      "autoplay" : true,
      "fade" : true,
      "autoplaySpeed" : 7000,
      "pauseOnHover" : false,
      "pauseOnFocus" : false
      }'
        data-slick-responsive='[
      {"breakpoint":768, "settings": {
      "slidesToShow": 1
      }},
      {"breakpoint":575, "settings": {
      "slidesToShow": 1
      }}
  ]'
      >
        <div className='slide-item bg-1 animation-style-01'>
          <div className='slider-progress'></div>
          <div className='container'>
            <div className='slide-content'>
              <span>Exclusive Offer -20% Off This Week</span>
              <h2>
                Accessories <br /> Explore Trending
              </h2>
              <p className='short-desc'>
                Aliquam error eos cumque aut repellat quasi accusantium
                inventore necessitatibus. Vel quisquam distinctio in inventore
                dolorum.
              </p>
              <div className='slide-btn'>
              <Link href='/products'><a className='kenne-btn' >
                  shop now
                </a></Link>
              </div>
            </div>
          </div>
        </div>
        <div className='slide-item bg-2 animation-style-01'>
          <div className='slider-progress'></div>
          <div className='container'>
            <div className='slide-content'>
              <span>Exclusive Offer -10% Off This Week</span>
              <h2>
                Stylist <br /> Female Clothes
              </h2>
              <p className='short-desc-2'>
                Made from Soft, Durable, US-grown Supima cotton.
              </p>
              <div className='slide-btn'>
              <Link href='/products'><a className='kenne-btn' >
                  shop now
                </a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
