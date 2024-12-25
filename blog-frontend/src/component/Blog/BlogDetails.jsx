import bgImg from "/img/bg/test-bg.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const myparams = useParams();
  // console.log(myparams.id);

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
                    {myparams.id}
                  </p>
                </div>
                <h1 style={{ color: "white" }}>{myparams.id}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-details1-all sp">
        <div className="container">
          {/* Blog Heading Section */}
          <div className="row">
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-lg-8 m-auto">
                  <div className="blog-page3-single-box text-center">
                    <div className="heading1">
                      <div className="social-area">
                        <div className="author-area">
                          <div className="author">
                            <div className="author-tumb">
                              <img
                                src="/public/img/blog/blog1-author1.png"
                                alt="vexon"
                              />
                            </div>
                            <span className="author-text">
                              Kimberly Mastrangelo
                            </span>
                          </div>
                          <div className="date">
                            <span>
                              <img
                                src="/public/img/icons/date1.svg"
                                alt="vexon"
                              />{" "}
                              Oct 26, 2024
                            </span>
                          </div>
                        </div>
                        <a href="#" className="time mt-16">
                          <img src="/public/img/icons/time1.svg" alt="vexon" />{" "}
                          3 min read
                        </a>
                      </div>
                      <h2>
                        The Art of Building a Strong Personal Brand on Social
                        Media
                      </h2>
                      <p className="mt-16">
                        In today’s digital age, building a strong personal brand
                        on social media is more crucial than ever. A compelling
                        personal brand not only establishes your credibility and
                        trustworthiness but also opens doors to new
                        opportunities, connects you with like-minded
                        individuals,
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 m-auto">
                  <div className="thumbnail image-anime _relative mt-20">
                    <img
                      src="/public/img/blog/blog-details-image1.png"
                      alt="vexon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="details content-area">
                <article>
                  <div className="heading1 mt-30">
                    <p>
                      In today’s digital age, building a strong personal brand
                      on social media is more crucial than ever. A compelling
                      personal brand not only establishes your credibility and
                      trustworthiness but also opens doors to new
                      opportunities...
                    </p>
                    <h3 className="mt-40">Understanding Your Personal Brand</h3>
                    <p className="mt-16">
                      Your personal brand is a reflection of who you are, what
                      you stand for, and how you want others to perceive you.
                      Before diving into the social media world...
                    </p>
                    <p className="mt-16">
                      Once you have clarity on these questions, you can begin
                      crafting a brand that authentically represents you.
                      Remember, authenticity is key—people connect with genuine
                      voices, so stay true to who you are and avoid the
                      temptation to imitate others.
                    </p>
                  </div>
                </article>

                {/* Additional Articles */}
                <article>
                  <div className="heading1 mt-40">
                    <h3>Choosing the Right Platforms</h3>
                    <p className="mt-16">
                      Different social media platforms serve different purposes,
                      and each has its own user demographics...
                    </p>
                    <p className="mt-16 p-with-sapn">
                      <span>LinkedIn:</span> is ideal for professionals seeking
                      to build a network within their industry.
                    </p>
                    <p className="mt-10 p-with-sapn">
                      <span>Instagram:</span> is highly visual and works well
                      for lifestyle, fashion, travel, and more.
                    </p>
                    <p className="mt-10 p-with-sapn">
                      <span>Twitter:</span> is great for sharing quick thoughts,
                      opinions, and joining conversations on trending topics.
                    </p>
                    <p className="mt-10 p-with-sapn">
                      <span>TikTok:</span> has a young, highly engaged audience
                      and is excellent for creating entertaining, relatable
                      short videos.
                    </p>
                    <p className="mt-20">
                      Choose platforms that align with your goals and where your
                      target audience is most active. Instead of spreading
                      yourself too thin across all platforms, focus on two or
                      three and consistently deliver quality content.
                    </p>
                  </div>
                </article>

                {/* Additional Content */}
                <article>
                  <div className="heading1 mt-50">
                    <h3>Crafting a Consistent Brand Image</h3>
                    <p className="mt-16">
                      Your brand image is a combination of your visuals, tone,
                      and messaging. Consistency across your profile photos,
                      color scheme, and typography helps establish a memorable
                      and professional look. Choose profile and cover photos
                      that reflect your personality and niche.
                    </p>
                    <p className="mt-16">
                      Beyond visuals, consider the tone and style of your posts.
                      Are you aiming for a formal, professional voice or a
                      casual, friendly vibe? Having a consistent tone helps your
                      audience feel connected and fosters trust. Remember,
                      consistency is not only about posting frequently but also
                      about aligning your visuals, voice, and message.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="image _relative image-anime mt-40">
                          <img
                            className="w-full"
                            src="/public/img/blog/blog-details-image2.png"
                            alt="vexon"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="image _relative image-anime mt-40">
                          <img
                            className="w-full"
                            src="/public/img/blog/blog-details-image3.png"
                            alt="vexon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Quote */}
                <div className="clint-review">
                  <p>
                    &quot;Your personal brand is the unique story that only you
                    can tell. Own it, share it, and let it shine.&quot;
                  </p>
                  <span>Henry Fawyel</span>
                </div>

                {/* Comments Section */}
                <div className="comments-area">
                  <div className="heading1 mt-4">
                    <h3>Blog Comments (2)</h3>
                  </div>
                  <div className="tags-social-area">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="tags">
                          <ul>
                            <li className="text">Tags:</li>
                            <li>
                              <a href="#">Social Media</a>
                            </li>
                            <li>
                              <a href="#">UI/UX</a>
                            </li>
                            <li>
                              <a href="#">Business</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="social footer-social1">
                          <ul>
                            <li className="text">Social:</li>
                            <li>
                              <a href="#">
                                <i className="fa-brands fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-brands fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-brands fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space30" />
                  <div className="comment-box">
                    <div className="top-area">
                      <div className="author-area">
                        <div className="image">
                          <img
                            src="/public/img/blog/comment-author1.png"
                            alt="vexon"
                          />
                        </div>
                        <div className="heading1 ml-20">
                          <h4>
                            <a href="#">Mr. Ana Ritchie</a>
                          </h4>
                          <p className="mt-2">8/1/2024</p>
                        </div>
                      </div>
                      <a href="#" className="reply-btn">
                        <i className="fa-solid fa-reply" /> Reply
                      </a>
                    </div>
                    <div className="heading1 mt-20">
                      <p>
                        “This article is exactly what I needed! I&apos;ve been
                        trying to build my personal brand for a while but was
                        getting stuck. The tips on content creation and
                        engagement are super helpful—thanks for sharing!&quot;
                      </p>
                    </div>
                  </div>
                  <div className="comment-box ml-60">
                    <div className="top-area">
                      <div className="author-area">
                        <div className="image">
                          <img
                            src="/public/img/blog/comment-author2.png"
                            alt="vexon"
                          />
                        </div>
                        <div className="heading1 ml-20">
                          <h4>
                            <a href="#">Matthew Kuhnemann</a>
                          </h4>
                          <p className="mt-2">8/2/2024</p>
                        </div>
                      </div>
                      <a href="#" className="reply-btn">
                        <i className="fa-solid fa-reply" /> Reply
                      </a>
                    </div>
                    <div className="heading1 mt-20">
                      <p>
                        “I love how this breaks down the importance of
                        consistency and authenticity. It&apos;s easy to get
                        caught up in trends, but staying true to yourself really
                        is key. Great read!&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Leave a Reply Section */}
                <div className="details-contact-area">
                  <div className="heading1">
                    <h5>Leave a Reply</h5>
                    <p className="mt-10">
                      Provide clear contact information, including phone number,
                      email, and address.
                    </p>
                  </div>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-input">
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input">
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input">
                          <input type="number" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-input">
                          <input type="text" placeholder="Subject" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-input">
                          <textarea
                            rows={5}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="button mt-30">
                          <button className="theme-btn1" type="submit">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
