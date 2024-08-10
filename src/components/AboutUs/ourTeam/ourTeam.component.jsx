import React from "react";
import { Link } from "react-router-dom";

import person1 from "assets/ourTeam/person_1.jpg";
import person2 from "assets/ourTeam/person_2.jpg";
import person3 from "assets/ourTeam/person_3.jpg";
import person4 from "assets/ourTeam/person_4.jpg";

import "./ourTeam.component.css";

const ourTeam = [
  {
    dp: person1,
    firstName: "Lawson",
    lastName: "Harrison",
    designation: "CEO, Founder, Atty",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, Link large language ocean",
    link: "#",
  },
  {
    dp: person2,
    firstName: "Jeremy",
    lastName: "Walker",
    designation: "CEO, Founder, Atty",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, Link large language ocean",
    link: "#",
  },
  {
    dp: person3,
    firstName: "Patrik",
    lastName: "White",
    designation: "CEO, Founder, Atty",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, Link large language ocean",
    link: "#",
  },
  {
    dp: person4,
    firstName: "Kathryn",
    lastName: "Ryan",
    designation: "CEO, Founder, Atty",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, Link large language ocean",
    link: "#",
  },
];

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
          {ourTeam.map((key) => (
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img alt="" src={key.dp} className="img-fluid mb-5" />
              <h3>
                <Link to="#">
                  <span>{key.firstName}</span> {key.lastName}
                </Link>
              </h3>
              <span className="d-block position mb-4">{key.designation}.</span>
              <p>
               {key.description}
              </p>
              <p className="mb-0">
                <Link to={key.link} className="more dark">
                  Learn More <span className="icon-arrow_forward" />
                </Link>
              </p>
            </div>
          ))}
          {/* End Column 1 */}
        </div>
      </div>
    </div>
  );
};
