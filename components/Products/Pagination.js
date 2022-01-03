import React from 'react'

const Pagination = () => {
 return (
  <div className="row">
  <div className="col-lg-12">
      <div className="kenne-paginatoin-area">
          <div className="row">
              <div className="col-lg-12">
                  <ul className="kenne-pagination-box primary-color">
                      <li className="active"><a href="javascript:void(0)">1</a></li>
                      <li><a href="javascript:void(0)">2</a></li>
                      <li><a href="javascript:void(0)">3</a></li>
                      <li><a href="javascript:void(0)">4</a></li>
                      <li><a href="javascript:void(0)">5</a></li>
                      <li><a className="Next" href="javascript:void(0)">Next</a></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</div>
 )
}

export default Pagination
