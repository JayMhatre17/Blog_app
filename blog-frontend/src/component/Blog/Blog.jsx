import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div
        className="inner-hero bg-cover"
        style={{ backgroundImage: "url(/img/bg/1.png)" }}
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
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-offset={50}
              data-aos-duration={400}
              data-aos-delay={100}
            >
              <div className="blog1-single-box">
                <div className="thumbnail image-anime">
                  <img src="/img/blog/blog1-image1.png" alt="vexon" />
                </div>
                <div className="heading1">
                  <div className="social-area">
                    <a href="categories.html" className="social">
                      Social Media
                    </a>
                    <a href="categories.html" className="time">
                      <img src="/img/icons/time1.svg" alt="vexon" /> 3 min read
                    </a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      The Art of Building a Strong Personal Brand on Social
                      Media
                    </a>
                  </h4>
                  <p className="mt-16">
                    This post explores strategies to help create an authentic
                    and memorable brand presence on social media that resonates
                    with audience.
                  </p>
                  <div className="author-area">
                    <div className="author">
                      <div className="author-tumb">
                        <img src="/img/blog/blog1-author1.png" alt="vexon" />
                      </div>
                      <a href="author.html" className="author-text">
                        Kimberly Mastrangelo
                      </a>
                    </div>
                    <div className="date">
                      <a href="#">
                        <img src="/img/icons/date1.svg" alt="vexon" /> Oct 26,
                        2024{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-offset={50}
              data-aos-duration={400}
              data-aos-delay={300}
            >
              <div className="blog1-single-box sm:mt-30">
                <div className="thumbnail image-anime">
                  <img src="/img/blog/blog1-image2.png" alt="vexon" />
                </div>
                <div className="heading1">
                  <div className="social-area">
                    <a href="categories.html" className="social">
                      Social Media
                    </a>
                    <a href="categories.html" className="time">
                      <img src="/img/icons/time1.svg" alt="vexon" /> 3 min read
                    </a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Proven Strategies to Boost Your Social Media Metrics
                    </a>
                  </h4>
                  <p className="mt-16">
                    Engagement is key to building a loyal following. Learn
                    techniques for crafting posts that invite interaction,
                    encouraging shares.
                  </p>
                  <div className="author-area">
                    <div className="author">
                      <div className="author-tumb">
                        <img src="/img/blog/blog1-author2.png" alt="vexon" />
                      </div>
                      <a href="author.html" className="author-text">
                        Kathy Pacheco
                      </a>
                    </div>
                    <div className="date">
                      <a href="#">
                        <img src="/img/icons/date1.svg" alt="vexon" /> Oct 21,
                        2024{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-offset={50}
              data-aos-duration={400}
              data-aos-delay={400}
            >
              <div className="blog1-single-box">
                <div className="thumbnail image-anime">
                  <img src="/img/blog/blog1-image3.png" alt="vexon" />
                </div>
                <div className="heading1">
                  <div className="social-area">
                    <a href="categories.html" className="social">
                      Brand’s
                    </a>
                    <a href="categories.html" className="time">
                      <img src="/img/icons/time1.svg" alt="vexon" /> 3 min read
                    </a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      The Power of Storytelling: How to Make Your Brand’s Voice
                      Stand Out
                    </a>
                  </h4>
                  <p className="mt-16">
                    Discover ways to create relatable and impactful stories that
                    reinforce your brand and keep followers coming back.
                  </p>
                  <div className="author-area">
                    <div className="author">
                      <div className="author-tumb">
                        <img src="/img/blog/blog1-author3.png" alt="vexon" />
                      </div>
                      <a href="author.html" className="author-text">
                        Corina McCoy
                      </a>
                    </div>
                    <div className="date">
                      <a href="#">
                        <img src="/img/icons/date1.svg" alt="vexon" /> Nov 2,
                        2024{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-offset={50}
              data-aos-duration={400}
              data-aos-delay={500}
            >
              <div className="blog1-single-box mt-30">
                <div className="thumbnail image-anime">
                  <img src="/img/blog/blog1-image4.png" alt="vexon" />
                </div>
                <div className="heading1">
                  <div className="social-area">
                    <a href="categories.html" className="social">
                      Content
                    </a>
                    <a href="categories.html" className="time">
                      <img src="/img/icons/time1.svg" alt="vexon" /> 3 min read
                    </a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Mastering Content Calendars: A Guide to Consistent and
                      Strategic.
                    </a>
                  </h4>
                  <p className="mt-16">
                    Consistency is crucial for success on social media. This
                    guide helps you create an effective content calendar to stay
                    organized.
                  </p>
                  <div className="author-area">
                    <div className="author">
                      <div className="author-tumb">
                        <img src="/img/blog/blog1-author4.png" alt="vexon" />
                      </div>
                      <a href="author.html" className="author-text">
                        Rodger Struck
                      </a>
                    </div>
                    <div className="date">
                      <a href="#">
                        <img src="/img/icons/date1.svg" alt="vexon" /> Nov 6,
                        2024{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-offset={50}
              data-aos-duration={400}
              data-aos-delay={250}
            >
              <div className="blog1-single-box mt-30">
                <div className="thumbnail image-anime">
                  <img src="/img/blog/blog1-image5.png" alt="vexon" />
                </div>
                <div className="heading1">
                  <div className="social-area">
                    <a href="categories.html" className="social">
                      Trending
                    </a>
                    <a href="categories.html" className="time">
                      <img src="/img/icons/time1.svg" alt="vexon" /> 3 min read
                    </a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Social Media Trends for 2024: What to Watch and How to
                      Adapt{" "}
                    </a>
                  </h4>
                  <p className="mt-16">
                    The social media landscape evolves quickly. Stay ahead of
                    the curve by understanding key trends for 2024,
                  </p>
                  <div className="author-area">
                    <div className="author">
                      <div className="author-tumb">
                        <img src="/img/blog/blog1-author5.png" alt="vexon" />
                      </div>
                      <a href="author.html" className="author-text">
                        Rhonda Rhodes
                      </a>
                    </div>
                    <div className="date">
                      <a href="author.html">
                        <img src="/img/icons/date1.svg" alt="vexon" /> Nov 6,
                        2024{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-offset={50}
              data-aos-duration={400}
              data-aos-delay={300}
            >
              <div className="blog1-single-box mt-30">
                <div className="thumbnail image-anime">
                  <img src="/img/blog/blog1-image6.png" alt="vexon" />
                </div>
                <div className="heading1">
                  <div className="social-area">
                    <a href="categories.html" className="social">
                      Brand Consistency
                    </a>
                    <a href="categories.html" className="time">
                      <img src="/img/icons/time1.svg" alt="vexon" /> 3 min read
                    </a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Creating a Visual Identity: Tips for Aesthetic and Brand
                      Consistency{" "}
                    </a>
                  </h4>
                  <p className="mt-16">
                    This post covers tips on color schemes, fonts, and visuals
                    to keep your profile visually appealing and cohesive.
                  </p>
                  <div className="author-area">
                    <div className="author">
                      <div className="author-tumb">
                        <img src="/img/blog/blog1-author5.png" alt="vexon" />
                      </div>
                      <a href="author.html" className="author-text">
                        Katie Sims
                      </a>
                    </div>
                    <div className="date">
                      <a href="#">
                        <img src="/img/icons/date1.svg" alt="vexon" /> Nov 6,
                        2024{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-offset={50}
              data-aos-duration={400}
              data-aos-delay={350}
            >
              <div className="blog1-single-box mt-30">
                <div className="thumbnail image-anime">
                  <img src="/img/blog/blog1-image7.png" alt="vexon" />
                </div>
                <div className="heading1">
                  <div className="social-area">
                    <a href="categories.html" className="social">
                      Gen - Z
                    </a>
                    <a href="categories.html" className="time">
                      <img src="/img/icons/time1.svg" alt="vexon" /> 3 min read
                    </a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      How to Build Authentic Connections with the New Generation
                    </a>
                  </h4>
                  <p className="mt-16">
                    Gen Z is reshaping digital interaction. Learn what matters
                    to this generation and how to create authentic, meaningful
                    content.
                  </p>
                  <div className="author-area">
                    <div className="author">
                      <div className="author-tumb">
                        <img src="/img/blog/blog1-author5.png" alt="vexon" />
                      </div>
                      <a href="author.html" className="author-text">
                        David Elson
                      </a>
                    </div>
                    <div className="date">
                      <a href="#">
                        <img src="/img/icons/date1.svg" alt="vexon" /> Oct 26,
                        2024{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-offset={50}
              data-aos-duration={400}
              data-aos-delay={400}
            >
              <div className="blog1-single-box mt-30">
                <div className="thumbnail image-anime">
                  <img src="/img/blog/blog1-image8.png" alt="vexon" />
                </div>
                <div className="heading1">
                  <div className="social-area">
                    <a href="categories.html" className="social">
                      Social Media
                    </a>
                    <a href="categories.html" className="time">
                      <img src="/img/icons/time1.svg" alt="vexon" /> 3 min read
                    </a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Harnessing Analytics: Using Data to Refine Your Social
                      Media Strategy
                    </a>
                  </h4>
                  <p className="mt-16">
                    Gen Z is reshaping digital interaction. Learn what matters
                    to this generation and how to create authentic, meaningful
                    content.
                  </p>
                  <div className="author-area">
                    <div className="author">
                      <div className="author-tumb">
                        <img src="/img/blog/blog1-author5.png" alt="vexon" />
                      </div>
                      <a href="author.html" className="author-text">
                        Kenneth Allen
                      </a>
                    </div>
                    <div className="date">
                      <a href="#">
                        <img src="/img/icons/date1.svg" alt="vexon" /> Oct 26,
                        2024{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-offset={50}
              data-aos-duration={400}
              data-aos-delay={450}
            >
              <div className="blog1-single-box mt-30">
                <div className="thumbnail image-anime">
                  <img src="/img/blog/blog1-image9.png" alt="vexon" />
                </div>
                <div className="heading1">
                  <div className="social-area">
                    <a href="categories.html" className="social">
                      Social Media
                    </a>
                    <a href="categories.html" className="time">
                      <img src="/img/icons/time1.svg" alt="vexon" /> 3 min read
                    </a>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      From Follower to Customer: Turning Social Engagement into
                      Sales
                    </a>
                  </h4>
                  <p className="mt-16">
                    Transforming followers into customers requires a solid
                    strategy. This post offers insights on using social media as
                    a powerful tool convert.
                  </p>
                  <div className="author-area">
                    <div className="author">
                      <div className="author-tumb">
                        <img src="/img/blog/blog1-author2.png" alt="vexon" />
                      </div>
                      <a href="author.html" className="author-text">
                        Judith Rodriguez
                      </a>
                    </div>
                    <div className="date">
                      <a href="#">
                        <img src="/img/icons/date1.svg" alt="vexon" /> Oct 26,
                        2024{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
