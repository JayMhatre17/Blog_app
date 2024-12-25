// import React from 'react';
import { Link } from "react-router-dom";

import logo from "/public/img/logo/header-logo3.png";

const Footer = () => {
  return (
    <div className="footer2 mt-80 md:mt-40 sm:mt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="vexon" />
              </Link>
            </div>
            <div className="heading3 mt-16">
              <p>
                Vexon is your hub for the latest in digital innovation,
                technology trends, and creative insights. Our mission is to
                empower creators, businesses, and provide valuable resources.
              </p>
              <div className="footer-social3">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Behance"
                    >
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.basketball.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Basketball"
                    >
                      <i className="fa-regular fa-globe"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-50 sm:mb-30 sm:mt-30">
            <div className="footer-list2 ml-80 md:ml-0 sm:ml-0">
              <h3>Explore Categories</h3>
              <ul>
                <li>
                  <Link to="/digital-marketing">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="/ai-technology">AI & Technology</Link>
                </li>
                <li>
                  <Link to="/content-strategy">Content Strategy</Link>
                </li>
                <li>
                  <Link to="/social-media">Social Media</Link>
                </li>
                <li>
                  <Link to="/seo-analytics">SEO & Analytics</Link>
                </li>
                <li>
                  <Link to="/design-development">Design & Development</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-list2 ml-50 md:ml-0 sm:ml-0 mb-50 sm:mb-30">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy & Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-contact-list3 mb-50 sm:mb-30">
              <h3>Contact Us</h3>
              <div className="footer-contact-box3">
                <div className="icon">
                  <img src="/public/img/icons/footer1-icon1.svg" alt="vexon" />
                </div>
                <div className="text">
                  <a href="mailto:support@vexon.com">support@vexon.com</a>
                </div>
              </div>

              <div className="footer-contact-box3">
                <div className="icon">
                  <img src="/public/img/icons/footer1-icon2.svg" alt="vexon" />
                </div>
                <div className="text text-left">
                  <a href="https://maps.google.com?q=8708+Technology+Forest+Pl+Suite+125+-G,+The+Woodlands,+TX+773">
                    8708 Technology Forest Pl <br />
                    Suite 125 -G, The Woodlands, <br />
                    TX 773
                  </a>
                </div>
              </div>

              <div className="footer-contact-box3">
                <div className="icon">
                  <img src="/public/img/icons/footer1-icon3.svg" alt="vexon" />
                </div>
                <div className="text">
                  <a href="tel:+1234567890">123-456-7890</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="coppyrihgt3">
          <div className="row coppyrihgt-border">
            <div className="col-md-6">
              <p className="coppyrihgt">
                © 2024 Vexon, Inc. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="conditions">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
