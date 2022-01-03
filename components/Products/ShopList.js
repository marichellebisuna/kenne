import React from 'react'
import Link from 'next/link'

const ShopList = () => {
 return (
  <div className="shop-product-wrap grid listview row">
  <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="product-item">
          <div className="single-product">
              <div className="product-img">
                   <Link href='/products/product'> <a >
                      <img className="primary-img" src="assets/images/product/1-1.jpg" alt="Kenne's Product Image"/>
                      <img className="secondary-img" src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
                  <span className="sticker">-15%</span>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Quick View"><i className="ion-ios-search"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a data-bs-toggle="tooltip" data-placement="right" title="Add To Compare"><i
                                  className="ion-ios-reload"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To cart"><i className="ion-bag"></i></a></Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <h3 className="product-name">  <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h3>
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="list-product_item">
          <div className="single-product">
              <div className="product-img">
              <Link href='/products/product'>
                  <a >
                      <img src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <h6 className="product-name"> <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h6>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                      <div className="product-short_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate, tristique ut lectus
                          </p>
                      </div>
                  </div>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'></Link><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-ios-search"></i></a>
                          </li>
                          <li>  <Link href='/wishlist'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a>
                          </li>
                          <li>  <Link href='/products/product'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Compare"><i className="ion-ios-reload"></i></a>
                          </li>
                          <li>  <Link href='/cart'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="product-item">
          <div className="single-product">
              <div className="product-img">
                   <Link href='/products/product'> <a >
                      <img className="primary-img" src="assets/images/product/1-1.jpg" alt="Kenne's Product Image"/>
                      <img className="secondary-img" src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
                  <span className="sticker">-15%</span>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Quick View"><i className="ion-ios-search"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a data-bs-toggle="tooltip" data-placement="right" title="Add To Compare"><i
                                  className="ion-ios-reload"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To cart"><i className="ion-bag"></i></a></Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <h3 className="product-name">  <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h3>
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="list-product_item">
          <div className="single-product">
              <div className="product-img">
              <Link href='/products/product'>
                  <a >
                      <img src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <h6 className="product-name"> <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h6>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                      <div className="product-short_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate, tristique ut lectus
                          </p>
                      </div>
                  </div>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'></Link><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-ios-search"></i></a>
                          </li>
                          <li>  <Link href='/wishlist'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a>
                          </li>
                          <li>  <Link href='/products/product'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Compare"><i className="ion-ios-reload"></i></a>
                          </li>
                          <li>  <Link href='/cart'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="product-item">
          <div className="single-product">
              <div className="product-img">
                   <Link href='/products/product'> <a >
                      <img className="primary-img" src="assets/images/product/1-1.jpg" alt="Kenne's Product Image"/>
                      <img className="secondary-img" src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
                  <span className="sticker">-15%</span>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Quick View"><i className="ion-ios-search"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a data-bs-toggle="tooltip" data-placement="right" title="Add To Compare"><i
                                  className="ion-ios-reload"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To cart"><i className="ion-bag"></i></a></Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <h3 className="product-name">  <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h3>
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="list-product_item">
          <div className="single-product">
              <div className="product-img">
              <Link href='/products/product'>
                  <a >
                      <img src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <h6 className="product-name"> <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h6>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                      <div className="product-short_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate, tristique ut lectus
                          </p>
                      </div>
                  </div>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'></Link><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-ios-search"></i></a>
                          </li>
                          <li>  <Link href='/wishlist'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a>
                          </li>
                          <li>  <Link href='/products/product'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Compare"><i className="ion-ios-reload"></i></a>
                          </li>
                          <li>  <Link href='/cart'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="product-item">
          <div className="single-product">
              <div className="product-img">
                   <Link href='/products/product'> <a >
                      <img className="primary-img" src="assets/images/product/1-1.jpg" alt="Kenne's Product Image"/>
                      <img className="secondary-img" src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
                  <span className="sticker">-15%</span>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Quick View"><i className="ion-ios-search"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a data-bs-toggle="tooltip" data-placement="right" title="Add To Compare"><i
                                  className="ion-ios-reload"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To cart"><i className="ion-bag"></i></a></Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <h3 className="product-name">  <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h3>
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="list-product_item">
          <div className="single-product">
              <div className="product-img">
              <Link href='/products/product'>
                  <a >
                      <img src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <h6 className="product-name"> <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h6>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                      <div className="product-short_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate, tristique ut lectus
                          </p>
                      </div>
                  </div>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'></Link><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-ios-search"></i></a>
                          </li>
                          <li>  <Link href='/wishlist'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a>
                          </li>
                          <li>  <Link href='/products/product'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Compare"><i className="ion-ios-reload"></i></a>
                          </li>
                          <li>  <Link href='/cart'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="product-item">
          <div className="single-product">
              <div className="product-img">
                   <Link href='/products/product'> <a >
                      <img className="primary-img" src="assets/images/product/1-1.jpg" alt="Kenne's Product Image"/>
                      <img className="secondary-img" src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
                  <span className="sticker">-15%</span>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Quick View"><i className="ion-ios-search"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a data-bs-toggle="tooltip" data-placement="right" title="Add To Compare"><i
                                  className="ion-ios-reload"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To cart"><i className="ion-bag"></i></a></Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <h3 className="product-name">  <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h3>
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="list-product_item">
          <div className="single-product">
              <div className="product-img">
              <Link href='/products/product'>
                  <a >
                      <img src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <h6 className="product-name"> <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h6>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                      <div className="product-short_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate, tristique ut lectus
                          </p>
                      </div>
                  </div>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'></Link><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-ios-search"></i></a>
                          </li>
                          <li>  <Link href='/wishlist'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a>
                          </li>
                          <li>  <Link href='/products/product'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Compare"><i className="ion-ios-reload"></i></a>
                          </li>
                          <li>  <Link href='/cart'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="product-item">
          <div className="single-product">
              <div className="product-img">
                   <Link href='/products/product'> <a >
                      <img className="primary-img" src="assets/images/product/1-1.jpg" alt="Kenne's Product Image"/>
                      <img className="secondary-img" src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
                  <span className="sticker">-15%</span>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Quick View"><i className="ion-ios-search"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a data-bs-toggle="tooltip" data-placement="right" title="Add To Compare"><i
                                  className="ion-ios-reload"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To cart"><i className="ion-bag"></i></a></Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <h3 className="product-name">  <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h3>
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="list-product_item">
          <div className="single-product">
              <div className="product-img">
              <Link href='/products/product'>
                  <a >
                      <img src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <h6 className="product-name"> <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h6>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                      <div className="product-short_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate, tristique ut lectus
                          </p>
                      </div>
                  </div>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'></Link><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-ios-search"></i></a>
                          </li>
                          <li>  <Link href='/wishlist'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a>
                          </li>
                          <li>  <Link href='/products/product'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Compare"><i className="ion-ios-reload"></i></a>
                          </li>
                          <li>  <Link href='/cart'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="product-item">
          <div className="single-product">
              <div className="product-img">
                   <Link href='/products/product'> <a >
                      <img className="primary-img" src="assets/images/product/1-1.jpg" alt="Kenne's Product Image"/>
                      <img className="secondary-img" src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
                  <span className="sticker">-15%</span>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Quick View"><i className="ion-ios-search"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a data-bs-toggle="tooltip" data-placement="right" title="Add To Compare"><i
                                  className="ion-ios-reload"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To cart"><i className="ion-bag"></i></a></Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <h3 className="product-name">  <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h3>
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="list-product_item">
          <div className="single-product">
              <div className="product-img">
              <Link href='/products/product'>
                  <a >
                      <img src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <h6 className="product-name"> <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h6>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                      <div className="product-short_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate, tristique ut lectus
                          </p>
                      </div>
                  </div>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'></Link><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-ios-search"></i></a>
                          </li>
                          <li>  <Link href='/wishlist'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a>
                          </li>
                          <li>  <Link href='/products/product'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Compare"><i className="ion-ios-reload"></i></a>
                          </li>
                          <li>  <Link href='/cart'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="product-item">
          <div className="single-product">
              <div className="product-img">
                   <Link href='/products/product'> <a >
                      <img className="primary-img" src="assets/images/product/1-1.jpg" alt="Kenne's Product Image"/>
                      <img className="secondary-img" src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
                  <span className="sticker">-15%</span>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Quick View"><i className="ion-ios-search"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a data-bs-toggle="tooltip" data-placement="right" title="Add To Compare"><i
                                  className="ion-ios-reload"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To cart"><i className="ion-bag"></i></a></Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <h3 className="product-name">  <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h3>
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="list-product_item">
          <div className="single-product">
              <div className="product-img">
              <Link href='/products/product'>
                  <a >
                      <img src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <h6 className="product-name"> <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h6>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                      <div className="product-short_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate, tristique ut lectus
                          </p>
                      </div>
                  </div>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'></Link><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-ios-search"></i></a>
                          </li>
                          <li>  <Link href='/wishlist'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a>
                          </li>
                          <li>  <Link href='/products/product'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Compare"><i className="ion-ios-reload"></i></a>
                          </li>
                          <li>  <Link href='/cart'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="product-item">
          <div className="single-product">
              <div className="product-img">
                   <Link href='/products/product'> <a >
                      <img className="primary-img" src="assets/images/product/1-1.jpg" alt="Kenne's Product Image"/>
                      <img className="secondary-img" src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
                  <span className="sticker">-15%</span>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Quick View"><i className="ion-ios-search"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a data-bs-toggle="tooltip" data-placement="right" title="Add To Compare"><i
                                  className="ion-ios-reload"></i></a></Link>
                          </li>
                          <li>  <Link href='/products/product'><a  data-bs-toggle="tooltip" data-placement="right" title="Add To cart"><i className="ion-bag"></i></a></Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <h3 className="product-name">  <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h3>
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="list-product_item">
          <div className="single-product">
              <div className="product-img">
              <Link href='/products/product'>
                  <a >
                      <img src="assets/images/product/1-2.jpg" alt="Kenne's Product Image"/>
                  </a></Link>
              </div>
              <div className="product-content">
                  <div className="product-desc_info">
                      <div className="price-box">
                          <span className="new-price">$46.91</span>
                          <span className="old-price">$50.99</span>
                      </div>
                      <h6 className="product-name"> <Link href='/products/product'><a >Quibusdam
                              ratione</a></Link></h6>
                      <div className="rating-box">
                          <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i>
                              </li>
                          </ul>
                      </div>
                      <div className="product-short_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate, tristique ut lectus
                          </p>
                      </div>
                  </div>
                  <div className="add-actions">
                      <ul>
                          <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'></Link><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-ios-search"></i></a>
                          </li>
                          <li>  <Link href='/wishlist'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                  className="ion-ios-heart-outline"></i></a>
                          </li>
                          <li>  <Link href='/products/product'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To Compare"><i className="ion-ios-reload"></i></a>
                          </li>
                          <li>  <Link href='/cart'></Link><a  data-bs-toggle="tooltip" data-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

  

 )
}

export default ShopList
