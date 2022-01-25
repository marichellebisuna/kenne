import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Link from 'next/link'
import Brands from '../components/Brands'


const wishlist = () => {
  
 return (
  <div>
    <Breadcrumb/>
    <div className="kenne-wishlist_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <form action="javascript:void(0)">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="kenne-product_remove">remove</th>
                                            <th className="kenne-product-thumbnail">images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="kenne-product-price">Unit Price</th>
                                            <th className="kenne-product-stock-status">Stock Status</th>
                                            <th className="kenne-cart_btn">add to cart</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="kenne-product_remove">
                                            <Link href="/products/product">
                                             <a ><i className="fa fa-trash"
                                                title="Remove"></i></a>
                                                </Link>
                                                </td>
                                            <td className="kenne-product-thumbnail">
                                            <Link href="/products/product">
                                             <a ><img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/small-size/1.jpg" alt="Kenne's Wishlist Thumbnail"/></a></Link>
                                            </td>
                                            <td className="kenne-product-name">
                                            <Link href="/products/product">
                                             <a >Juma rema pola</a></Link></td>
                                            <td className="kenne-product-price"><span className="amount">£23.39</span></td>
                                            <td className="kenne-product-stock-status"><span className="in-stock">in stock</span></td>
                                            <td className="kenne-cart_btn">     <Link href="/products/product"><a >add to cart</a></Link></td>
                                        </tr>
                                        <tr>
                                            <td className="kenne-product_remove">
                                            <Link href="/products/product">
                                             <a ><i className="fa fa-trash"
                                                title="Remove"></i></a></Link></td>
                                            <td className="kenne-product-thumbnail"> <Link href="/products/product"><a ><img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/small-size/2.jpg"/></a></Link>
                                            </td>
                                            <td className="kenne-product-name"> <Link href="/products/product"><a >Suretin mipen ruma</a></Link>
                                            </td>
                                            <td className="kenne-product-price"><span className="amount">£30.50</span></td>
                                            <td className="kenne-product-stock-status"><span className="in-stock">in stock</span></td>
                                            <td className="kenne-cart_btn"> <Link href="/products/product"><a >add to cart</a></Link></td>
                                        </tr>
                                        <tr>
                                            <td className="kenne-product_remove"> <Link href="/products/product"><a ><i className="fa fa-trash"
                                                title="Remove"></i></a></Link></td>
                                            <td className="kenne-product-thumbnail"> <Link href="/products/product"><a ><img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/small-size/3.jpg" alt="Kenne's Wishlist Thumbnail"/></a></Link>
                                            </td>
                                            <td className="kenne-product-name"> <Link href="/products/product"><a >Bag Goodscol model</a></Link>
                                            </td>
                                            <td className="kenne-product-price"><span className="amount">£40.19</span></td>
                                            <td className="kenne-product-stock-status"><span className="out-stock">out stock</span></td>
                                            <td className="kenne-cart_btn"> <Link href="/products/product"><a>add to cart</a></Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    <Brands/>
  </div>
 )
}

export default wishlist
