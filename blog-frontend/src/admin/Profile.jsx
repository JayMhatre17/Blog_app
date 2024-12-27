import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import fb_icon from "/social/facebook.png";
import instagram_icon from "/social/instagram.png";
import linkedin from "/social/linkedin.png";
import twitter from "/social/twitter.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice.js";
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [blogs, setBlogs] = useState([]);
  const [userData, setUserData] = useState({});
  const [show, setShow] = useState(false);

  const getUserData = () => {
    axios
      .get(`/api/user/${user}`, {
        headers: {
          "Cache-Control": "no-cache", // Disables cache
        },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const blogUserData = () => {
    axios
      .get(`/api/blog/user/${user}?timestamp=${new Date().getTime()}`) // Adding timestamp to avoid caching
      .then((res) => {
        console.log("Fetched blog data:", res.data.data); // Log fetched data for debugging
        setBlogs(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching blog data:", err);
      });
  };

  const handelLogout = async () => {
    try {
      const res = await axios.get("/api/logout", {
        withCredentials: true,
      });
      if (res.data) {
        dispatch(removeUser());
        navigate("/");
        toast.success("Logout Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  const DeleteBlog = (id) => {
    axios
      .delete(`/api/blog/delete/${id}`)
      .then((res) => {
        blogUserData();
        if (res) {
          toast.success("Blog Deleted Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
        blogUserData(); // Re-fetch blogs in case of an error
      });
  };

  useEffect(() => {
    getUserData();
    blogUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div
        className="inner-hero bg-cover"
        style={{ backgroundImage: "url(/img/bg/test-bg.png)" }}
      >
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
                    Profile
                  </p>
                </div>
                <h1 style={{ color: "white" }}>Welcome {userData.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto row gap-5 pt-5">
        <div className="col-md-3">
          <div
            style={{ backgroundColor: "#95d7e4", minWidth: "300px" }}
            className="col d-flex flex-column align-items-center text-center p-3 py-5 border border-2 mt-5 rounded shadow"
          >
            <img
              className="rounded-circle mt-5 shadow"
              width="150px"
              src={userData.image || "/img/hero/hero4-image1.png"}
              alt="Profile"
            />
            <span className="font-weight-bold mt-3">{userData.name}</span>
            <span className="text-black-50 ">{userData.email}</span>
            <div className="pt-2">
              <button
                className="btn btn-info m-1 shadow"
                onClick={() => setShow(true)}
              >
                Edit Profile
              </button>
              <EditProfile
                show={show}
                setShow={setShow}
                getUserData={getUserData}
                userData={userData}
              />
              <button
                className="btn btn-info m-1 shadow"
                onClick={handelLogout}
              >
                Logout
              </button>
              <div className="col-md-12">
                <h4>Social Links</h4>
                <div className="w-100 social_links">
                  <a
                    href={
                      userData.social_link?.fb || "https://www.facebook.com"
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={fb_icon} alt="Facebook" className="m-1" />
                  </a>
                  <a
                    href={
                      userData.social_link?.insta || "https://www.instagram.com"
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={instagram_icon} alt="Instagram" className="m-1" />
                  </a>
                  <a
                    href={
                      userData.social_link?.li || "https://www.linkedin.com"
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={linkedin} alt="LinkedIn" className="m-1" />
                  </a>
                  <a
                    href={userData.social_link?.tw || "https://www.twitter.com"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={twitter} alt="Twitter" className="m-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-3 p-2 d-flex flex-column shadow col">
          <h2 className="m-2 p-2">Blogs</h2>

          {/* Scrollable Blog Cards Container */}
          <div className="overflow-auto m-2 p-2" style={{ maxHeight: "500px" }}>
            {blogs.map((val, index) => (
              <div
                className="card mb-3"
                style={{ maxWidth: 700, backgroundColor: "rgb(233, 233, 233)" }}
                key={index}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={val.banner || "..."}
                      className="img-fluid rounded-start "
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-text">{val.desc}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    <div className="col-md-8 p-2">
                      <button className="btn btn-info m-1">Edit Blog</button>
                      <button
                        className="btn btn-info m-1"
                        onClick={() => DeleteBlog(val.id)}
                      >
                        Delete Blog
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
