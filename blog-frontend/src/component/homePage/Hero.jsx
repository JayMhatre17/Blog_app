// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

// import Logo from "//img/logo/header-logo1.png";
// import heroBg from '../assets/img/bg/hero2-bg.jpg'
import heroBg from "/img/bg/hero2-bg.jpg";
import image1 from "/img/hero/hero2-image.png";
import image2 from "/img/shapes/hero2-shape.png";

const Hero = () => {
  return (
    <div
      className="hero2 bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container mx-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="main-heading2">
              <h1
                className="text-anime-style-3"
                style={{ perspective: "400px" }}
              >
                <div
                  className="split-line"
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                  }}
                >
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    {["H", "i", ","].map((char, index) => (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          display: "inline-block",
                          opacity: 1,
                        }}
                      >
                        {char}
                      </div>
                    ))}
                  </div>
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    {["I", "’", "m"].map((char, index) => (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          display: "inline-block",
                          opacity: 1,
                        }}
                      >
                        {char}
                      </div>
                    ))}
                  </div>
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    {["A", "l", "e", "x"].map((char, index) => (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          display: "inline-block",
                          opacity: 1,
                        }}
                      >
                        {char}
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="split-line"
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                  }}
                >
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    {["R", "o", "b", "e", "r", "t", "s", "o", "n"].map(
                      (char, index) => (
                        <div
                          key={index}
                          style={{
                            position: "relative",
                            display: "inline-block",
                            opacity: 1,
                          }}
                        >
                          {char}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </h1>
              <p
                className="mt-16 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay="100"
              >
                Hi, I’m Alex Robertson! Passionate about uncovering unique
                insights and sharing meaningful stories, I bring fresh
                perspectives.
              </p>
              <div
                className="form-area aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay="300"
              >
                <form action="#">
                  <input type="email" placeholder="Enter Your Email" />
                  <div className="button">
                    <button className="theme-btn2">Get Started</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="images-all">
              <div
                className="image1 image-anime reveal"
                style={{
                  opacity: 1,
                  visibility: "inherit",
                  transform: "translate(0px, 0px)",
                }}
              >
                <img
                  src={image1}
                  alt="vexon"
                  style={{ transform: "translate(0px, 0px)" }}
                />
              </div>
              <div className="shape animate2">
                <img src={image2} alt="-" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
