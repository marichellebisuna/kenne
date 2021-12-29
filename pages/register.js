import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Brands from '../components/Brands'

const register = () => {
 return (
  <div>
   <Breadcrumb/>
   <div className="kenne-login-register_area">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 " >
                    <form action="#">
                            <div className="login-form">
                                <h4 className="login-title">Register</h4>
                                <div className="row">
                                    <div className="col-md-6 col-12 mb--20">
                                        <label>First Name</label>
                                        <input type="text" placeholder="First Name"/>
                                    </div>
                                    <div className="col-md-6 col-12 mb--20">
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Last Name"/>
                                    </div>
                                    <div className="col-md-12">
                                        <label>Email Address*</label>
                                        <input type="email" placeholder="Email Address"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input type="password" placeholder="Password"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Confirm Password</label>
                                        <input type="password" placeholder="Confirm Password"/>
                                    </div>
                                    <div className="col-12">
                                        <button className="kenne-register_btn">Register</button>
                                    </div>
                                </div>
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

export default register
