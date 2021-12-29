import React from 'react'
import Brands from '../components/About/Brands'
import Counter from '../components/About/Counter'
import Team from '../components/About/Team'
import Breadcrumb from '../components/Breadcrumb'
const about = () => {
 return (
  <div>
   <Breadcrumb/>
   <div className="about-us-area mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="overview-img text-center img-hover_effect">
                            <a href="#">
                                <img className="img-full" src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/about-us/1.jpg" alt="Kenne's About Us Image"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7 d-flex align-items-center">
                        <div className="overview-content">
                            <h2>Welcome To <span>Kenne's</span> Store!</h2>
                            <p className="short_desc">We Provide Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Repudiandae nisi fuga facilis, consequuntur, maiores eveniet voluptatum, omnis possimus
                                temporibus aspernatur nobis animi in exercitationem vitae nulla! Adipisci ullam illum quisquam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nulla veniam? Magni aliquid
                                asperiores magnam. Veniam ex tenetur.</p>
                            <div className="kenne-about-us_btn-area">
                                <a className="about-us_btn" href="shop-left-sidebar.html">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   </div>
   <Counter/>
   <Team/>
   <Brands/>
  </div>
 )
}

export default about
