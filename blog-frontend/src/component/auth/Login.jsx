import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./ForgotPassword";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/userSlice";
import { DataContext } from "../context/store";

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const { setEmail } = useContext(DataContext);
  const [show, setShow] = useState(false);
  const [emailTemp, setEmailTemp] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();

    sendData(emailTemp, pass);

    setEmail("");
    setPass("");
  };

  const sendData = async (email, pass) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/checkuser",
        { email, password: pass },
        {
          withCredentials: true,
        }
      );
      if (response.data.message) {
        setEmail(email);
        dispatch(setUser(email));
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
        });
        console.log(user);
        navigate("/");
      } else {
        toast.error("Invalid email or password", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div
        className="inner-hero bg-cover"
        style={{ backgroundImage: "url(/img/bg/test-bg.png)" }}
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
                    Login
                  </p>
                </div>
                <h1 style={{ color: "white" }}>Login</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 m-auto">
            <div
              className="login-form mt-5"
              style={{ backgroundColor: "#ebebeb" }}
            >
              <h3>Welcome Back</h3>
              <p>Please fill your email and password to sign in.</p>
              <form action="#">
                <div className="single-input">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Email address"
                    value={emailTemp}
                    onChange={(e) => setEmailTemp(e.target.value)}
                  />
                </div>
                <div className="single-input">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>

                <p
                  className="cursor-pointer text-light"
                  onClick={() => setShow(true)}
                >
                  Forgot Password
                </p>

                <div className="button mt-4">
                  <button
                    type="submit"
                    className="theme-btn1"
                    onClick={formHandler}
                  >
                    Sign In
                  </button>
                </div>
                <div className="text-center">
                  <p className="text">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-decoration-none mx-2">
                      Sign Up Today.
                    </Link>{" "}
                    <br />
                    <ForgotPassword show={show} setShow={setShow} />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
