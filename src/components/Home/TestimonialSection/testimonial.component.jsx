import React from "react";
import person1 from "assets/person-1.png";

import "./testimonial.component.css";

export const Testimonial = () => {
  return (
    <>
      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">
                <div
                  id="testimonial-nav"
                  aria-label="Carousel Navigation"
                  tabIndex={0}
                >
                  <span
                    className="prev"
                    data-controls="prev"
                    aria-controls="tns1"
                    tabIndex={-1}
                  >
                    <span className="fa fa-chevron-left" />
                  </span>
                  <span
                    className="next"
                    data-controls="next"
                    aria-controls="tns1"
                    tabIndex={-1}
                  >
                    <span className="fa fa-chevron-right" />
                  </span>
                </div>
                <div className="tns-outer" id="tns1-ow">
                  <div className="tns-nav" aria-label="Carousel Pagination">
                    <button
                      data-nav={0}
                      aria-controls="tns1"
                      style={{}}
                      aria-label="Carousel Page 1"
                      className=""
                      tabIndex={-1}
                    />
                    <button
                      data-nav={1}
                      aria-controls="tns1"
                      style={{}}
                      aria-label="Carousel Page 2 (Current Slide)"
                      className="tns-nav-active"
                    />
                    <button
                      data-nav={2}
                      aria-controls="tns1"
                      style={{}}
                      aria-label="Carousel Page 3"
                      className=""
                      tabIndex={-1}
                    />
                  </div>
                  <div
                    className="tns-liveregion tns-visually-hidden"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    slide <span className="current">3</span> of 3
                  </div>
                  <div id="tns1-mw" className="tns-ovh">
                    <div className="tns-inner" id="tns1-iw">
                      <div
                        className="testimonial-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                        id="tns1"
                        style={{ transform: "translate3d(-40%, 0px, 0px)" }}
                      >
                        <div
                          className="item tns-item"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                              <div className="testimonial-block text-center">
                                <blockquote className="mb-5">
                                  <p>
                                    “Donec facilisis quam ut purus rutrum
                                    lobortis. Donec vitae odio quis nisl dapibus
                                    malesuada. Nullam ac aliquet velit. Aliquam
                                    vulputate velit imperdiet dolor tempor
                                    tristique. Pellentesque habitant morbi
                                    tristique senectus et netus et malesuada
                                    fames ac turpis egestas. Integer convallis
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
                                  <h3 className="font-weight-bold">
                                    Maria Jones
                                  </h3>
                                  <span className="position d-block mb-3">
                                    CEO, Co-Founder, XYZ Inc.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="item tns-item"
                          id="tns1-item0"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                              <div className="testimonial-block text-center">
                                <blockquote className="mb-5">
                                  <p>
                                    “Donec facilisis quam ut purus rutrum
                                    lobortis. Donec vitae odio quis nisl dapibus
                                    malesuada. Nullam ac aliquet velit. Aliquam
                                    vulputate velit imperdiet dolor tempor
                                    tristique. Pellentesque habitant morbi
                                    tristique senectus et netus et malesuada
                                    fames ac turpis egestas. Integer convallis
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
                                  <h3 className="font-weight-bold">
                                    Maria Jones
                                  </h3>
                                  <span className="position d-block mb-3">
                                    CEO, Co-Founder, XYZ Inc.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* END item */}
                        <div
                          className="item tns-item tns-slide-active"
                          id="tns1-item1"
                        >
                          <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                              <div className="testimonial-block text-center">
                                <blockquote className="mb-5">
                                  <p>
                                    “Donec facilisis quam ut purus rutrum
                                    lobortis. Donec vitae odio quis nisl dapibus
                                    malesuada. Nullam ac aliquet velit. Aliquam
                                    vulputate velit imperdiet dolor tempor
                                    tristique. Pellentesque habitant morbi
                                    tristique senectus et netus et malesuada
                                    fames ac turpis egestas. Integer convallis
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
                                  <h3 className="font-weight-bold">
                                    Maria Jones
                                  </h3>
                                  <span className="position d-block mb-3">
                                    CEO, Co-Founder, XYZ Inc.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* END item */}
                        <div
                          className="item tns-item"
                          id="tns1-item2"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                              <div className="testimonial-block text-center">
                                <blockquote className="mb-5">
                                  <p>
                                    “Donec facilisis quam ut purus rutrum
                                    lobortis. Donec vitae odio quis nisl dapibus
                                    malesuada. Nullam ac aliquet velit. Aliquam
                                    vulputate velit imperdiet dolor tempor
                                    tristique. Pellentesque habitant morbi
                                    tristique senectus et netus et malesuada
                                    fames ac turpis egestas. Integer convallis
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
                                  <h3 className="font-weight-bold">
                                    Maria Jones
                                  </h3>
                                  <span className="position d-block mb-3">
                                    CEO, Co-Founder, XYZ Inc.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* END item */}
                        <div
                          className="item tns-item"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                              <div className="testimonial-block text-center">
                                <blockquote className="mb-5">
                                  <p>
                                    “Donec facilisis quam ut purus rutrum
                                    lobortis. Donec vitae odio quis nisl dapibus
                                    malesuada. Nullam ac aliquet velit. Aliquam
                                    vulputate velit imperdiet dolor tempor
                                    tristique. Pellentesque habitant morbi
                                    tristique senectus et netus et malesuada
                                    fames ac turpis egestas. Integer convallis
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
                                  <h3 className="font-weight-bold">
                                    Maria Jones
                                  </h3>
                                  <span className="position d-block mb-3">
                                    CEO, Co-Founder, XYZ Inc.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
