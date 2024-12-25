import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/userSlice";
const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(false);
  const blogCategories = [
    "Lifestyle",
    "Technology",
    "Business & Finance",
    "Food & Drink",
    "Fashion & Beauty",
    "Education",
    "Entertainment",
    "Home & Garden",
    "Sports",
    "Arts & Culture",
    "Science & Nature",
    "Politics & Society",
    "Self-Improvement",
    "Pets & Animals",
    "Technology Reviews",
    "Travel",
    "Marketing & SEO",
    "Health & Fitness",
    "Gaming",
    "Photography & Videography",
  ];
  const handelStickey = () => {
    // console.log(12)
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    if (window.scrollY > 50) {
      setScroll(true);
    }
    window.addEventListener("scroll", handelStickey);

    return () => {
      window.removeEventListener("scroll", handelStickey);
    };
  }, []);

  const handelLogout = async () => {
    try {
      dispatch(removeUser());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <div
        className={`${
          scroll && "sticky"
        } header-area header-area2 d-none d-lg-block`}
        id="header"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-elements">
                <div className="site-logo">
                  <Link to="/">
                    <img src="/public/img/logo/header-logo1.png" alt="vexon" />
                  </Link>
                </div>

                <div className="main-menu-ex main-menu-ex1">
                  <ul>
                    <li>
                      <Link to="/"> Home</Link>

                      {/* <div className="tp-submenu">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="all-images-menu">
                              {['demo1', 'demo2', 'demo3', 'demo4'].map((demo, index) => (
                                <div className="homemenu-thumb" key={index} style={index === 3 ? { margin: 0 } : {}}>
                                  <div className="img1">
                                    <img src={`assets/img/demo/${demo}.jpg`} alt="vexon" />
                                  </div>
                                  <div className="homemenu-btn">
                                    <a className="header-btn1" href={`index${index + 1}.html`}>
                                      View Page <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                  </div>
                                  <a className="text" href={`index${index + 1}.html`}>
                                    Modern Blog 0{index + 1}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </li>

                    <li className="dropdown-menu-parrent">
                      <Link to="/blogs"> Blogs</Link>
                      {/* <Link to="#" className="main1">
                        Blogs <i className="fa-solid fa-angle-down"></i>
                      </Link>
                      <ul>
                        <li><Link to="blog.html">Blog Format 1</Link></li>
                        <li><Link to="blog2.html">Blog Format 2</Link></li>
                        <li><Link to="blog3.html">Blog Format 3</Link></li>
                      </ul> */}
                    </li>

                    <li className="dropdown-menu-parrent">
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="bg-transparent border-0"
                        >
                          <span className="me-2"> Categories</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                          align="end"
                          style={{ maxHeight: "240px", overflowY: "auto" }}
                        >
                          {blogCategories.map((val, index) => (
                            <Dropdown.Item key={index}>
                              <Link to={`/blogs/${val}`} className="text-dark">
                                {val}
                              </Link>
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>

                    <li className="dropdown-menu-parrent">
                      <Link to="/contact" className="main1">
                        Contact Us
                      </Link>
                      {/* <ul>
                        <li><Link to="categories.html">Categories 01</Link></li>
                        <li><Link to="categories2.html">Categories 02</Link></li>
                      </ul> */}
                    </li>

                    {/* <li className="dropdown-menu-parrent">
                      <Link to="#" className="main1">
                        Pages <i className="fa-solid fa-angle-down"></i>
                      </Link>
                      <ul>
                        <li><Link to="author.html">Author</Link></li>
                        <li><Link to="search.html">Search Result</Link></li>
                        <li><Link to="contact.html">Contact Us</Link></li>
                        <li><Link to="social-media.html">Social Media</Link></li>
                        <li><Link to="404-2.html">404</Link></li>
                      </ul>
                    </li> */}

                    {/* <li className="dropdown-menu-parrent">
                      <Link to="#" className="main1">
                        Account <i className="fa-solid fa-angle-down"></i>
                      </Link>
                      <ul>
                        <li><Link to="login.html">Login</Link></li>
                        <li><Link to="sigup.html">Sign Up</Link></li>
                        <li><Link to="forgot.html">Forgot</Link></li>
                        <li><Link to="reset.html">Reset Password</Link></li>
                        <li><Link to="verify.html">Verify</Link></li>
                      </ul>
                    </li> */}
                  </ul>
                </div>

                <div className="header1-buttons">
                  {/* <div className="vl-search-top">
                    <button className="search-open-btn">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </button>
                  </div> */}
                  {user !== null ? (
                    <Link className="theme-btn7" to="/login">
                      Login
                    </Link>
                  ) : (
                    <div>
                      <DropdownButton
                        id="dropdown-button-dark-example2"
                        variant=""
                        title={
                          <img
                            src={user.profile_picture}
                            alt="Dropdown Icon"
                            style={{
                              borderRadius: "50%",
                              width: "40px",
                              height: "40px",
                            }}
                          />
                        }
                        className="mt-2"
                        data-bs-theme="dark"
                      >
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <Dropdown.Item>Edit Profile</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                          <button onClick={handelLogout}> Log Out</button>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  )}

                  {/* <Dropdown data-bs-theme="dark">
                          <div className='rounded-circle bg-secondary'>
                            <img src={profile} alt="not-f" />
                          </div>
                          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
                          
                            User Name
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" active>
                              Profile
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Log out</Dropdown.Item>
                          </Dropdown.Menu>
                    </Dropdown> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
