import React,{useState} from 'react'
import Pagination from './Pagination'
import ShopGrid from './ShopGrid'
import ShopList from './ShopList'

const ShopToolbar = () => {
 const [show, setShow]=useState(true)
 return (
  <div className="col-lg-9 order-1 order-lg-2">
      <div className="shop-toolbar">
          <div className="product-view-mode">
              <a className="grid-3" data-target="gridview-3" data-toggle="tooltip" data-placement="top" title="Grid View" onClick={()=>setShow(!show)}><i className="fa fa-th"></i></a>
              <a className="active list" data-target="listview" data-toggle="tooltip" data-placement="top" title="List View" onClick={()=>setShow(!show)}><i className="fa fa-th-list"></i></a>
          </div>
          <div className="product-page_count">
              <p>Showing 1–9 of 40 results)</p>
          </div>
          <div className="product-item-selection_area">
              <div className="product-short">
                  <label className="select-label">Short By:</label>
                  <select className="nice-select myniceselect">
                      <option value="1">Default sorting</option>
                      <option value="2">Name, A to Z</option>
                      <option value="3">Name, Z to A</option>
                      <option value="4">Price, low to high</option>
                      <option value="5">Price, high to low</option>
                      <option value="5">Rating (Highest)</option>
                      <option value="5">Rating (Lowest)</option>
                      <option value="5">Model (A - Z)</option>
                      <option value="5">Model (Z - A)</option>
                  </select>
              </div>
          </div>
      </div>
      {show? <ShopGrid/> :<ShopList/>}
    
     
    <Pagination/>
  </div>
 )
}

export default ShopToolbar
