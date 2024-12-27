import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const formHandler = (e) => {
    e.preventDefault();

    // Directly call sendData with form field values
    sendData(name, email, pass);

    // Clear the form fields after submission
    setName("");
    setEmail("");
    setPass("");
  };

  // Updated sendData function to accept data as parameters
  const sendData = async (name, email, pass) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/createuser",
        { name, email, password: pass },
        {
          withCredentials: true, // Ensure cookies are sent with the request
        }
      );
      if (response.data.message) {
        toast.success("Registration successful!", {
          position: "top-right",
          autoClose: 3000,
        });
        navigate("/login");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Something Went Wrong", {
        position: "top-right",
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
                    Signup
                  </p>
                </div>
                <h1 style={{ color: "white" }}>Signup</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 m-auto mt-3">
            <div
              className="login-form rounded-lg"
              style={{ backgroundColor: "#ebebeb" }}
            >
              <h3>Create Your Account</h3>
              <p>Create an account today and start using Vexon</p>
              <form action="#">
                <div className="single-input">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="single-input">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <div className="text-start">
                  <p className="text">
                    <input type="checkbox" name="checkbox1" id="checkbox1" />{" "}
                    <label aria-colspan="checkbox1" htmlFor="checkbox1">
                      I have read and agree to the{" "}
                    </label>
                    <Link to="#">Terms &amp; Conditions</Link>
                  </p>
                </div>
                <div className="button mt-4">
                  <button
                    type="submit"
                    className="theme-btn1"
                    onClick={formHandler}
                  >
                    Create An Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
