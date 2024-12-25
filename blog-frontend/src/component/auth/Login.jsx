import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import ForgotPassword from "./ForgotPassword";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { DataContext } from "../context/store";
const Login = () => {
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
      if (response.data === "login succesful") {
        setEmail(email);
        dispatch(setUser(response.data));
        console.log(email);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
      <div
        className="login-page sp bg-cover"
        style={{ backgroundImage: "url(/img/bg/cta4-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-main-heading">
                <div className="page-prog ">
                  <Link to="/" className="text-decoration-none text-light">
                    Home
                  </Link>
                  <span>
                    <i className="fa-solid fa-angle-right text-light" />
                  </span>
                  <p className="bold mt-3 text-light">Login</p>
                </div>
                <h1 className="text-light">Login</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 m-auto">
              <div className="login-form mt-5">
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
                      <Button
                        variant="primary"
                        className="mx-2"
                        onClick={() => setShow(true)}
                      >
                        Forgot Password
                      </Button>
                      <ForgotPassword show={show} setShow={setShow} />
                    </p>
                    <p className="or">
                      <span>Or</span>
                    </p>
                    <Link to="#" className="google-btn text-decoration-none">
                      <img src="/img/icons/google.svg" alt="vexon" /> Sign Up
                      With Google
                    </Link>
                    <Link
                      to="#"
                      className="google-btn mt-2 text-decoration-none"
                    >
                      <img src="/img/icons/facebook.svg" alt="vexon" /> Sign Up
                      With Facebook
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
