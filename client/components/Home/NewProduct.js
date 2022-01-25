import React from 'react';
import ProductTab from '../ProductTab';

const NewProduct = () => {
  return (
    <div className='product-area '>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='section-title'>
              <h3>New Product</h3>
              <div className='product-arrow'></div>
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

export default NewProduct;
