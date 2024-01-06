import React from "react";
import couch from "../../assets/couch.png";
import dotSquare from "../../assets/dots-light.svg"
import { Navbar } from "../../components";
import "./header.page.css";

export const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Modern Interior <span class="d-block">Design Studio</span>
                </h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <p>
                  <button type="button" className="btn btn-secondary me-2">
                    Shop Now
                  </button>
                  <button type="button" className="btn btn-white-outline">
                    Explore
                  </button>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={couch} className="img-fluid" />
                <img src={dotSquare} alt="" className="img-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};