import React from 'react'

const TabContent = () => {
 return (
  <div className="col-lg-9">
  <div className="tab-content myaccount-tab-content" id="account-page-tab-content">
      <div className="tab-pane fade show active" id="account-dashboard" role="tabpanel" aria-labelledby="account-dashboard-tab">
          <div className="myaccount-dashboard">
              <p>Hello <b>Edwin Adams</b> (not Edwin Adams? <a href="login-register.html">Sign
                      out</a>)</p>
              <p>From your account dashboard you can view your recent orders, manage your shipping and
                  billing addresses and <a href="javascript:void(0)">edit your password and account
                      details</a>.</p>
          </div>
      </div>
      <div className="tab-pane fade" id="account-orders" role="tabpanel" aria-labelledby="account-orders-tab">
          <div className="myaccount-orders">
              <h4 className="small-title">MY ORDERS</h4>
              <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                      <tbody>
                          <tr>
                              <th>ORDER</th>
                              <th>DATE</th>
                              <th>STATUS</th>
                              <th>TOTAL</th>
                              <th></th>
                          </tr>
                          <tr>
                              <td><a className="account-order-id" href="javascript:void(0)">#5364</a></td>
                              <td>Mar 27, 2019</td>
                              <td>On Hold</td>
                              <td>£162.00 for 2 items</td>
                              <td><a href="javascript:void(0)" className="kenne-btn kenne-btn_sm"><span>View</span></a>
                              </td>
                          </tr>
                          <tr>
                              <td><a className="account-order-id" href="javascript:void(0)">#5356</a></td>
                              <td>Mar 27, 2019</td>
                              <td>On Hold</td>
                              <td>£162.00 for 2 items</td>
                              <td><a href="javascript:void(0)" className="kenne-btn kenne-btn_sm"><span>View</span></a>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <div className="tab-pane fade" id="account-address" role="tabpanel" aria-labelledby="account-address-tab">
          <div className="myaccount-address">
              <p>The following addresses will be used on the checkout page by default.</p>
              <div className="row">
                  <div className="col">
                      <h4 className="small-title">Billing Adress</h4>
                      <address>
                          1234 Heaven Stress, Beverly Hill OldYork UnitedState of Lorem
                      </address>
                  </div>
                  <div className="col">
                      <h4 className="small-title">Shipping Address</h4>
                      <address>
                          1234 Heaven Stress, Beverly Hill OldYork UnitedState of Lorem
                      </address>
                  </div>
              </div>
          </div>
      </div>
      <div className="tab-pane fade" id="account-details" role="tabpanel" aria-labelledby="account-details-tab">
          <div className="myaccount-details">
              <form action="#" className="kenne-form">
                  <div className="kenne-form-inner">
                      <div className="single-input single-input-half">
                          <label for="account-details-firstname">First Name*</label>
                          <input type="text" id="account-details-firstname"/>
                      </div>
                      <div className="single-input single-input-half">
                          <label for="account-details-lastname">Last Name*</label>
                          <input type="text" id="account-details-lastname"/>
                      </div>
                      <div className="single-input">
                          <label for="account-details-email">Email*</label>
                          <input type="email" id="account-details-email"/>
                      </div>
                      <div className="single-input">
                          <label for="account-details-oldpass">Current Password(leave blank to leave
                              unchanged)</label>
                          <input type="password" id="account-details-oldpass"/>
                      </div>
                      <div className="single-input">
                          <label for="account-details-newpass">New Password (leave blank to leave
                              unchanged)</label>
                          <input type="password" id="account-details-newpass"/>
                      </div>
                      <div className="single-input">
                          <label for="account-details-confpass">Confirm New Password</label>
                          <input type="password" id="account-details-confpass"/>
                      </div>
                      <div className="single-input">
                          <button className="kenne-btn kenne-btn_dark" type="submit"><span>SAVE
                          CHANGES</span></button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
</div>
 )
}

export default TabContent
