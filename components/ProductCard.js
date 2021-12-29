import React from 'react';
import Link from 'next/link';

const ProductCard = () => {
  return (
    <div className='product-item'>
      <div className='single-product'>
        <div className='product-img'>
         <Link href='/products/:id'>
                  <a>
            <img
              className='primary-img'
              src='assets/images/product/1-1.jpg'
              alt="Kenne's Product Image"
            />
            <img
              className='secondary-img'
              src='assets/images/product/1-2.jpg'
              alt="Kenne's Product Image"
            />
          </a>
          </Link>
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
              <Link href='/wishlist'>
                  
                <a
                  href='wishlist.html'
                  data-bs-toggle='tooltip'
                  data-placement='right'
                  title='Add To Wishlist'
                >
                  <i className='ion-ios-heart-outline'></i>
                </a>
                </Link>
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
            <Link href='/products/:id'>
                  <a>
              Quibusdam ratione</a></Link>
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
  );
};

export default ProductCard;
