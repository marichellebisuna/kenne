import React from 'react';

const ServiceArea = () => {
  return (
    <div className='service-area'>
      <div className='container'>
        <div className='service-nav'>
          <div className='row'>
            <div className='col-lg-4 col-md-4'>
              <div className='service-item'>
                <div className='content'>
                  <h4>Free Shipping</h4>
                  <p>Free shipping on all order</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='service-item'>
                <div className='content'>
                  <h4>Money Return</h4>
                  <p>30 days for free return</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='service-item'>
                <div className='content'>
                  <h4>Online Support</h4>
                  <p>Support 24 hours a day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
