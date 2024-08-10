import React from "react";

import { Link } from "react-router-dom";

import post1 from "assets/blog/post-1.jpg";
import post2 from "assets/blog/post-2.jpg";
import post3 from "assets/blog/post-3.jpg";

const blogPost = [
  {
    post: post1,
    desc: "First Time Home Owner Ideas",
    by: "Kristin Watson",
    date: "Dec 19, 2021",
    link: "#",
  },
  {
    post: post2,
    desc: "How To Keep Your Furniture Clean",
    by: "Robert Foxon",
    date: "Dec 15, 2021",
    link: "#",
  },
  {
    post: post3,
    desc: "Small Space Furniture Apartment Ideas",
    by: "Kristin Watson",
    date: "Dec 12, 2021",
    link: "#",
  },
  {
    post: post1,
    desc: "First Time Home Owner Ideas",
    by: "Kristin Watson",
    date: "Dec 19, 2021",
    link: "#",
  },
  {
    post: post2,
    desc: "How To Keep Your Furniture Clean",
    by: "Robert Foxon",
    date: "Dec 15, 2021",
    link: "#",
  },
  {
    post: post3,
    desc: "Small Space Furniture Apartment Ideas",
    by: "Kristin Watson",
    date: "Dec 12, 2021",
    link: "#",
  },
];

export const BlogImages = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <div className="row">
          {blogPost.map((key) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 pb-5">
              <div className="post-entry">
                <Link to={key.link} className="post-thumbnail">
                  <img src={key.post} alt="" className="img-fluid" />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link to={key.link}>{key.desc}</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link to={key.link}>{key.by}</Link>
                    </span>
                    <span>
                      on <Link to={key.link}>{key.date}</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 pb-5">
            <div className="post-entry">
              <Link to="#" className="post-thumbnail">
                <img src={post1} alt="" className="img-fluid" />
              </Link>
              <div className="post-content-entry">
                <h3>
                  <Link to="#">First Time Home Owner Ideas</Link>
                </h3>
                <div className="meta">
                  <span>
                    by <Link to="#">Kristin Watson</Link>
                  </span>
                  <span>
                    on <Link to="#">Dec 19, 2021</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 pb-5">
            <div className="post-entry">
              <Link to="#" className="post-thumbnail">
                <img src={post2} alt="" className="img-fluid" />
              </Link>
              <div className="post-content-entry">
                <h3>
                  <Link to="#">How To Keep Your Furniture Clean</Link>
                </h3>
                <div className="meta">
                  <span>
                    by <Link to="#">Robert Fox</Link>
                  </span>
                  <span>
                    on <Link to="#">Dec 15, 2021</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 pb-5">
            <div className="post-entry">
              <Link to="#" className="post-thumbnail">
                <img src={post3} alt="" className="img-fluid" />
              </Link>
              <div className="post-content-entry">
                <h3>
                  <Link to="#">Small Space Furniture Apartment Ideas</Link>
                </h3>
                <div className="meta">
                  <span>
                    by <Link to="#">Kristin Watson</Link>
                  </span>
                  <span>
                    on <Link to="#">Dec 12, 2021</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
