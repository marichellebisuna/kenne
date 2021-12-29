import React from 'react'
import Brands from '../components/Brands'
import Breadcrumb from '../components/Breadcrumb'
import Billing from '../components/Checkout/Billing'
import OrderSummary from '../components/Checkout/OrderSummary'

const checkout = () => {
 return (
  <div>
   <Breadcrumb/>
   <div class="checkout-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="coupon-accordion">
                            <h3>Returning customer? <span id="showlogin">Click here to login</span></h3>
                            <div id="checkout-login" class="coupon-content">
                                <div class="coupon-info">
                                    <p class="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est
                                        sit amet ipsum luctus.</p>
                                    <form action="javascript:void(0)">
                                        <p class="form-row-first">
                                            <label>Username or email <span class="required">*</span></label>
                                            <input type="text"/>
                                        </p>
                                        <p class="form-row-last">
                                            <label>Password <span class="required">*</span></label>
                                            <input type="text"/>
                                        </p>
                                        <p class="form-row">
                                            <input value="Login" type="submit"/>
                                            <label>
                                                <input type="checkbox"/>
                                                Remember me
                                            </label>
                                        </p>
                                        <p class="lost-password"><a href="javascript:void(0)">Lost your password?</a></p>
                                    </form>
                                </div>
                            </div>
                            <h3>Have a coupon? <span id="showcoupon">Click here to enter your code</span></h3>
                            <div id="checkout_coupon" class="coupon-checkout-content">
                                <div class="coupon-info">
                                    <form action="javascript:void(0)">
                                        <p class="checkout-coupon">
                                            <input placeholder="Coupon code" type="text"/>
                                            <input class="coupon-inner_btn" value="Apply Coupon" type="submit"/>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <Billing/>
                    </div>
                    <div class="col-lg-6 col-12">
                       <OrderSummary/>
                    </div>
                </div>
            </div>
        </div>
        
   <Brands/>
  </div>
 )
}

export default checkout
