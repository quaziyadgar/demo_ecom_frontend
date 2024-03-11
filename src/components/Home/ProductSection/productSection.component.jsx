import React from "react";
// import { div } from "react-router-dom";

import product1 from "assets/product-1.png";
import product2 from "assets/product-2.png";
import product3 from "assets/product-3.png";
import crossIcon from "assets/cross.svg";

import "./productSection.component.css";

export const ProductSection = () => {
  let a = [product1, product2, product3];
  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          {/* Start Column 1 */}
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">
              Crafted with excellent material.
            </h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <button className="product-btn">Explore</button>
          </div>
          {/* End Column 1 */}
          {/* Start Column 2 */}
          {a.map((product) => (
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <div className="product-item" to="/cart">
                <img src={product} className="img-fluid product-thumbnail" alt="" />
                <h5 className="product-title">Nordic Chair</h5>
                <strong className="product-price">$50.00</strong>
                <span className="icon-cross">
                  <img src={crossIcon} className="img-fluid" alt="" />
                </span>
              </div>
            </div>
          ))}
          {/* End Column 2 */}
          {/* Start Column 3 */}
          {/* <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <div className="product-item" to="/cart">
              <img
                src={product2}
                className="img-fluid product-thumbnail"
                alt=""
              />
              <h5 className="product-title">Kruzo Aero Chair</h5>
              <strong className="product-price">$78.00</strong>
              <span className="icon-cross">
                <img src={crossIcon} className="img-fluid" alt="" />
              </span>
            </div>
          </div>
          {/* End Column 3 */}
          {/* Start Column 4 */}
          {/* <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <div className="product-item" to="/cart">
              <img
                src={product3}
                className="img-fluid product-thumbnail"
                alt=""
              />
              <h5 className="product-title">Ergonomic Chair</h5>
              <strong className="product-price">$43.00</strong>
              <span className="icon-cross">
                <img src={crossIcon} className="img-fluid" alt="" />
              </span>
            </div>
          </div> */}
          {/* End Column 4 */}
        </div>
      </div>
    </div>
  );
};
