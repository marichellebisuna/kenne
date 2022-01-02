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
                                            <td className="kenne-product_remove"><a href="javascript:void(0)"><i className="fa fa-trash"
                                                title="Remove"></i></a></td>
                                            <td className="kenne-product-thumbnail"><a href="javascript:void(0)"><img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/small-size/1.jpg" alt="Kenne's Wishlist Thumbnail"/></a>
                                            </td>
                                            <td className="kenne-product-name"><a href="javascript:void(0)">Juma rema pola</a></td>
                                            <td className="kenne-product-price"><span className="amount">£23.39</span></td>
                                            <td className="kenne-product-stock-status"><span className="in-stock">in stock</span></td>
                                            <td className="kenne-cart_btn"><a href="javascript:void(0)">add to cart</a></td>
                                        </tr>
                                        <tr>
                                            <td className="kenne-product_remove"><a href="javascript:void(0)"><i className="fa fa-trash"
                                                title="Remove"></i></a></td>
                                            <td className="kenne-product-thumbnail"><a href="javascript:void(0)"><img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/small-size/2.jpg"/></a>
                                            </td>
                                            <td className="kenne-product-name"><a href="javascript:void(0)">Suretin mipen ruma</a>
                                            </td>
                                            <td className="kenne-product-price"><span className="amount">£30.50</span></td>
                                            <td className="kenne-product-stock-status"><span className="in-stock">in stock</span></td>
                                            <td className="kenne-cart_btn"><a href="javascript:void(0)">add to cart</a></td>
                                        </tr>
                                        <tr>
                                            <td className="kenne-product_remove"><a href="javascript:void(0)"><i className="fa fa-trash"
                                                title="Remove"></i></a></td>
                                            <td className="kenne-product-thumbnail"><a href="javascript:void(0)"><img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/small-size/3.jpg" alt="Kenne's Wishlist Thumbnail"/></a>
                                            </td>
                                            <td className="kenne-product-name"><a href="javascript:void(0)">Bag Goodscol model</a>
                                            </td>
                                            <td className="kenne-product-price"><span className="amount">£40.19</span></td>
                                            <td className="kenne-product-stock-status"><span className="out-stock">out stock</span></td>
                                            <td className="kenne-cart_btn"><a href="javascript:void(0)">add to cart</a></td>
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
