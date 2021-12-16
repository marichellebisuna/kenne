import React from 'react';

const Footer = () => {
  return (
    <div className='kenne-footer_area bg-smoke_color'>
      <div className='footer-top_area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='newsletter-area'>
                <div className='newsletter-logo'>
                  <a href='javascript:void(0)'>
                    <img src='assets/images/footer/logo/1.png' alt='Logo' />
                  </a>
                </div>
                <p className='short-desc'>
                  Subscribe to our newsleter, Enter your emil address
                </p>
                <div className='newsletter-form_wrap'>
                  <form
                    action='http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'
                    method='post'
                    id='mc-embedded-subscribe-form'
                    name='mc-embedded-subscribe-form'
                    className='newsletters-form validate'
                    target='_blank'
                    novalidate
                  >
                    <div id='mc_embed_signup_scroll'>
                      <div id='mc-form' className='mc-form subscribe-form'>
                        <input
                          id='mc-email'
                          className='newsletter-input'
                          type='email'
                          autocomplete='off'
                          placeholder='Enter email address'
                        />
                        <button className='newsletter-btn' id='mc-submit'>
                          <i className='ion-android-mail'></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-lg-6 offset-lg-1'>
              <div className='row footer-widgets_wrap'>
                <div className='col-lg-4 col-md-4 col-sm-4'>
                  <div className='footer-widgets_title'>
                    <h4>Shopping</h4>
                  </div>
                  <div className='footer-widgets'>
                    <ul>
                      <li>
                        <a href='javascript:void(0)'>Product</a>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>My Cart</a>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>Wishlist</a>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>Cart</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4'>
                  <div className='footer-widgets_title'>
                    <h4>Account</h4>
                  </div>
                  <div className='footer-widgets'>
                    <ul>
                      <li>
                        <a href='javascript:void(0)'>Login</a>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>Register</a>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>Help</a>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4'>
                  <div className='footer-widgets_title'>
                    <h4>Categories</h4>
                  </div>
                  <div className='footer-widgets'>
                    <ul>
                      <li>
                        <a href='javascript:void(0)'>Men</a>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>Women</a>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>Jeans</a>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>Shoes</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom_area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='copyright'>
                <span>
                  Copyright &copy; 2019 <a href='javascript:void(0)'>Kenne.</a>{' '}
                  All rights reserved.
                </span>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='payment'>
                <img
                  src='assets/images/footer/payment/1.png'
                  alt="Kenne's Payment Method"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
