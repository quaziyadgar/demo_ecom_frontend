import React from "react";
import person1 from "assets/person-1.png";

import Carousel from "react-bootstrap/Carousel";

import "./testimonial.component.css";

export const Testimonial = () => {
  return (
    <>
      {/* <div className="testimonial-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div id="carouselExampleIndicators" className="carousel slide pb-5">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    // className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>
                              “Donec facilisis quam ut purus rutrum lobortis.
                              Donec vitae odio quis nisl dapibus malesuada.
                              Nullam ac aliquet velit. Aliquam vulputate velit
                              imperdiet dolor tempor tristique. Pellentesque
                              habitant morbi tristique senectus et netus et
                              malesuada fames ac turpis egestas. Integer
                              convallis volutpat dui quis scelerisque.”
                            </p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src={person1}
                                alt="Maria Jones"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>
                              “Donec facilisis quam ut purus rutrum lobortis.
                              Donec vitae odio quis nisl dapibus malesuada.
                              Nullam ac aliquet velit. Aliquam vulputate velit
                              imperdiet dolor tempor tristique. Pellentesque
                              habitant morbi tristique senectus et netus et
                              malesuada fames ac turpis egestas. Integer
                              convallis volutpat dui quis scelerisque.”
                            </p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src={person1}
                                alt="Maria Jones"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>
                              “Donec facilisis quam ut purus rutrum lobortis.
                              Donec vitae odio quis nisl dapibus malesuada.
                              Nullam ac aliquet velit. Aliquam vulputate velit
                              imperdiet dolor tempor tristique. Pellentesque
                              habitant morbi tristique senectus et netus et
                              malesuada fames ac turpis egestas. Integer
                              convallis volutpat dui quis scelerisque.”
                            </p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src={person1}
                                alt="Maria Jones"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="testimonial-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>
          <Carousel className="carousel-height">
            <Carousel.Item>
              <div className="testimonial-block text-center">
                <blockquote className="mb-5">
                  <p>
                    “Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Integer convallis
                    volutpat dui quis scelerisque.”
                  </p>
                </blockquote>
                <div className="author-info">
                  <div className="author-pic">
                    <img
                      src={person1}
                      alt="Maria Jones"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="font-weight-bold">Maria Jones</h3>
                  <span className="position d-block mb-3">
                    CEO, Co-Founder, XYZ Inc.
                  </span>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial-block text-center">
                <blockquote className="mb-5">
                  <p>
                    “Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Integer convallis
                    volutpat dui quis scelerisque.”
                  </p>
                </blockquote>
                <div className="author-info">
                  <div className="author-pic">
                    <img
                      src={person1}
                      alt="Maria Jones"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="font-weight-bold">Maria Jones</h3>
                  <span className="position d-block mb-3">
                    CEO, Co-Founder, XYZ Inc.
                  </span>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial-block text-center">
                <blockquote className="mb-5">
                  <p>
                    “Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Integer convallis
                    volutpat dui quis scelerisque.”
                  </p>
                </blockquote>
                <div className="author-info">
                  <div className="author-pic">
                    <img
                      src={person1}
                      alt="Maria Jones"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="font-weight-bold">Maria Jones</h3>
                  <span className="position d-block mb-3">
                    CEO, Co-Founder, XYZ Inc.
                  </span>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};
