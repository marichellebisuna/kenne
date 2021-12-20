import React from 'react';
import ProductTab from '../ProductTab';

const AllProduct = () => {
  return (
    <div className='product-area '>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='section-title'>
              <h3>All Products</h3>
              <div className='product-tab'>
                <ul className='nav product-menu'>
                  <li>
                    <a className='active' data-bs-toggle='tab' href='#bag'>
                      <span>Bag</span>
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle='tab' href='#plaid-shirts'>
                      <span>Plaid Shirts</span>
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle='tab' href='#shoes'>
                      <span>Shoes</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <ProductTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
