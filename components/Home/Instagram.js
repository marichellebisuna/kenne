import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const Instagram = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className='kenne-instagram_area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='kenne-section_area'>
              <h3>Instagram Feed</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical
              </p>
            </div>
          </div>
          <div className='col-lg-12'>
            <Slider
              {...settings}
              className='kenne-element-carousel instagram-slider arrow-style arrow-style-3'
            >
              <div className='single-item img-hover_effect'>
                <div className='instagram-img'>
                <Link href='/products/:id'><a>
                    <img
                      src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/instagram/4.jpg'
                      alt="Kenne's Instagram Image"
                    />
                  </a></Link>
                </div>
              </div>
              <div className='single-item img-hover_effect'>
                <div className='instagram-img'>
                <Link href='/products/:id'><a>
                    <img
                      src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/instagram/5.jpg'
                      alt="Kenne's Instagram Image"
                    />
                  </a></Link>
                </div>
              </div>
              <div className='single-item img-hover_effect'>
                <div className='instagram-img'>
                <Link href='/products/:id'><a>
                    <img
                      src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/instagram/6.jpg'
                      alt="Kenne's Instagram Image"
                    />
                  </a></Link>
                </div>
              </div>
              <div className='single-item img-hover_effect'>
                <div className='instagram-img'>
                   <Link href='/products/:id'><a>
                    <img
                      src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/instagram/7.jpg'
                      alt="Kenne's Instagram Image"
                    />
                  </a></Link>
                </div>
              </div>
              <div className='single-item img-hover_effect'>
                <div className='instagram-img'>
                   <Link href='/products/:id'><a>
                    <img
                      src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/instagram/1.jpg'
                      alt="Kenne's Instagram Image"
                    />
                  </a></Link>
                </div>
              </div>
              <div className='single-item img-hover_effect'>
                <div className='instagram-img'>
                   <Link href='/products/:id'><a>
                    <img
                      src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/instagram/2.jpg'
                      alt="Kenne's Instagram Image"
                    />
                  </a></Link>
                </div>
              </div>
              <div className='single-item img-hover_effect'>
                <div className='instagram-img'>
                   <Link href='/products/:id'><a>
                    <img
                      src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/instagram/3.jpg'
                      alt="Kenne's Instagram Image"
                    />
                  </a></Link>
                </div>
              </div>
              <div className='single-item img-hover_effect'>
                <div className='instagram-img'>
                   <Link href='/products/:id'><a>
                    <img
                      src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/instagram/4.jpg'
                      alt="Kenne's Instagram Image"
                    />
                  </a></Link>
                </div>
              </div>
              <div className='single-item img-hover_effect'>
                <div className='instagram-img'>
                   <Link href='/products/:id'><a>
                    <img
                      src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/instagram/5.jpg'
                      alt="Kenne's Instagram Image"
                    />
                  </a></Link>
                </div>
              </div>
              <div className='single-item img-hover_effect'>
                <div className='instagram-img'>
                   <Link href='/products/:id'><a>
                    <img
                      src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/instagram/6.jpg'
                      alt="Kenne's Instagram Image"
                    />
                  </a></Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
