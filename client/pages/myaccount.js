import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Brands from '../components/Brands'
import Dashboard from '../components/MyAccount/Dashboard'
import TabContent from '../components/MyAccount/TabContent'
const myAccount = () => {
 return (
  <div>
<Breadcrumb/>
<main class="page-content">
            <div class="account-page-area">
                <div class="container">
                    <div class="row">
                       <Dashboard/>
                       <TabContent/>
                    </div>
                </div>
            </div>
           
        </main>
<Brands/>
  </div>
 )
}

export default myAccount
