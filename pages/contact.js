import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Brands from '../components/Brands'
import ContactPage from '../components/Contact/ContactPage'
import ContactForm from '../components/Contact/ContactForm'
const contact = () => {
 return (
  <div class="contact-main-page">
   <Breadcrumb/>
   <div class="container">
                <div id="google-map"></div>Google Map
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
                        <ContactPage/>
                    </div>
                    <div class="col-lg-6 col-md-12 order-2 order-lg-1">
                       <ContactForm/>
                    </div>
                </div>
            </div>
   <Brands/>
  </div>
 )
}

export default contact
