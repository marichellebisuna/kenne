import React from 'react'
import Slider from 'react-slick';

const Brands = () => {
 const settings = {
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  spaceBetween: 30,
  responsive: [
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
  ],
};
 return (
  <div className="brand-area ">
            <div className="container">
                <div className="brand-nav border-top ">
                    <div className="row">
                        <div className="col-lg-12">
                          
 <Slider
      {...settings}
      className='kenne-element-carousel brand-slider slider-nav'
    >
                                <div className="brand-item">
                                    <a href="javascript:void(0)">
                                        <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/brand/1.png" alt="Brand Images"/>
                                    </a>
                                </div>
                                <div className="brand-item">
                                    <a href="javascript:void(0)">
                                        <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/brand/2.png" alt="Brand Images"/>
                                    </a>
                                </div>
                                <div className="brand-item">
                                    <a href="javascript:void(0)">
                                        <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/brand/3.png" alt="Brand Images"/>
                                    </a>
                                </div>
                                <div className="brand-item">
                                    <a href="javascript:void(0)">
                                        <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/brand/4.png" alt="Brand Images"/>
                                    </a>
                                </div>
                                <div className="brand-item">
                                    <a href="javascript:void(0)">
                                        <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/brand/5.png" alt="Brand Images"/>
                                    </a>
                                </div>
                                <div className="brand-item">
                                    <a href="javascript:void(0)">
                                        <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/brand/6.png" alt="Brand Images"/>
                                    </a>
                                </div>
                                <div className="brand-item">
                                    <a href="javascript:void(0)">
                                        <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/brand/1.png" alt="Brand Images"/>
                                    </a>
                                </div>
                                <div className="brand-item">
                                    <a href="javascript:void(0)">
                                        <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/brand/2.png" alt="Brand Images"/>
                                    </a>
                                </div>
                                </Slider>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
 )
}

export default Brands
