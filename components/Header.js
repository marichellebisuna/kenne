import React from 'react';

const Header = () => {
  return (
    <header className='main-header_area'>
      <div className='transparent-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='transparent-header_nav position-relative'>
                <div className='header-logo_area'>
                  <a href='index.html'>
                    <img
                      src='assets/images/menu/logo/1.png'
                      alt='Header Logo'
                    />
                  </a>
                </div>
                <div className='main-menu_area d-none d-lg-block'>
                  <nav className='main-nav d-flex justify-content-center'>
                    <ul>
                      <li className='dropdown-holder'>
                        <a href='javascript:void(0)'>
                          Home <i className='ion-chevron-down'></i>
                        </a>
                        <ul className='kenne-dropdown'>
                          <li>
                            <a href='index.html'>Home One</a>
                          </li>
                          <li>
                            <a href='index-2.html'>Home Two</a>
                          </li>
                          <li>
                            <a href='index-3.html'>Home Three</a>
                          </li>
                        </ul>
                      </li>
                      <li className='megamenu-holder position-static'>
                        <a href='shop-left-sidebar.html'>
                          Shop <i className='ion-chevron-down'></i>
                        </a>
                        <ul className='kenne-megamenu'>
                          <li>
                            <span className='megamenu-title'>
                              Shop Page Layout
                            </span>
                            <ul>
                              <li>
                                <a href='shop-fullwidth.html'>Grid Fullwidth</a>
                              </li>
                              <li>
                                <a href='shop-left-sidebar.html'>
                                  Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href='shop-right-sidebar.html'>
                                  Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href='shop-list-fullwidth.html'>
                                  List Fullwidth
                                </a>
                              </li>
                              <li>
                                <a href='shop-list-left-sidebar.html'>
                                  List Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href='shop-list-right-sidebar.html'>
                                  List Right Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className='megamenu-title'>
                              Single Product Style
                            </span>
                            <ul>
                              <li>
                                <a href='single-product-gallery-left.html'>
                                  Gallery Left
                                </a>
                              </li>
                              <li>
                                <a href='single-product-gallery-right.html'>
                                  Gallery Right
                                </a>
                              </li>
                              <li>
                                <a href='single-product-tab-style-left.html'>
                                  Tab Style Left
                                </a>
                              </li>
                              <li>
                                <a href='single-product-tab-style-right.html'>
                                  Tab Style Right
                                </a>
                              </li>
                              <li>
                                <a href='single-product-sticky-left.html'>
                                  Sticky Left
                                </a>
                              </li>
                              <li>
                                <a href='single-product-sticky-right.html'>
                                  Sticky Right
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className='megamenu-title'>
                              Single Product Type
                            </span>
                            <ul>
                              <li>
                                <a href='single-product.html'>Single Product</a>
                              </li>
                              <li>
                                <a href='single-product-sale.html'>
                                  Single Product Sale
                                </a>
                              </li>
                              <li>
                                <a href='single-product-group.html'>
                                  Single Product Group
                                </a>
                              </li>
                              <li>
                                <a href='single-product-variable.html'>
                                  Single Product Variable
                                </a>
                              </li>
                              <li>
                                <a href='single-product-affiliate.html'>
                                  Single Product Affiliate
                                </a>
                              </li>
                              <li>
                                <a href='single-product-slider.html'>
                                  Single Product Slider
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className='megamenu-title'>
                              Shop Related Pages
                            </span>
                            <ul>
                              <li>
                                <a href='my-account.html'>My Account</a>
                              </li>
                              <li>
                                <a href='login-register.html'>
                                  Login | Register
                                </a>
                              </li>
                              <li>
                                <a href='wishlist.html'>Wishlist</a>
                              </li>
                              <li>
                                <a href='cart.html'>Cart</a>
                              </li>
                              <li>
                                <a href='checkout.html'>Checkout</a>
                              </li>
                              <li>
                                <a href='compare.html'>Compare</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>
                          Pages <i className='ion-chevron-down'></i>
                        </a>
                        <ul className='kenne-dropdown'>
                          <li>
                            <a href='coming-soon_page.html'>Coming Soon</a>
                          </li>
                          <li>
                            <a href='404.html'>Error 404</a>
                          </li>
                          <li>
                            <a href='faq.html'>FAQ</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>
                          Blog <i className='ion-chevron-down'></i>
                        </a>
                        <ul className='kenne-dropdown'>
                          <li>
                            <a href='blog-grid_view.html'>Grid View</a>
                          </li>
                          <li>
                            <a href='blog-list_view.html'>List View</a>
                          </li>
                          <li>
                            <a href='blog-details.html'>Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='contact-us.html'>Contact Us</a>
                      </li>
                      <li>
                        <a href='about-us.html'>About Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='header-right_area header-right_area-2'>
                  <ul>
                    <li className='mobile-menu_wrap d-inline-block d-lg-none'>
                      <a
                        href='#mobileMenu'
                        className='mobile-menu_btn toolbar-btn color--white'
                      >
                        <i className='ion-android-menu'></i>
                      </a>
                    </li>
                    <li className='minicart-wrap'>
                      <a href='#miniCart' className='minicart-btn toolbar-btn'>
                        <div className='minicart-count_area'>
                          <span className='item-count'>03</span>
                          <i className='ion-bag'></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href='#searchBar' className='search-btn toolbar-btn'>
                        <i className='ion-ios-search'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#offcanvasMenu'
                        className='menu-btn toolbar-btn color--white d-none d-lg-block'
                      >
                        <i className='ion-android-menu'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-sticky'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='sticky-header_nav position-relative'>
                <div className='row align-items-center justify-content-between'>
                  <div className='col-lg-2 col-sm-6'>
                    <div className='header-logo_area'>
                      <a href='index.html'>
                        <img
                          src='assets/images/menu/logo/1.png'
                          alt='Header Logo'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-7 d-none d-lg-block position-static'>
                    <div className='main-menu_area'>
                      <nav className='main-nav d-flex justify-content-center'>
                        <ul>
                          <li className='dropdown-holder'>
                            <a href='javascript:void(0)'>
                              Home <i className='ion-chevron-down'></i>
                            </a>
                            <ul className='kenne-dropdown'>
                              <li>
                                <a href='index.html'>Home One</a>
                              </li>
                              <li>
                                <a href='index-2.html'>Home Two</a>
                              </li>
                              <li>
                                <a href='index-3.html'>Home Three</a>
                              </li>
                            </ul>
                          </li>
                          <li className='megamenu-holder position-static'>
                            <a href='shop-left-sidebar.html'>
                              Shop <i className='ion-chevron-down'></i>
                            </a>
                            <ul className='kenne-megamenu'>
                              <li>
                                <span className='megamenu-title'>
                                  Shop Page Layout
                                </span>
                                <ul>
                                  <li>
                                    <a href='shop-fullwidth.html'>
                                      Grid Fullwidth
                                    </a>
                                  </li>
                                  <li>
                                    <a href='shop-left-sidebar.html'>
                                      Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href='shop-right-sidebar.html'>
                                      Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href='shop-list-fullwidth.html'>
                                      List Fullwidth
                                    </a>
                                  </li>
                                  <li>
                                    <a href='shop-list-left-sidebar.html'>
                                      List Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href='shop-list-right-sidebar.html'>
                                      List Right Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span className='megamenu-title'>
                                  Single Product Style
                                </span>
                                <ul>
                                  <li>
                                    <a href='single-product-gallery-left.html'>
                                      Gallery Left
                                    </a>
                                  </li>
                                  <li>
                                    <a href='single-product-gallery-right.html'>
                                      Gallery Right
                                    </a>
                                  </li>
                                  <li>
                                    <a href='single-product-tab-style-left.html'>
                                      Tab Style Left
                                    </a>
                                  </li>
                                  <li>
                                    <a href='single-product-tab-style-right.html'>
                                      Tab Style Right
                                    </a>
                                  </li>
                                  <li>
                                    <a href='single-product-sticky-left.html'>
                                      Sticky Left
                                    </a>
                                  </li>
                                  <li>
                                    <a href='single-product-sticky-right.html'>
                                      Sticky Right
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span className='megamenu-title'>
                                  Single Product Type
                                </span>
                                <ul>
                                  <li>
                                    <a href='single-product.html'>
                                      Single Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href='single-product-sale.html'>
                                      Single Product Sale
                                    </a>
                                  </li>
                                  <li>
                                    <a href='single-product-group.html'>
                                      Single Product Group
                                    </a>
                                  </li>
                                  <li>
                                    <a href='single-product-variable.html'>
                                      Single Product Variable
                                    </a>
                                  </li>
                                  <li>
                                    <a href='single-product-affiliate.html'>
                                      Single Product Affiliate
                                    </a>
                                  </li>
                                  <li>
                                    <a href='single-product-slider.html'>
                                      Single Product Slider
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span className='megamenu-title'>
                                  Shop Related Pages
                                </span>
                                <ul>
                                  <li>
                                    <a href='my-account.html'>My Account</a>
                                  </li>
                                  <li>
                                    <a href='login-register.html'>
                                      Login | Register
                                    </a>
                                  </li>
                                  <li>
                                    <a href='wishlist.html'>Wishlist</a>
                                  </li>
                                  <li>
                                    <a href='cart.html'>Cart</a>
                                  </li>
                                  <li>
                                    <a href='checkout.html'>Checkout</a>
                                  </li>
                                  <li>
                                    <a href='compare.html'>Compare</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Pages <i className='ion-chevron-down'></i>
                            </a>
                            <ul className='kenne-dropdown'>
                              <li>
                                <a href='coming-soon_page.html'>Coming Soon</a>
                              </li>
                              <li>
                                <a href='404.html'>Error 404</a>
                              </li>
                              <li>
                                <a href='faq.html'>FAQ</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              Blog <i className='ion-chevron-down'></i>
                            </a>
                            <ul className='kenne-dropdown'>
                              <li>
                                <a href='blog-grid_view.html'>Grid View</a>
                              </li>
                              <li>
                                <a href='blog-list_view.html'>List View</a>
                              </li>
                              <li>
                                <a href='blog-details.html'>Blog Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='contact-us.html'>Contact Us</a>
                          </li>
                          <li>
                            <a href='about-us.html'>About Us</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-6'>
                    <div className='header-right_area header-right_area-2'>
                      <ul>
                        <li className='mobile-menu_wrap d-inline-block d-lg-none'>
                          <a
                            href='#mobileMenu'
                            className='mobile-menu_btn toolbar-btn color--white'
                          >
                            <i className='ion-android-menu'></i>
                          </a>
                        </li>
                        <li className='minicart-wrap'>
                          <a
                            href='#miniCart'
                            className='minicart-btn toolbar-btn'
                          >
                            <div className='minicart-count_area'>
                              <span className='item-count'>03</span>
                              <i className='ion-bag'></i>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href='#searchBar'
                            className='search-btn toolbar-btn'
                          >
                            <i className='ion-ios-search'></i>
                          </a>
                        </li>
                        <li className='d-none d-lg-inline-block'>
                          <a
                            href='#offcanvasMenu'
                            className='menu-btn toolbar-btn color--white'
                          >
                            <i className='ion-android-menu'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='offcanvas-minicart_wrapper' id='miniCart'>
        <div className='offcanvas-menu-inner'>
          <a href='#' className='btn-close'>
            <i className='ion-android-close'></i>
          </a>
          <div className='minicart-content'>
            <div className='minicart-heading'>
              <h4>Shopping Cart</h4>
            </div>
            <ul className='minicart-list'>
              <li className='minicart-product'>
                <a className='product-item_remove' href='javascript:void(0)'>
                  <i className='ion-android-close'></i>
                </a>
                <div className='product-item_img'>
                  <img
                    src='assets/images/product/1-1.jpg'
                    alt="Kenne's Product Image"
                  />
                </div>
                <div className='product-item_content'>
                  <a
                    className='product-item_title'
                    href='shop-left-sidebar.html'
                  >
                    Autem ipsa ad
                  </a>
                  <span className='product-item_quantity'>1 x $145.80</span>
                </div>
              </li>
              <li className='minicart-product'>
                <a className='product-item_remove' href='javascript:void(0)'>
                  <i className='ion-android-close'></i>
                </a>
                <div className='product-item_img'>
                  <img
                    src='assets/images/product/2-1.jpg'
                    alt="Kenne's Product Image"
                  />
                </div>
                <div className='product-item_content'>
                  <a
                    className='product-item_title'
                    href='shop-left-sidebar.html'
                  >
                    Tenetur illum amet
                  </a>
                  <span className='product-item_quantity'>1 x $150.80</span>
                </div>
              </li>
              <li className='minicart-product'>
                <a className='product-item_remove' href='javascript:void(0)'>
                  <i className='ion-android-close'></i>
                </a>
                <div className='product-item_img'>
                  <img
                    src='assets/images/product/3-1.jpg'
                    alt="Kenne's Product Image"
                  />
                </div>
                <div className='product-item_content'>
                  <a
                    className='product-item_title'
                    href='shop-left-sidebar.html'
                  >
                    Non doloremque placeat
                  </a>
                  <span className='product-item_quantity'>1 x $165.80</span>
                </div>
              </li>
            </ul>
          </div>
          <div className='minicart-item_total'>
            <span>Subtotal</span>
            <span className='ammount'>$462.4‬0</span>
          </div>
          <div className='minicart-btn_area'>
            <a href='cart.html' className='kenne-btn kenne-btn_fullwidth'>
              Minicart
            </a>
          </div>
          <div className='minicart-btn_area'>
            <a href='checkout.html' className='kenne-btn kenne-btn_fullwidth'>
              Checkout
            </a>
          </div>
        </div>
      </div>
      <div className='mobile-menu_wrapper' id='mobileMenu'>
        <div className='offcanvas-menu-inner'>
          <div className='container'>
            <a href='#' className='btn-close white-close_btn'>
              <i className='ion-android-close'></i>
            </a>
            <div className='offcanvas-inner_logo'>
              <a href='index.html'>
                <img src='assets/images/menu/logo/1.png' alt='Header Logo' />
              </a>
            </div>
            <nav className='offcanvas-navigation'>
              <ul className='mobile-menu'>
                <li className='menu-item-has-children active'>
                  <a href='#'>
                    <span className='mm-text'>Home</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='index.html'>
                        <span className='mm-text'>Home One</span>
                      </a>
                    </li>
                    <li>
                      <a href='index-2.html'>
                        <span className='mm-text'>Home Two</span>
                      </a>
                    </li>
                    <li>
                      <a href='index-3.html'>
                        <span className='mm-text'>Home Three</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='#'>
                    <span className='mm-text'>Shop</span>
                  </a>
                  <ul className='sub-menu'>
                    <li className='menu-item-has-children'>
                      <a href='#'>
                        <span className='mm-text'>Grid View</span>
                      </a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='shop-fullwidth.html'>
                            <span className='mm-text'>Grid Fullwidth</span>
                          </a>
                        </li>
                        <li>
                          <a href='shop-left-sidebar.html'>
                            <span className='mm-text'>Left Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href='shop-right-sidebar.html'>
                            <span className='mm-text'>Right Sidebar</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <a href='#'>
                        <span className='mm-text'>Shop List</span>
                      </a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='shop-list-fullwidth.html'>
                            <span className='mm-text'>Full Width</span>
                          </a>
                        </li>
                        <li>
                          <a href='shop-list-left-sidebar.html'>
                            <span className='mm-text'>Left Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href='shop-list-right-sidebar.html'>
                            <span className='mm-text'>Right Sidebar</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <a href='#'>
                        <span className='mm-text'>Single Product Style</span>
                      </a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='single-product-gallery-left.html'>
                            <span className='mm-text'>Gallery Left</span>
                          </a>
                        </li>
                        <li>
                          <a href='single-product-gallery-right.html'>
                            <span className='mm-text'>Gallery Right</span>
                          </a>
                        </li>
                        <li>
                          <a href='single-product-tab-style-left.html'>
                            <span className='mm-text'>Tab Style Left</span>
                          </a>
                        </li>
                        <li>
                          <a href='single-product-tab-style-right.html'>
                            <span className='mm-text'>Tab Style Right</span>
                          </a>
                        </li>
                        <li>
                          <a href='single-product-sticky-left.html'>
                            <span className='mm-text'>Sticky Left</span>
                          </a>
                        </li>
                        <li>
                          <a href='single-product-sticky-right.html'>
                            <span className='mm-text'>Sticky Right</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <a href='#'>
                        <span className='mm-text'>Single Product Type</span>
                      </a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='single-product.html'>
                            <span className='mm-text'>Single Product</span>
                          </a>
                        </li>
                        <li>
                          <a href='single-product-sale.html'>
                            <span className='mm-text'>Single Product Sale</span>
                          </a>
                        </li>
                        <li>
                          <a href='single-product-group.html'>
                            <span className='mm-text'>
                              Single Product Group
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href='single-product-variable.html'>
                            <span className='mm-text'>
                              Single Product Variable
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href='single-product-affiliate.html'>
                            <span className='mm-text'>
                              Single Product Affiliate
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href='single-product-slider.html'>
                            <span className='mm-text'>
                              Single Product Slider
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='#'>
                    <span className='mm-text'>Blog</span>
                  </a>
                  <ul className='sub-menu'>
                    <li className='menu-item-has-children has-children'>
                      <a href='blog-grid_view.html'>
                        <span className='mm-text'>Grid View</span>
                      </a>
                    </li>
                    <li className='menu-item-has-children has-children'>
                      <a href='blog-list_view.html'>
                        <span className='mm-text'>List View</span>
                      </a>
                    </li>
                    <li className='menu-item-has-children has-children'>
                      <a href='blog-details.html'>
                        <span className='mm-text'>Blog Details</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='#'>
                    <span className='mm-text'>Pages</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='my-account.html'>
                        <span className='mm-text'>About Us</span>
                      </a>
                    </li>
                    <li>
                      <a href='my-account.html'>
                        <span className='mm-text'>Contact</span>
                      </a>
                    </li>
                    <li>
                      <a href='my-account.html'>
                        <span className='mm-text'>My Account</span>
                      </a>
                    </li>
                    <li>
                      <a href='login-register.html'>
                        <span className='mm-text'>Login | Register</span>
                      </a>
                    </li>
                    <li>
                      <a href='wishlist.html'>
                        <span className='mm-text'>Wishlist</span>
                      </a>
                    </li>
                    <li>
                      <a href='cart.html'>
                        <span className='mm-text'>Cart</span>
                      </a>
                    </li>
                    <li>
                      <a href='checkout.html'>
                        <span className='mm-text'>Checkout</span>
                      </a>
                    </li>
                    <li>
                      <a href='compare.html'>
                        <span className='mm-text'>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href='faq.html'>
                        <span className='mm-text'>FAQ</span>
                      </a>
                    </li>
                    <li>
                      <a href='404.html'>
                        <span className='mm-text'>Error 404</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <nav className='offcanvas-navigation user-setting_area'>
              <ul className='mobile-menu'>
                <li className='menu-item-has-children active'>
                  <a href='#'>
                    <span className='mm-text'>User Setting</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='my-account.html'>
                        <span className='mm-text'>My Account</span>
                      </a>
                    </li>
                    <li>
                      <a href='login-register.html'>
                        <span className='mm-text'>Login | Register</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='#'>
                    <span className='mm-text'>Currency</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='javascript:void(0)'>
                        <span className='mm-text'>EUR €</span>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <span className='mm-text'>USD $</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='#'>
                    <span className='mm-text'>Language</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='javascript:void(0)'>
                        <span className='mm-text'>English</span>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <span className='mm-text'>Français</span>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <span className='mm-text'>Romanian</span>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <span className='mm-text'>Japanese</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className='offcanvas-menu_wrapper' id='offcanvasMenu'>
        <div className='offcanvas-menu-inner'>
          <a href='#' className='btn-close'>
            <i className='ion-android-close'></i>
          </a>
          <div className='offcanvas-inner_logo'>
            <a href='shop-left-sidebar.html'>
              <img
                src='assets/images/menu/logo/1.png'
                alt="Munoz's Offcanvas Logo"
              />
            </a>
          </div>
          <div className='short-desc'>
            <p>
              We are a team of designers and developers that create high quality
              HTML Template & Woocommerce, Shopify Themes.
            </p>
          </div>
          <div className='offcanvas-component first-child'>
            <span className='offcanvas-component_title'>Currency</span>
            <ul className='offcanvas-component_menu'>
              <li>
                <a href='javascript:void(0)'>EUR</a>
              </li>
              <li>
                <a href='javascript:void(0)'>GBP</a>
              </li>
              <li className='active'>
                <a href='javascript:void(0)'>USD</a>
              </li>
            </ul>
          </div>
          <div className='offcanvas-component'>
            <span className='offcanvas-component_title'>Language</span>
            <ul className='offcanvas-component_menu'>
              <li className='active'>
                <a href='javascript:void(0)'>English</a>
              </li>
              <li>
                <a href='javascript:void(0)'>French</a>
              </li>
            </ul>
          </div>
          <div className='offcanvas-component'>
            <span className='offcanvas-component_title'>My Account</span>
            <ul className='offcanvas-component_menu'>
              <li>
                <a href='my-account.html'>Register</a>
              </li>
              <li>
                <a href='login-register.html'>Login</a>
              </li>
            </ul>
          </div>
          <div className='offcanvas-inner-social_link'>
            <div className='kenne-social_link'>
              <ul>
                <li className='facebook'>
                  <a
                    href='https://www.facebook.com'
                    data-bs-toggle='tooltip'
                    target='_blank'
                    title='Facebook'
                  >
                    <i className='fab fa-facebook'></i>
                  </a>
                </li>
                <li className='twitter'>
                  <a
                    href='https://twitter.com'
                    data-bs-toggle='tooltip'
                    target='_blank'
                    title='Twitter'
                  >
                    <i className='fab fa-twitter-square'></i>
                  </a>
                </li>
                <li className='youtube'>
                  <a
                    href='https://www.youtube.com'
                    data-bs-toggle='tooltip'
                    target='_blank'
                    title='Youtube'
                  >
                    <i className='fab fa-youtube'></i>
                  </a>
                </li>
                <li className='google-plus'>
                  <a
                    href='https://www.plus.google.com/discover'
                    data-bs-toggle='tooltip'
                    target='_blank'
                    title='Google Plus'
                  >
                    <i className='fab fa-google-plus'></i>
                  </a>
                </li>
                <li className='instagram'>
                  <a
                    href='https://rss.com'
                    data-bs-toggle='tooltip'
                    target='_blank'
                    title='Instagram'
                  >
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='offcanvas-search_wrapper' id='searchBar'>
        <div className='offcanvas-menu-inner'>
          <div className='container'>
            <a href='#' className='btn-close'>
              <i className='ion-android-close'></i>
            </a>
            {/* <!-- Begin Offcanvas Search Area --> */}
            <div className='offcanvas-search'>
              <form action='#' className='hm-searchbox'>
                <input type='text' placeholder='Search for item...' />
                <button className='search_btn' type='submit'>
                  <i className='ion-ios-search-strong'></i>
                </button>
              </form>
            </div>
            {/* <!-- Offcanvas Search Area End Here --> */}
          </div>
        </div>
      </div>
      <div className='global-overlay'></div>
    </header>
  );
};

export default Header;
