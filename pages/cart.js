import React from 'react'
import BreadCrumb from '../components/Breadcrumb'
import Brands from '../components/Brands'

const cart = () => {
 return (
  <div>
   <BreadCrumb/>
   <div className="kenne-cart-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="kenne-product-remove">remove</th>
                                            <th className="kenne-product-thumbnail">images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="kenne-product-price">Unit Price</th>
                                            <th className="kenne-product-quantity">Quantity</th>
                                            <th className="kenne-product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="kenne-product-remove"><a href=""><i className="fa fa-trash"
                                                title="Remove"></i></a></td>
                                            <td className="kenne-product-thumbnail"><a href=""><img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/small-size/1.jpg" alt="Uren's Cart Thumbnail"/></a></td>
                                            <td className="kenne-product-name"><a href="">Juma rema pola</a></td>
                                            <td className="kenne-product-price"><span className="amount">$46.80</span></td>
                                            <td className="quantity">
                                                <label>Quantity</label>
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="1" type="text"/>
                                                    <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                    <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                </div>
                                            </td>
                                            <td className="product-subtotal"><span className="amount">$46.80</span></td>
                                        </tr>
                                        <tr>
                                            <td className="kenne-product-remove"><a href=""><i className="fa fa-trash"
                                                title="Remove"></i></a></td>
                                            <td className="kenne-product-thumbnail"><a href=""><img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/small-size/2.jpg" alt="Uren's Cart Thumbnail"/></a></td>
                                            <td className="kenne-product-name"><a href="">Bag Goodscol model</a>
                                            </td>
                                            <td className="kenne-product-price"><span className="amount">$71.80</span></td>
                                            <td className="quantity">
                                                <label>Quantity</label>
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="1" type="text"/>
                                                    <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                    <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                </div>
                                            </td>
                                            <td className="product-subtotal"><span className="amount">$71.80</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row ">
                                <div className="col-12">
                                    <div className="coupon-all">
                                        <div className="coupon">
                                            <input id="coupon_code" className="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text"/>
                                            <input className="button" name="apply_coupon" value="Apply coupon" type="submit"/>
                                        </div>
                                        <div className="coupon2">
                                            <input className="button" name="update_cart" value="Update cart" type="submit"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </form>
                    </div>
                    <div className="col-12">
                       
                            <div className="col-md-5  ml-auto float-end">
                                <div className="cart-page-total">
                                    <h2>Cart totals</h2>
                                    <ul>
                                        <li>Subtotal <span>$118.60</span></li>
                                        <li>Total <span>$118.60</span></li>
                                    </ul>
                                    <a href="">Proceed to checkout</a>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
   <Brands/>
  </div>
 )
}

export default cart
