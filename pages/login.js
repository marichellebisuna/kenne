import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Brands from '../components/Brands'

const login = () => {
 return (
  <div>
   <Breadcrumb/>
   <div className="kenne-login-register_area">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 " >
                    <form action="#">
                            <div className="login-form">
                                <h4 className="login-title">Login</h4>
                                <div className="row">
                                    <div className="col-md-12 col-12">
                                        <label>Email Address*</label>
                                        <input type="email" placeholder="Email Address"/>
                                    </div>
                                    <div className="col-12 mb--20">
                                        <label>Password</label>
                                        <input type="password" placeholder="Password"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="check-box">
                                            <input type="checkbox" id="remember_me"/>
                                            <label for="remember_me">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="forgotton-password_info">
                                            <a href="#"> Forgotten pasward?</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="kenne-login_btn">Login</button>
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

export default login
