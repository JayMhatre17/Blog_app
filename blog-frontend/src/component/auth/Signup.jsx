import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

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

      console.log("Server response:", response.data); // Log the server response
    } catch (error) {
      console.error("Error sending data:", error); // Log any errors
    }
  };

  return (
    <>
      <div
        className="login-page sp bg-cover"
        style={{ backgroundImage: "url(/img/bg/square.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-main-heading">
                <div className="page-prog">
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  <p className="bold mt-3">Sign Up</p>
                </div>
                <h1>Sign Up</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 m-auto mt-3">
              <div className="login-form">
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
                  <div className="button mt-4">
                    <button
                      type="submit"
                      className="theme-btn1"
                      onClick={formHandler}
                    >
                      Create An Account
                    </button>
                  </div>
                  <div className="text-start">
                    <p className="text">
                      <input type="checkbox" name="checkbox1" id="checkbox1" />{" "}
                      <label aria-colspan="checkbox1" htmlFor="checkbox1">
                        I have read and agree to the{" "}
                      </label>
                      <Link to="#">Terms &amp; Consitions.</Link>
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

export default Signup;
