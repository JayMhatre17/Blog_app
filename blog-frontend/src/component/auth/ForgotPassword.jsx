/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Verify from "./Verify";

const ForgotPassword = ({ show, setShow }) => {
  const [showVerify, setShowVerify] = useState(false);
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} backdrop="static">
        <div className="login-form">
          <Modal.Header closeButton>
            <div className="text-center">
              <div className="forgot-icon">
                <img src="/img/icons/forgot-icon.svg" alt="vexon" />
              </div>
              <Modal.Title>Forgot Your Password?</Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              If you forgot your password, please enter your email below and we
              will send you a recovery link.
            </p>
            <div className="single-input">
              <label>Email Address</label>
              <input
                type="email"
                className="my-2"
                placeholder="Email Address"
              />
            </div>
            <button
              className="theme-btn1 my-3"
              onClick={() => {
                setShowVerify(true);
                setShow(false);
              }}
            >
              Send OTP
            </button>
          </Modal.Body>
          <Modal.Footer className="text-center">
            <Button
              onClick={() => setShow(false)}
              className="btn btn-primary text-decoration-none"
            >
              Login
            </Button>

            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
      <Verify showVerify={showVerify} setShowVerify={setShowVerify} />
    </>
  );
};

export default ForgotPassword;
