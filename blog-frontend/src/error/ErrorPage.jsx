import bgImg from "/img/bg/test-bg.png";
import notfound from "/img/shapes/404.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div
        className="inner-hero bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {" "}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-heading">
                <div className="page-prog" style={{ color: "white" }}>
                  <Link to="/" style={{ color: "white" }}>
                    Home
                  </Link>
                  <span>
                    <i className="fa-solid fa-angle-right text-light"></i>
                  </span>
                  <Link to="/blogs" style={{ color: "white" }}>
                    Blogs
                  </Link>
                  <span>
                    <i className="fa-solid fa-angle-right text-light"></i>
                  </span>
                  <p className="bold mt-3" style={{ color: "white" }}>
                    Page Not Found
                  </p>
                </div>
                <h1 style={{ color: "white" }}>Page Not Found</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-5 m-auto">
          <div className="login-form">
            <div className="text-center">
              <div className="forgot-icon">
                <img src={notfound} alt="vexon" />
              </div>
              <h3 className="mt-5 mb-2">Error 404</h3>
              <p className="mb-5">This page is outside of the universe</p>
              <Link to="/" className="theme-btn1">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
