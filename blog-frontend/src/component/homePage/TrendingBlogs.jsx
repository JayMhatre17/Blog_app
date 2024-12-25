// import '/css/fontawesome.css'
import categoryHead from "/img/icons/span2.svg";
import { Link } from "react-router-dom";
import post1 from "/img/blog/latest-blog2-img1.png";
import post2 from "/img/blog/latest-blog2-img2.png";
import DateImg from "/img/icons/date1.svg";
import AuthorImg from "/img/icons/author2.svg";

const TrendingBlogs = () => {
  return (
    <div className="latest-blog2 sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto text-center">
            <div className="heading2">
              <span className="sub-titile mb-16">
                <img src={categoryHead} alt="vexon" /> Latest Blog
              </span>
              <h2 className="text-anime-style-3">Our Trending Blog</h2>
            </div>
          </div>
        </div>

        <div className="space30"></div>
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="row">
              <div className="col-lg-6">
                <div className="latest-blog2-box mt-30">
                  <div className="image-area _relative image-anime">
                    <div className="image">
                      <img src={post1} alt="vexon" />
                    </div>
                    <Link to="/blog" className="arrow">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="content-area heading2">
                    <div className="author-area2">
                      <Link to="#">
                        <img src={DateImg} alt="vexon" />
                        Oct 10, 2024{" "}
                      </Link>
                      <Link to="#" className="author">
                        <img src={AuthorImg} alt="vexon" /> Philips Huge
                      </Link>
                    </div>
                    <h4>
                      <Link to="/blog">
                        The Top 5 Financial Mistakes Businesses Finance Make –
                        And How to Avoid Them
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="latest-blog2-box mt-30">
                  <div className="image-area _relative image-anime">
                    <div className="image">
                      <img src={post2} alt="vexon" />
                    </div>
                    <Link to="/blog" className="arrow">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="content-area heading2">
                    <div className="author-area2">
                      <Link to="#">
                        <img src={DateImg} alt="vexon" />
                        Oct 10, 2024{" "}
                      </Link>
                      <Link to="#" className="author">
                        <img src={AuthorImg} alt="vexon" /> Philips Huge
                      </Link>
                    </div>
                    <h4>
                      <Link to="/blog">
                        The Top 5 Financial Mistakes Businesses Finance Make –
                        And How to Avoid Them
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBlogs;
