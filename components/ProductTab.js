import React from 'react';

const ProductTab = () => {
  return (
    <div
      className='kenne-element-carousel product-slider slider-nav'
      data-slick-options='{
             "slidesToShow": 4,
             "slidesToScroll": 1,
             "infinite": false,
             "arrows": true,
             "dots": false,
             "spaceBetween": 30,
             "appendArrows": ".product-arrow"
             }'
      data-slick-responsive='[
             {"breakpoint":992, "settings": {
             "slidesToShow": 3
             }},
             {"breakpoint":768, "settings": {
             "slidesToShow": 2
             }},
             {"breakpoint":575, "settings": {
             "slidesToShow": 1
             }}
         ]'
    >
      <div className='product-item'>
        <div className='single-product'>
          <div className='product-img'>
            <a href='single-product.html'>
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
                src='assets/images/product/2-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='assets/images/product/2-2.jpg'
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
                src='assets/images/product/3-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='assets/images/product/3-2.jpg'
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
                src='assets/images/product/4-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='assets/images/product/4-2.jpg'
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
                src='assets/images/product/5-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='assets/images/product/5-2.jpg'
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
                src='assets/images/product/6-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='assets/images/product/6-2.jpg'
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
                <a href='single-product.html'>Eligendi voluptate</a>
              </h3>
              <div className='price-box'>
                <span className='new-price'>$60.00</span>
                <span className='old-price'>$65.00</span>
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
                src='assets/images/product/7-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='assets/images/product/7-2.jpg'
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
                <a href='single-product.html'>Excepturi perspiciatis</a>
              </h3>
              <div className='price-box'>
                <span className='new-price'>$50.00</span>
                <span className='old-price'>$60.00</span>
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
                    <i className='ion-ios-star-outline'></i>
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
                src='assets/images/product/8-1.jpg'
                alt="Kenne's Product Image"
              />
              <img
                className='secondary-img'
                src='assets/images/product/8-2.jpg'
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
                <a href='single-product.html'>Esse eveniet</a>
              </h3>
              <div className='price-box'>
                <span className='new-price'>$70.00</span>
                <span className='old-price'>$75.00</span>
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
    </div>
  );
};

export default ProductTab;
