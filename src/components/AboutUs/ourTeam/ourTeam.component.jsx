import React from "react";
import { Link } from "react-router-dom";

import person1 from "assets/ourTeam/person_1.jpg";
import person2 from "assets/ourTeam/person_2.jpg";
import person3 from "assets/ourTeam/person_3.jpg";
import person4 from "assets/ourTeam/person_4.jpg";

import "./ourTeam.component.css";

export const OurTeam = () => {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>
        <div className="row">
          {/* Start Column 1 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img alt="" src={person1} className="img-fluid mb-5" />
            <h3>
              <Link to="#">
                <span>Lawson</span> Arnold
              </Link>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, Link large language ocean.
            </p>
            <p className="mb-0">
              <Link to="#" className="more dark">
                Learn More <span className="icon-arrow_forward" />
              </Link>
            </p>
          </div>
          {/* End Column 1 */}
          {/* Start Column 2 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img alt="" src={person2} className="img-fluid mb-5" />
            <h3>
              <Link to="#">
                <span>Jeremy</span> Walker
              </Link>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, Link large language ocean.
            </p>
            <p className="mb-0">
              <Link to="#" className="more dark">
                Learn More <span className="icon-arrow_forward" />
              </Link>
            </p>
          </div>
          {/* End Column 2 */}
          {/* Start Column 3 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img alt="" src={person3} className="img-fluid mb-5" />
            <h3>
              <Link to="#">
                <span>Patrik</span> White
              </Link>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, Link large language ocean.
            </p>
            <p className="mb-0">
              <Link to="#" className="more dark">
                Learn More <span className="icon-arrow_forward" />
              </Link>
            </p>
          </div>
          {/* End Column 3 */}
          {/* Start Column 4 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img alt="" src={person4} className="img-fluid mb-5" />
            <h3>
              <Link to="#">
                <span>Kathryn</span> Ryan
              </Link>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, Link large language ocean.
            </p>
            <p className="mb-0">
              <Link to="#" className="more dark">
                Learn More <span className="icon-arrow_forward" />
              </Link>
            </p>
          </div>
          {/* End Column 4 */}
        </div>
      </div>
    </div>
  );
};
