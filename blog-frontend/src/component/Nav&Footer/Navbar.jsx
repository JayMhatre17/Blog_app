import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/userSlice";
import axios from "axios";
import { toast } from "react-toastify";
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
      const res = await axios.get("/api/logout", {
        withCredentials: true,
      });
      if (res.data) {
        dispatch(removeUser());

        toast.success("Logout Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
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
                    </li>

                    <li className="dropdown-menu-parrent">
                      <Link to="/blogs"> Blogs</Link>
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
                              <Link
                                to={`/category/${val}`}
                                className="text-dark"
                              >
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
                    </li>
                  </ul>
                </div>

                <div className="header1-buttons">
                  {user === null ? (
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
                            src="/img/hero/hero4-image1.png"
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
                        <Dropdown.Item>
                          <Link to={`/user/profile/${user}`}>Profile</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/create/blog">Create Blog</Link>
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item>
                          <button className="theme-btn7" onClick={handelLogout}>
                            {" "}
                            Log Out
                          </button>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  )}
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
