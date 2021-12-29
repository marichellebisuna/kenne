import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const ProductTab = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className='kenne-element-carousel product-slider slider-nav'
    >
      <div className='product-item'>
        <div className='single-product'>
          <div className='product-img'>
          <Link href='/products/:id'>
                  <a>
              <img
                className='primary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/4-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/4-2.jpg'
                alt="Kenne's Product Image"
              />
            </a></Link>
            <span className='sticker-2'>Hot</span>
            <div className='add-actions'>
              <ul>
                <li
                  className='quick-view-btn'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModalCenter'
                >
                  <a
                    href='javascript:void(0)'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Quick View'
                  >
                    <i className='ion-ios-search'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='wishlist.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Wishlist'
                  >
                    <i className='ion-ios-heart-outline'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='compare.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Compare'
                  >
                    <i className='ion-ios-reload'></i>
                  </a>
                </li>
                <li>
                <Link href='/cart'>                  
                  <a                   
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To cart'
                  >
                    <i className='ion-bag'></i>
                  </a></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='product-content'>
            <div className='product-desc_info'>
              <h3 className='product-name'>
              <Link href='/products/:id'><a>Quibusdam ratione</a></Link>
              </h3>
              <div className='price-box'>
                <span className='new-price'>$46.91</span>
                <span className='old-price'>$50.99</span>
              </div>
              <div className='rating-box'>
                <ul>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li className='silver-color'>
                    <i className='ion-ios-star-half'></i>
                  </li>
                  <li className='silver-color'>
                    <i className='ion-ios-star-outline'></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='product-item'>
        <div className='single-product'>
          <div className='product-img'>
          <Link href='/products/:id'><a>
              <img
                className='primary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/5-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/5-2.jpg'
                alt="Kenne's Product Image"
              />
            </a></Link>
            <span className='sticker'>Bestseller</span>
            <div className='add-actions'>
              <ul>
                <li
                  className='quick-view-btn'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModalCenter'
                >
                  <a
                    href='javascript:void(0)'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Quick View'
                  >
                    <i className='ion-ios-search'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='wishlist.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Wishlist'
                  >
                    <i className='ion-ios-heart-outline'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='compare.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Compare'
                  >
                    <i className='ion-ios-reload'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='cart.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To cart'
                  >
                    <i className='ion-bag'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='product-content'>
            <div className='product-desc_info'>
              <h3 className='product-name'>
              <Link href='/products/:id'><a>Nulla laboriosam</a></Link>
              </h3>
              <div className='price-box'>
                <span className='new-price'>$80.00</span>
                <span className='old-price'>$85,00</span>
              </div>
              <div className='rating-box'>
                <ul>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='product-item'>
        <div className='single-product'>
          <div className='product-img'>
            <a href='single-product.html'>
              <img
                className='primary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/6-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/6-2.jpg'
                alt="Kenne's Product Image"
              />
            </a>
            <span className='sticker-2'>Hot</span>
            <div className='add-actions'>
              <ul>
                <li
                  className='quick-view-btn'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModalCenter'
                >
                  <a
                    href='javascript:void(0)'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Quick View'
                  >
                    <i className='ion-ios-search'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='wishlist.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Wishlist'
                  >
                    <i className='ion-ios-heart-outline'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='compare.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Compare'
                  >
                    <i className='ion-ios-reload'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='cart.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To cart'
                  >
                    <i className='ion-bag'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='product-content'>
            <div className='product-desc_info'>
              <h3 className='product-name'>
                <a href='single-product.html'>Adipisci voluptas</a>
              </h3>
              <div className='price-box'>
                <span className='new-price'>$75.91</span>
                <span className='old-price'>$80.99</span>
              </div>
              <div className='rating-box'>
                <ul>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li className='silver-color'>
                    <i className='ion-ios-star-outline'></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='product-item'>
        <div className='single-product'>
          <div className='product-img'>
            <a href='single-product.html'>
              <img
                className='primary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/7-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/7-2.jpg'
                alt="Kenne's Product Image"
              />
            </a>
            <span className='sticker'>Bestseller</span>
            <div className='add-actions'>
              <ul>
                <li
                  className='quick-view-btn'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModalCenter'
                >
                  <a
                    href='javascript:void(0)'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Quick View'
                  >
                    <i className='ion-ios-search'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='wishlist.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Wishlist'
                  >
                    <i className='ion-ios-heart-outline'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='compare.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Compare'
                  >
                    <i className='ion-ios-reload'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='cart.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To cart'
                  >
                    <i className='ion-bag'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='product-content'>
            <div className='product-desc_info'>
              <h3 className='product-name'>
                <a href='single-product.html'>Possimus beatae</a>
              </h3>
              <div className='price-box'>
                <span className='new-price'>$65.00</span>
                <span className='old-price'>$70.00</span>
              </div>
              <div className='rating-box'>
                <ul>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li className='silver-color'>
                    <i className='ion-ios-star-half'></i>
                  </li>
                  <li className='silver-color'>
                    <i className='ion-ios-star-outline'></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='product-item'>
        <div className='single-product'>
          <div className='product-img'>
            <a href='single-product.html'>
              <img
                className='primary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/8-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/8-2.jpg'
                alt="Kenne's Product Image"
              />
            </a>
            <span className='sticker-2'>Hot</span>
            <div className='add-actions'>
              <ul>
                <li
                  className='quick-view-btn'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModalCenter'
                >
                  <a
                    href='javascript:void(0)'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Quick View'
                  >
                    <i className='ion-ios-search'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='wishlist.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Wishlist'
                  >
                    <i className='ion-ios-heart-outline'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='compare.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Compare'
                  >
                    <i className='ion-ios-reload'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='cart.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To cart'
                  >
                    <i className='ion-bag'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='product-content'>
            <div className='product-desc_info'>
              <h3 className='product-name'>
                <a href='single-product.html'>Voluptates laudantium</a>
              </h3>
              <div className='price-box'>
                <span className='new-price'>$95.00</span>
                <span className='old-price'>$100.00</span>
              </div>
              <div className='rating-box'>
                <ul>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li className='silver-color'>
                    <i className='ion-ios-star-half'></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='product-item'>
        <div className='single-product'>
          <div className='product-img'>
            <a href='single-product.html'>
              <img
                className='primary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/4-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/4-2.jpg'
                alt="Kenne's Product Image"
              />
            </a>
            <span className='sticker-2'>Hot</span>
            <div className='add-actions'>
              <ul>
                <li
                  className='quick-view-btn'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModalCenter'
                >
                  <a
                    href='javascript:void(0)'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Quick View'
                  >
                    <i className='ion-ios-search'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='wishlist.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Wishlist'
                  >
                    <i className='ion-ios-heart-outline'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='compare.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Compare'
                  >
                    <i className='ion-ios-reload'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='cart.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To cart'
                  >
                    <i className='ion-bag'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='product-content'>
            <div className='product-desc_info'>
              <h3 className='product-name'>
                <a href='single-product.html'>Quibusdam ratione</a>
              </h3>
              <div className='price-box'>
                <span className='new-price'>$46.91</span>
                <span className='old-price'>$50.99</span>
              </div>
              <div className='rating-box'>
                <ul>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li className='silver-color'>
                    <i className='ion-ios-star-half'></i>
                  </li>
                  <li className='silver-color'>
                    <i className='ion-ios-star-outline'></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='product-item'>
        <div className='single-product'>
          <div className='product-img'>
            <a href='single-product.html'>
              <img
                className='primary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/5-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/5-2.jpg'
                alt="Kenne's Product Image"
              />
            </a>
            <span className='sticker'>Bestseller</span>
            <div className='add-actions'>
              <ul>
                <li
                  className='quick-view-btn'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModalCenter'
                >
                  <a
                    href='javascript:void(0)'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Quick View'
                  >
                    <i className='ion-ios-search'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='wishlist.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Wishlist'
                  >
                    <i className='ion-ios-heart-outline'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='compare.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Compare'
                  >
                    <i className='ion-ios-reload'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='cart.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To cart'
                  >
                    <i className='ion-bag'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='product-content'>
            <div className='product-desc_info'>
              <h3 className='product-name'>
                <a href='single-product.html'>Nulla laboriosam</a>
              </h3>
              <div className='price-box'>
                <span className='new-price'>$80.00</span>
                <span className='old-price'>$85,00</span>
              </div>
              <div className='rating-box'>
                <ul>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='product-item'>
        <div className='single-product'>
          <div className='product-img'>
            <a href='single-product.html'>
              <img
                className='primary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/6-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/6-2.jpg'
                alt="Kenne's Product Image"
              />
            </a>
            <span className='sticker-2'>Hot</span>
            <div className='add-actions'>
              <ul>
                <li
                  className='quick-view-btn'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModalCenter'
                >
                  <a
                    href='javascript:void(0)'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Quick View'
                  >
                    <i className='ion-ios-search'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='wishlist.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Wishlist'
                  >
                    <i className='ion-ios-heart-outline'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='compare.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To Compare'
                  >
                    <i className='ion-ios-reload'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='cart.html'
                    data-bs-toggle='tooltip'
                    data-placement='right'
                    title='Add To cart'
                  >
                    <i className='ion-bag'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='product-content'>
            <div className='product-desc_info'>
              <h3 className='product-name'>
                <a href='single-product.html'>Adipisci voluptas</a>
              </h3>
              <div className='price-box'>
                <span className='new-price'>$75.91</span>
                <span className='old-price'>$80.99</span>
              </div>
              <div className='rating-box'>
                <ul>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li>
                    <i className='ion-ios-star'></i>
                  </li>
                  <li className='silver-color'>
                    <i className='ion-ios-star-outline'></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default ProductTab;
