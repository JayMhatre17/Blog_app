/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const EditProfile = ({ show, setShow, getUserData, userData }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const user = useSelector((state) => state.user.user);
  const [name, setName] = useState(userData.name || "");
  const [image, setImage] = useState(userData.image || "");
  const [fb, setFb] = useState(userData.social_link?.fb || "");
  const [insta, setInsta] = useState(userData.social_link?.insta || "");
  const [li, setLi] = useState(userData.social_link?.li || "");
  const [tw, setTw] = useState(userData.social_link?.tw || "");

  const openWidget = () => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dvdpcmpng",
        uploadPreset: "photo123",
        multiple: false,
        showUploadMoreButton: false,
        folder: "user2",
        clientAllowedFormats: ["image"],
        sources: ["local", "url", "camera", "google_drive"],
      },
      (err, result) => {
        if (result?.event === "success") {
          const imgpath = result.info.secure_url;
          setImage(imgpath);
        }
        if (err) console.log(err);
      }
    );
    widgetRef.current.open();
  };

  const handleEdit = () => {
    const data = {
      name: name,
      email: user,
      image: image,
      social_link: { fb: fb, insta: insta, li: li, tw: tw },
    };

    axios
      .put("/api/updateuser", data)
      .then((res) => {
        if (res.data) {
          toast.success("Profile Updated Successfully");
          getUserData(); // Refresh the user data in the Profile component
          setShow(false); // Close the modal
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formImage">
            <div className="d-flex justify-content-center">
              <img
                className="rounded-circle shadow img-fluid"
                width={"150px"}
                src={image || `/img/hero/hero4-image1.png`}
              />
            </div>
            <Form.Label>Profile Image</Form.Label>
            <Button onClick={openWidget}>Upload Image</Button>
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFb">
            <Form.Label>Facebook</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Facebook URL"
              value={fb}
              onChange={(e) => setFb(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formInsta">
            <Form.Label>Instagram</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Instagram URL"
              value={insta}
              onChange={(e) => setInsta(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formLi">
            <Form.Label>LinkedIn</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter LinkedIn URL"
              value={li}
              onChange={(e) => setLi(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formTw">
            <Form.Label>Twitter</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Twitter URL"
              value={tw}
              onChange={(e) => setTw(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEdit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfile;
