import React from "react";
import { Link } from "react-router-dom";

import product1 from "assets/product-1.png";
import product2 from "assets/product-2.png";
import product3 from "assets/product-3.png";
import cross from "assets/cross.svg";

import "./products.component.css";

export const Products = () => {
  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          {/* Start Column 1 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <Link className="product-item" to="#">
              <img
                alt=""
                src={product1}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img alt="" src={cross} className="img-fluid" />
              </span>
            </Link>
          </div>
          {/* End Column 1 */}
          {/* Start Column 2 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <Link className="product-item" to="#">
              <img
                alt=""
                src={product2}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img alt="" src={cross} className="img-fluid" />
              </span>
            </Link>
          </div>
          {/* End Column 2 */}
          {/* Start Column 3 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <Link className="product-item" to="#">
              <img
                alt=""
                src={product3}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Kruzo Aero Chair</h3>
              <strong className="product-price">$78.00</strong>
              <span className="icon-cross">
                <img alt="" src={cross} className="img-fluid" />
              </span>
            </Link>
          </div>
          {/* End Column 3 */}
          {/* Start Column 4 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <Link className="product-item" to="#">
              <img
                alt=""
                src={product1}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Ergonomic Chair</h3>
              <strong className="product-price">$43.00</strong>
              <span className="icon-cross">
                <img alt="" src={cross} className="img-fluid" />
              </span>
            </Link>
          </div>
          {/* End Column 4 */}
          {/* Start Column 1 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <Link className="product-item" to="#">
              <img
                alt=""
                src={product1}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img alt="" src={cross} className="img-fluid" />
              </span>
            </Link>
          </div>
          {/* End Column 1 */}
          {/* Start Column 2 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <Link className="product-item" to="#">
              <img
                alt=""
                src={product2}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img alt="" src={cross} className="img-fluid" />
              </span>
            </Link>
          </div>
          {/* End Column 2 */}
          {/* Start Column 3 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <Link className="product-item" to="#">
              <img
                alt=""
                src={product3}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Kruzo Aero Chair</h3>
              <strong className="product-price">$78.00</strong>
              <span className="icon-cross">
                <img alt="" src={cross} className="img-fluid" />
              </span>
            </Link>
          </div>
          {/* End Column 3 */}
          {/* Start Column 4 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <Link className="product-item" to="#">
              <img
                alt=""
                src={product1}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Ergonomic Chair</h3>
              <strong className="product-price">$43.00</strong>
              <span className="icon-cross">
                <img alt="" src={cross} className="img-fluid" />
              </span>
            </Link>
          </div>
          {/* End Column 4 */}
        </div>
      </div>
    </div>
  );
};
