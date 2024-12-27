import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  // const [likes, setLikes] = useState(0);
  useEffect(() => {
    axios
      .get("/api/blog/getblogs")
      .then((res) => setBlogData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  // const handleLikes = (blogId) => {
  //   axios.post("/api/blog/editbloglikes", { blogId: blogId, like: likes });
  // };
  console.log(blogData);

  function convertDate(datestr) {
    // const dateString = "2024-12-26T20:29:55.000Z";

    const date = new Date(datestr);

    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return formattedDate;
  }

  return (
    <>
      <div
        className="inner-hero bg-cover"
        style={{ backgroundImage: "url(/public/test-bg.png)" }}
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
                  <p className="bold mt-3" style={{ color: "white" }}>
                    Blogs
                  </p>
                </div>
                <h1 style={{ color: "white" }}>Blogs</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*===== BLOG AREA START=======*/}
      <div className="blog-page-sec sp">
        <div className="container">
          <div className="row">
            {blogData.map((DummyData, key) => (
              <div
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-offset={50}
                data-aos-duration={400}
                data-aos-delay={100}
                key={key}
              >
                <div className="blog1-single-box">
                  <div className="thumbnail image-anime">
                    <img src={DummyData.banner} alt="vexon" />
                  </div>
                  <div className="heading1">
                    <div className="social-area">
                      <Link to={`/blogs/${DummyData.id}`} className="social">
                        {DummyData.category}
                      </Link>
                    </div>
                    <h4>
                      <Link to={`/blogs/${DummyData.id}`}>
                        {DummyData.title}
                      </Link>
                    </h4>
                    <p className="mt-16">{DummyData.desc}</p>
                    <div className="author-area">
                      <div className="author">
                        <div className="author-tumb">
                          <img
                            src={
                              DummyData.image ||
                              `/public/img/blog/blog1-author1.png`
                            }
                            alt="vexon"
                          />
                        </div>
                        <Link
                          to={`/blogs/${DummyData.id}`}
                          className="author-text"
                        >
                          {DummyData.name}
                        </Link>
                      </div>
                      <div className="date">
                        <Link to={`/blogs/${DummyData.id}`}>
                          <img src="/public/img/icons/date1.svg" alt="vexon" />{" "}
                          {convertDate(DummyData.updated_at)}{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* pagination */}
          <div className="space60" />
          <div
            className="row"
            data-aos-offset={50}
            data-aos="fade-up"
            data-aos-duration={400}
          >
            <div className="col-12 m-auto">
              <div className="theme-pagination text-center">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-angle-left" />
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      01
                    </a>
                  </li>
                  <li>
                    <a href="#">02</a>
                  </li>
                  <li>...</li>
                  <li>
                    <a href="#">12</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== BLOG AREA END=======*/}
    </>
  );
};

export default Blog;
