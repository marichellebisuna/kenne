import React from 'react'

const OrderSummary = () => {
 return (
  <div className="your-order">
                            <h3>Your order</h3>
                            <div className="your-order-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="cart-product-name">Product</th>
                                            <th className="cart-product-total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="cart_item">
                                            <td className="cart-product-name"> Vestibulum suscipit<strong className="product-quantity">
                                            × 1</strong></td>
                                            <td className="cart-product-total"><span className="amount">£165.00</span></td>
                                        </tr>
                                        <tr className="cart_item">
                                            <td className="cart-product-name"> Vestibulum suscipit<strong className="product-quantity">
                                            × 1</strong></td>
                                            <td className="cart-product-total"><span className="amount">£165.00</span></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr className="cart-subtotal">
                                            <th>Cart Subtotal</th>
                                            <td><span className="amount">£215.00</span></td>
                                        </tr>
                                        <tr className="order-total">
                                            <th>Order Total</th>
                                            <td><strong><span className="amount">£215.00</span></strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="payment-method">
                                <div className="payment-accordion">
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header" id="#payment-1">
                                                <h5 className="panel-title">
                                                    <a href="javascript:void(0)" className="" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Direct Bank Transfer.
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Make your payment directly into our bank account. Please use your Order
                                                        ID as the payment
                                                        reference. Your order won’t be shipped until the funds have cleared in
                                                        our account.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="#payment-2">
                                                <h5 className="panel-title">
                                                    <a href="javascript:void(0)" className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Cheque Payment
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Make your payment directly into our bank account. Please use your Order
                                                        ID as the payment
                                                        reference. Your order won’t be shipped until the funds have cleared in
                                                        our account.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="#payment-3">
                                                <h5 className="panel-title">
                                                    <a href="javascript:void(0)" className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        PayPal
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Make your payment directly into our bank account. Please use your Order
                                                        ID as the payment
                                                        reference. Your order won’t be shipped until the funds have cleared in
                                                        our account.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-button-payment">
                                        <input value="Place order" type="submit"/>
                                    </div>
                                </div>
                            </div>
                        </div>
 )
}

export default OrderSummary
