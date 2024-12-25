// import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import DateImg from "/img/icons/date1.svg";
import AuthorImg from "/img/icons/author2.svg";

import Blog1 from "/img/blog/blog2-image1.png";
import Blog2 from "/img/blog/blog2-image2.png";

const BlogSection = () => {
  return (
    <div className="blog2-boxs-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            {/* First Blog Box */}
            <div className="blog2-single-box">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 aos-init aos-animate"
                  data-aos-offset="-100"
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="100"
                >
                  <div className="image _relative image-anime mr-30">
                    <img src={Blog1} alt="vexon" />
                  </div>
                </div>
                <div
                  className="col-lg-6 aos-init aos-animate"
                  data-aos-offset="-100"
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="300"
                >
                  <div className="blog2-box-content md:mt-30 sm:mt-30">
                    <div className="author-area2">
                      <a href="#">
                        <img src={DateImg} alt="vexon" />
                        Oct 10, 2024
                      </a>
                      <a href="author.html" className="author">
                        <img src={AuthorImg} alt="vexon" />
                        Philips Huge
                      </a>
                    </div>
                    <div className="heading2">
                      <h4>
                        <a href="blog-single.html">
                          The Power of Data: Leveraging Analytics for Business
                          Consult Strategic Decisions
                        </a>
                      </h4>
                      <p className="mt-16">
                        In today’s fast-paced business environment, change is
                        best inevitable, an how organizations manage that make
                        change.
                      </p>
                      <a href="blog-single.html" className="learn">
                        Read More{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Blog Box */}
            <div className="blog2-single-box mt-40">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 aos-init"
                  data-aos-offset="50"
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="300"
                >
                  <div className="blog2-box-content">
                    <div className="author-area2">
                      <a href="#">
                        <img src={DateImg} alt="vexon" />
                        Oct 10, 2024
                      </a>
                      <a href="author.html" className="author">
                        <img src={AuthorImg} alt="vexon" />
                        Philips Huge
                      </a>
                    </div>
                    <div className="heading2">
                      <h4>
                        <a href="blog-single.html">
                          Effective Communication: The Key to Best Business
                          Consulting Successful
                        </a>
                      </h4>
                      <p className="mt-16">
                        In today’s fast-paced business environment, change is
                        best inevitable, an how organizations manage that make
                        change.
                      </p>
                      <a href="blog-single.html" className="learn">
                        Read More{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 aos-init"
                  data-aos-offset="50"
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="100"
                >
                  <div className="image _relative image-anime mr-30 sm:mr-0 md:mr-0 sm:mt-30 md:mt-30">
                    <img src={Blog2} alt="vexon" />
                  </div>
                </div>
              </div>
            </div>

            {/* Third Blog Box */}
            <div className="blog2-single-box mt-40">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 aos-init"
                  data-aos-offset="50"
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="100"
                >
                  <div className="image _relative image-anime mr-30">
                    <img src={Blog1} alt="vexon" />
                  </div>
                </div>
                <div
                  className="col-lg-6 aos-init"
                  data-aos-offset="50"
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="300"
                >
                  <div className="blog2-box-content sm:mt-30 md:mt-30">
                    <div className="author-area2">
                      <a href="#">
                        <img src={DateImg} alt="vexon" />
                        Oct 10, 2024
                      </a>
                      <a href="author.html" className="author">
                        <img src={AuthorImg} alt="vexon" />
                        Philips Huge
                      </a>
                    </div>
                    <div className="heading2">
                      <h4>
                        <a href="blog-single.html">
                          Effective Communication: The Key to Best Business
                          Consulting Successful
                        </a>
                      </h4>
                      <p className="mt-16">
                        In today’s fast-paced business environment, change is
                        best inevitable, an how organizations manage that make
                        change.
                      </p>
                      <a href="blog-single.html" className="learn">
                        Read More{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space100"></div>
    </div>
  );
};

export default BlogSection;
