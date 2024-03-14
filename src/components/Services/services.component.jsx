import React from "react";

import bagIcon from "assets/bag.svg";
import truckIcon from "assets/truck.svg";
import supportIcon from "assets/support.svg";
import returnIcon from "assets/return.svg";


import "./services.component.css";

export const Services = () => {
  return (
    <div className="service-section">
      <div className="container">
        <div className="row my-5">
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src={truckIcon} alt="" className="imf-fluid" />
              </div>
              <h6>Fast &amp; Free Shipping</h6>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src={bagIcon} alt="" className="imf-fluid" />
              </div>
              <h6>Easy to Shop</h6>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src={supportIcon} alt="" className="imf-fluid" />
              </div>
              <h6>24/7 Support</h6>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src={returnIcon} alt="" className="imf-fluid" />
              </div>
              <h6>Hassle Free Returns</h6>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src={truckIcon} alt="" className="imf-fluid" />
              </div>
              <h6>Fast &amp; Free Shipping</h6>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src={bagIcon} alt="" className="imf-fluid" />
              </div>
              <h6>Easy to Shop</h6>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src={supportIcon} alt="" className="imf-fluid" />
              </div>
              <h6>24/7 Support</h6>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="feature">
              <div className="icon">
                <img src={returnIcon} alt="" className="imf-fluid" />
              </div>
              <h6>Hassle Free Returns</h6>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
