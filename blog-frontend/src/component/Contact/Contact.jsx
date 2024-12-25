import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div
        className="inner-hero bg-cover"
        style={{ backgroundImage: "url(/img/bg/test-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-heading">
                <div className="page-prog">
                  <Link to="/" className="text-light">
                    Home
                  </Link>
                  <span>
                    <i className="fa-solid fa-angle-right text-light" />
                  </span>
                  <p className="bold mt-3 text-light">Contact Us</p>
                </div>
                <h1 className="text-light">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA END=======*/}
      {/*===== CONTACT AREA START=======*/}
      <div className="contact-page-sec sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto">
              <div className="heading1 text-center">
                <h2>We’d Love to Hear From You</h2>
                <p className="mt-16">
                  Whether you have questions, feedback, or just want to say
                  hello, we’re here to connect. Your thoughts and insights help
                  us make Vexon better every day, and we’re always excited to
                  hear from our readers.
                </p>
              </div>
              <div className="contact-page-from">
                <div className="heading1">
                  <h5>Leave a Reply</h5>
                  <p className="mt-10 mt-4 text-dark">
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
                        <button className="theme-btn2 mt-5" type="submit">
                          Submit Request
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row pt-20 mt-5">
                <div className="col-lg-4 col-md-6 ">
                  <div className="contact-page-box ">
                    <div className="my-2 icon">
                      <img src="/img/icons/contact-page-box1.svg" alt="vexon" />
                    </div>
                    <div className="heading">
                      <h4>Send Email</h4>
                      <a href="tel:123-456-7890">support@vexon.com</a>
                      <a href="tel:123-456-7890">contact@vexon.com</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="contact-page-box">
                    <div className="icon">
                      <img src="/img/icons/contact-page-box2.svg" alt="vexon" />
                    </div>
                    <div className="heading">
                      <h4>Office Address</h4>
                      <a href="#">
                        8708 Technology Forest Pl Suite 125 -G, The Woodlands
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="contact-page-box">
                    <div className="icon">
                      <img src="/img/icons/contact-page-box3.svg" alt="vexon" />
                    </div>
                    <div className="heading">
                      <h4>Contact Number</h4>
                      <a href="tel:123-456-7890">123-456-7890</a>
                      <a href="tel:123-456-7890">123-456-7890</a>
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

export default Contact;
