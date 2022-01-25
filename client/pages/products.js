import React from 'react';
import Brands from '../components/Brands'
import Breadcrumb from '../components/Breadcrumb'
import ShopToolbar from '../components/Products/ShopToolbar';
import Sidebar from '../components/Products/Sidebar';

const Products = () => {
  return <div>   
    <Breadcrumb/>
    <div className="kenne-content_wrapper">
            <div className="container">
                <div className="row">
                   <Sidebar/>
                   <ShopToolbar/>
                </div>
            </div>
        </div>
  <Brands/></div>;
};

export default Products;
