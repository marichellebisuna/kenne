import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";


const Slides = () => {
  function SamplePrevArrow(props) {
    const {  style, onClick } = props;    
    return (
      <div
        className='tty-slick-text-btn'
        style={{ ...style, 
          boxShadow:" 0px 0px 9.8px 0.2px rgba(0, 0, 0, 0.05)",backgroundColor: "#ffffff",    
          fontSize: "20px",
          width: "50px",
          height: "50px",
          lineHeight: "50px",
          display: "block",
          textAlign: "center",
          position: "absolute",
          cursor: "pointer",
          borderRadius: "100%",
          left: "auto",
          right:"5%",
          top: "50%",         
          zIndex: 1,         
          transform: "translateY(-50%)" ,  
          webkitTransform: "translateY(-50%)",
          msTransform: "translateY(-50%)",                      
        }}
        onClick={onClick}>         
        <i className="ion-ios-arrow-forward"></i>   
      </div>
    );
  }
  
  function SampleNextArrow(props) {
    const {style, onClick } = props;
    return (
      <div
        className="tty-slick-text-btn"
        style={{ ...style, 
          boxShadow:" 0px 0px 9.8px 0.2px rgba(0, 0, 0, 0.05)",
          backgroundColor: "#ffffff",
          fontSize: "20px",
          width: "50px",
          height: "50px",
          lineHeight: "50px",
          display: "block",
          textAlign: "center",
          position: "absolute",
          cursor: "pointer",
          borderRadius: "100%",
          left: "auto",
          right:"5%",
          top: "38%",         
          zIndex: 1,         
          transform: "translateY(50%)" ,  
          webkitTransform: "translateY(50%)",
          msTransform: "translateY(50%)",         
       }}
        onClick={onClick}>
        <i className="ion-ios-arrow-back"></i>
      </div>
    );
  }
  var settings={
    "className":" home-slider ",
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": true,
    "arrows": true,
    "dots": false,
    "autoplay" : true,
    "fade" : true,
    "autoplaySpeed" : 7000,
    "pauseOnHover" : false,
    "pauseOnFocus" : false,
    "nextArrow":<SampleNextArrow/>,
    "prevArrow":<SamplePrevArrow/>,
    responsive:[{
      "breakpoint":768, "settings": {
      "slidesToShow": 1},
      "breakpoint":575, "settings": {
      "slidesToShow": 1}
    }]    
  };
  
 
  return ( 
  <div className='slider-area'>
      <Slider {...settings}>
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
      </Slider>
  </div>
  
  );
};

export default Slides;
