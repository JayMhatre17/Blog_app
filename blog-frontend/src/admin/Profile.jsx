import { useRef, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import fb_icon from "/social/facebook.png";
import instagram_icon from "/social/instagram.png";
import linkedin from "/social/linkedin.png";
import twitter from "/social/twitter.png";

const Profile = () => {
  const inputRef = useRef(null);
  const blogs = [1, 2, 3, 4, 5, 6];
  const [show, setShow] = useState(false);
  const handleEditImg = () => {
    inputRef.current.click();
  };

  const social = {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instargram.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.x.com",
  };
  return (
    <div className="container m-auto row gap-5 pt-5">
      {/* Profile Section */}
      <div className="mt-4"></div>
      <div className="col-md-3">
        <div
          style={{ backgroundColor: "#95d7e4", minWidth: "300px" }}
          className="col d-flex flex-column align-items-center text-center p-3 py-5 border border-2 mt-5 rounded shadow"
        >
          <img
            className="rounded-circle mt-5 shadow"
            width="150px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          />
          <span className="font-weight-bold mt-3">Edogaru</span>
          <span className="text-black-50 ">edogaru@mail.com.my</span>
          <span> </span>
          <div className="pt-2">
            <button
              className="btn btn-info m-1 shadow"
              onClick={() => setShow(true)}
            >
              Edit Profile
            </button>
            {/* Edit Profile modal */}
            <Modal show={show} backdrop="static" onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <div className="d-flex justify-content-center">
                    <img
                      className="rounded-circle shadow img-fluid"
                      width={"150px"}
                      src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    />
                  </div>
                  <div onClick={handleEditImg} className="position-relative">
                    <i className="fa-regular fa-pen-to-square position-absolute ps-5 ms-3 pb-4 top-50 start-50 translate-middle fs-2"></i>
                    <input
                      type="file"
                      ref={inputRef}
                      style={{ display: "none" }}
                    />
                  </div>
                </Form.Group>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Edit Username</Form.Label>
                    <Form.Control type="text" autoFocus />
                    {/* Facebook  */}
                    <Form.Label className="mt-2">Facebook URL</Form.Label>
                    <Form.Control type="text" placeholder="Paste here.." />
                    {/* Instagram  */}
                    <Form.Label className="mt-2">Instagram URL</Form.Label>
                    <Form.Control type="text" placeholder="Paste here.." />
                    {/* LinkedIn  */}
                    <Form.Label className="mt-2">LinkedIn URL</Form.Label>
                    <Form.Control type="text" placeholder="Paste here.." />
                    {/* Twitter  */}
                    <Form.Label className="mt-2">Twitter URL</Form.Label>
                    <Form.Control type="text" placeholder="Paste here.." />
                  </Form.Group>
                </Form>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => setShow(false)}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

            <button className="btn btn-info m-1 shadow">Logout</button>
            <div className="col-md-12">
              <h4>Social Links</h4>
              <div className="w-100 social_links">
                <Link to={social.facebook}>
                  <img src={fb_icon} alt="" className="m-1" />
                </Link>
                <Link to={social.instagram}>
                  <img src={instagram_icon} alt="" className="m-1" />
                </Link>
                <Link to={social.linkedin}>
                  <img src={linkedin} alt="" className="m-1" />
                </Link>
                <Link to={social.twitter}>
                  <img src={twitter} alt="" className="m-1" />
                </Link>
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
                    src="..."
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                  <div className="col-md-8 p-2">
                    <button className="btn btn-info m-1">Edit Blog</button>
                    <button className="btn btn-info m-1">Delete Blog</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
