import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
 return (
  <div className="col-lg-3 order-2 order-lg-1">
                        <div className="kenne-sidebar-catagories_area">
                            <div className="kenne-sidebar_categories">
                                <div className="kenne-categories_title first-child">
                                    <h5>Filter by price</h5>
                                </div>
                                <div className="price-filter">
                                    <div id="slider-range"></div>
                                    <div className="price-slider-amount">
                                        <div className="label-input">
                                            <label>price : </label>
                                            <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                            <button className="filter-btn">Filter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="kenne-sidebar_categories category-module">
                                <div className="kenne-categories_title">
                                    <h5>Product Categories</h5>
                                </div>
                                <div className="sidebar-categories_menu">
                                    <ul>
                                        <li className="has-sub"><a href="javascript:void(0)">Apparel<i className="ion-ios-plus-empty"></i></a>
                                            <ul>
                                                <li><Link href='products'><a>Maxime</a></Link></li>
                                                <li><a href="javascript:void(0)">Veniam Sed</a></li>
                                                <li><a href="javascript:void(0)">Praesentium</a></li>
                                                <li><a href="javascript:void(0)">Eligendi</a></li>
                                                <li><a href="javascript:void(0)">Maxime</a></li>
                                                <li><a href="javascript:void(0)">Ex deserunt</a></li>
                                                <li><a href="javascript:void(0)">Doloremque</a></li>
                                                <li><a href="javascript:void(0)">Facilis</a></li>
                                                <li><a href="javascript:void(0)">Cumque Magni</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:void(0)">Footwear</a></li>
                                        <li className="has-sub"><a href="javascript:void(0)">Sportswear <i className="ion-ios-plus-empty"></i></a>
                                            <ul>
                                                <li><a href="javascript:void(0)">Daylesford</a></li>
                                                <li><a href="javascript:void(0)">Delaware</a></li>
                                                <li><a href="javascript:void(0)">Fayence</a></li>
                                                <li><a href="javascript:void(0)">Mable</a></li>
                                                <li><a href="javascript:void(0)">Mobo</a></li>
                                                <li><a href="javascript:void(0)">Pippins</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:void(0)">Traditional</a></li>
                                        <li><a href="javascript:void(0)">Formal Wear</a></li>
                                        <li className="has-sub"><a href="javascript:void(0)">Accessories <i className="ion-ios-plus-empty"></i></a>
                                            <ul>
                                                <li><a href="javascript:void(0)">Bedroom Furniture</a></li>
                                                <li><a href="javascript:void(0)">Chairs</a></li>
                                                <li><a href="javascript:void(0)">Coffee Tables</a></li>
                                                <li><a href="javascript:void(0)">Console Tables</a></li>
                                                <li><a href="javascript:void(0)">End Tables</a></li>
                                                <li><a href="javascript:void(0)">Living Room Sets</a></li>
                                                <li><a href="javascript:void(0)">Ottomans & Storage Ottomans</a></li>
                                                <li><a href="javascript:void(0)">Sofas & Couches</a></li>
                                                <li><a href="javascript:void(0)">TV Stands</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-sub"><a href="javascript:void(0)">Watches & Jewelry <i className="ion-ios-plus-empty"></i></a>
                                            <ul>
                                                <li><a href="javascript:void(0)">Candleholders</a></li>
                                                <li><a href="javascript:void(0)">Candles</a></li>
                                                <li><a href="javascript:void(0)">Clocks</a></li>
                                                <li><a href="javascript:void(0)">Floor Mirrors</a></li>
                                                <li><a href="javascript:void(0)">Lamps & Lighting</a></li>
                                                <li><a href="javascript:void(0)">Rugs</a></li>
                                                <li><a href="javascript:void(0)">Runners</a></li>
                                                <li><a href="javascript:void(0)">Wall Decor</a></li>
                                                <li><a href="javascript:void(0)">Wall Mirrors</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-sub"><a href="javascript:void(0)">Luggage <i className="ion-ios-plus-empty"></i></a>
                                            <ul>
                                                <li><a href="javascript:void(0)">Bowls</a></li>
                                                <li><a href="javascript:void(0)">Cups, Mugs & Saucers</a></li>
                                                <li><a href="javascript:void(0)">Cutting Boards</a></li>
                                                <li><a href="javascript:void(0)">Dinnerware Sets</a></li>
                                                <li><a href="javascript:void(0)">Flatware</a></li>
                                                <li><a href="javascript:void(0)">Glassware & Drinkware</a></li>
                                                <li><a href="javascript:void(0)">Knife Sets</a></li>
                                                <li><a href="javascript:void(0)">Plates</a></li>
                                                <li><a href="javascript:void(0)">Serveware</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-sub"><a href="javascript:void(0)">Handbag <i className="ion-ios-plus-empty"></i></a>
                                            <ul>
                                                <li><a href="javascript:void(0)">Coffee & side tables</a></li>
                                                <li><a href="javascript:void(0)">Living room lighting</a></li>
                                                <li><a href="javascript:void(0)">Living room storage</a></li>
                                                <li><a href="javascript:void(0)">Living room textiles & rugs</a></li>
                                                <li><a href="javascript:void(0)">Sofas & armchairs</a></li>
                                                <li><a href="javascript:void(0)">TV & media furniture</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:void(0)">Cosmetic</a></li>
                                        <li><a href="javascript:void(0)">Uncategorized</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="kenne-sidebar_categories">
                                <div className="kenne-categories_title">
                                    <h5>Color</h5>
                                </div>
                                <ul className="sidebar-checkbox_list">
                                    <li>
                                        <a href="javascript:void(0)">Black (1)</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Blue (1)</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Gold (3)</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="kenne-sidebar_categories list-product_area">
                                <div className="kenne-categories_title">
                                    <h5>Recent Post</h5>
                                </div>
                                <div className="kenne-element-carousel list-product_slider list-product_slider-2 slider-nav" data-slick-options='{
                                "slidesToShow": 1,
                                "slidesToScroll": 1,
                                "infinite": false,
                                "arrows": false,
                                "dots": false,
                                "spaceBetween": 30,
                                "rows" : 2
                                }' data-slick-responsive='[
                                {"breakpoint":992, "settings": {
                                "slidesToShow": 2
                                }},
                                {"breakpoint":576, "settings": {
                                "slidesToShow": 1
                                }}
                            ]'>

                                    <div className="product-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/1-1.jpg" alt="Kenne's Product Image"/>
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <span className="manufacture-product">hoodie, jacket</span>
                                                    <h3 className="product-name"><a href="single-product.html">Quibusdam
                                                            ratione</a>
                                                    </h3>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.91</span>
                                                        <span className="old-price">$50.99</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/2-1.jpg" alt="Kenne's Product Image"/>
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <span className="manufacture-product">sleeveless, frocks</span>
                                                    <h3 className="product-name"><a href="single-product.html">Quibusdam
                                                            ratione</a>
                                                    </h3>
                                                    <div className="price-box">
                                                        <span className="new-price">$50.00</span>
                                                        <span className="old-price">$65.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/3-1.jpg" alt="Kenne's Product Image"/>
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <span className="manufacture-product">crochet, scarf</span>
                                                    <h3 className="product-name"><a href="single-product.html">Quibusdam
                                                            ratione</a>
                                                    </h3>
                                                    <div className="price-box">
                                                        <span className="new-price">$80.00</span>
                                                        <span className="old-price">$85.0</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/4-1.jpg" alt="Kenne's Product Image"/>
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <span className="manufacture-product">shirts, t-shirt</span>
                                                    <h3 className="product-name"><a href="single-product.html">Quibusdam
                                                            ratione</a>
                                                    </h3>
                                                    <div className="price-box">
                                                        <span className="new-price">$75.91</span>
                                                        <span className="old-price">$80.99</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/2-1.jpg" alt="Kenne's Product Image"/>
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <span className="manufacture-product">sleeveless, frocks</span>
                                                    <h3 className="product-name"><a href="single-product.html">Quibusdam
                                                            ratione</a>
                                                    </h3>
                                                    <div className="price-box">
                                                        <span className="new-price">$50.00</span>
                                                        <span className="old-price">$65.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/3-1.jpg" alt="Kenne's Product Image"/>
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <span className="manufacture-product">crochet, scarf</span>
                                                    <h3 className="product-name"><a href="single-product.html">Quibusdam
                                                            ratione</a>
                                                    </h3>
                                                    <div className="price-box">
                                                        <span className="new-price">$80.00</span>
                                                        <span className="old-price">$85.0</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/1-1.jpg" alt="Kenne's Product Image"/>
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <span className="manufacture-product">hoodie, jacket</span>
                                                    <h3 className="product-name"><a href="single-product.html">Quibusdam
                                                            ratione</a>
                                                    </h3>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.91</span>
                                                        <span className="old-price">$50.99</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/2-1.jpg" alt="Kenne's Product Image"/>
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <span className="manufacture-product">sleeveless, frocks</span>
                                                    <h3 className="product-name"><a href="single-product.html">Quibusdam
                                                            ratione</a>
                                                    </h3>
                                                    <div className="price-box">
                                                        <span className="new-price">$50.00</span>
                                                        <span className="old-price">$65.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="kenne-sidebar_categories">
                                <div className="kenne-categories_title kenne-tags_title">
                                    <h5>Product Tags</h5>
                                </div>
                                <ul className="kenne-tags_list">
                                    <li><a href="javascript:void(0)">Hoodie</a></li>
                                    <li><a href="javascript:void(0)">Jacket</a></li>
                                    <li><a href="javascript:void(0)">Frocks</a></li>
                                    <li><a href="javascript:void(0)">Crochet</a></li>
                                    <li><a href="javascript:void(0)">Scarf</a></li>
                                    <li><a href="javascript:void(0)">Shirts</a></li>
                                    <li><a href="javascript:void(0)">Men</a></li>
                                    <li><a href="javascript:void(0)">Women</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
 )
}

export default Sidebar
