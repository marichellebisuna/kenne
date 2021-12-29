import React from 'react'
import Link from 'next/link'
const Dashboard = () => {
 return (
  <div className="col-lg-3">
  <ul className="nav myaccount-tab-trigger" id="account-page-tab" role="tablist">
      <li className="nav-item">
          <a className="nav-link active" id="account-dashboard-tab" data-bs-toggle="tab" href="#account-dashboard" role="tab" aria-controls="account-dashboard" aria-selected="true">Dashboard</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" id="account-orders-tab" data-bs-toggle="tab" href="#account-orders" role="tab" aria-controls="account-orders" aria-selected="false">Orders</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" id="account-address-tab" data-bs-toggle="tab" href="#account-address" role="tab" aria-controls="account-address" aria-selected="false">Addresses</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" id="account-details-tab" data-bs-toggle="tab" href="#account-details" role="tab" aria-controls="account-details" aria-selected="false">Account Details</a>
      </li>
      <li className="nav-item">
<Link href='/login'>
          <a className="nav-link" id="account-logout-tab" href="login-register.html" role="tab" aria-selected="false">Logout</a></Link>
      </li>
  </ul>
</div>
 )
}

export default Dashboard
