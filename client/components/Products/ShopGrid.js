import React from 'react';
import Link from 'next/link';
import products from '../../utils/products';

const ShopGrid = () => {
 return (
<div className="shop-product-wrap grid gridview-3 row">
     {products.map((product)=>(
     
     <div className="col-lg-4 col-md-4 col-sm-6" key={product.name}>
         
         <div className="product-item" >
            <div className="single-product">
                <div className="product-img">
                    <Link href={`/products/${product.name}`} passHref>
                        <a> 
                            <img className="primary-img" src={product.image[0]} alt="Kenne's Product Image"/>
                            <img className="secondary-img" src={product.image[1]} alt="Kenne's Product Image"/>
                        </a>
                    </Link>
                    <span className="sticker">-15%</span>
                    <div className="add-actions">
                        <ul>
                            <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  
                                <Link href={`/products/${product.name}`}>
                                    <a data-bs-toggle="tooltip" data-placement="right" title="Quick View">
                                        <i className="ion-ios-search"></i>
                                    </a>
                                </Link>
                            </li>
                            <li>  
                                <Link href='/wishlist'>
                                    <a data-bs-toggle="tooltip" data-placement="right" title="Add To Wishlist">
                                        <i className="ion-ios-heart-outline"></i>
                                    </a>
                                </Link>
                            </li>                            
                            <li>  
                                <Link href='/cart'>
                                    <a data-bs-toggle="tooltip" data-placement="right" title="Add To cart">
                                        <i className="ion-bag"></i>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-content">
                    <div className="product-desc_info">
                        <h3 className="product-name">  
                        <Link href={`/products/${product.name}`}>
                            <a>{product.name}</a>
                        </Link>
                        </h3>
                        <div className="price-box">
                            <span className="new-price">${product.price}</span>
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
                    <Link href={`/products/${product.name}`}>
                        <a>
                            <img src={product.image[0]} alt="Kenne's Product Image"/>
                        </a>
                    </Link>
                </div>
                <div className="product-content">
                    <div className="product-desc_info">
                        <div className="price-box">
                            <span className="new-price">${product.price}</span>
                            <span className="old-price">$50.99</span>
                        </div>
                        <h6 className="product-name">  
                            <Link href={`/products/${product.name}`}>
                                <a>{product.name}</a>
                            </Link></h6>
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
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="add-actions">
                        <ul>
                            <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">  <Link href='/products/product'>
                                <a data-bs-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="ion-ios-search"></i>
                                </a>
                            </Link>
                            </li>
                            <li>  
                            <Link href='/wishlist'>
                                <a data-bs-toggle="tooltip" data-placement="top" title="Add To Wishlist">
                                    <i className="ion-ios-heart-outline"></i>
                                </a>
                            </Link>
                            </li>
                         
                            <li>  
                                <Link href='/cart'>
                                    <a data-bs-toggle="tooltip" data-placement="top" title="Add To cart">
                                        <i className="ion-bag"></i>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
        
       
    </div>  
    ))} 

</div>
  )
}

export default ShopGrid
