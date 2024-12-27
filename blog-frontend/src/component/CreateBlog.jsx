import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CreateBlog = () => {
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
  const user = useSelector((state) => state.user.user);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [mImage, setmImage] = useState("");
  const [mtitle, setmTitle] = useState("");
  const [mdesc, setmDesc] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [blog, setBlog] = useState({ content: [] });

  const openWidget = (val) => {
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
          if (val === "bannerImage") {
            setmImage(imgpath); // Set the banner image path
          } else {
            setImage(imgpath); // Set the content image path
          }
        }
        if (err) console.log(err);
      }
    );
    widgetRef.current.open();
  };

  // Handle adding content to the blog
  const handleAdd = (e) => {
    e.preventDefault();

    setBlog((pre) => {
      return {
        ...pre,
        title: mtitle,
        desc: mdesc,
        category: categories,
        banner: mImage,
        email: user,
        content: [...pre.content, { title: title, desc: desc, image: image }],
      };
    });

    setTitle("");
    setDesc("");
    setImage("");
  };

  // Handle blog submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let res;
    setBlog((pre) => {
      const blogdata = {
        ...pre,
        title: mtitle,
        desc: mdesc,
        category: categories,
        banner: mImage,
        email: user,
        content: [...pre.content, { title: title, desc: desc, image: image }],
      };

      res = axios
        .post("http://localhost:3000/api/blog/createblog", blogdata)
        .then(() => console.log("blog saved"))
        .catch((err) => console.log(err));

      return blogdata;
    });
    if (res) {
      toast.success("Blog created successfully");
      navigate("/");
    } else {
      toast.error("Error creating blog");
    }
    setTitle("");
    setDesc("");
    setImage("");
    setmTitle("");
    setmDesc("");
    setmImage("");
    setCategories("");
    setBlog({ content: [] });
  };

  const handleCategory = (val) => {
    setCategories(val);
  };
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: "url(/img/bg/hero2-bg.jpg)",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <div className="mb-5  p-5"></div>
      <div className="m-4 p-2">
        <div className="shadow p-4 rounded">
          <h1>Create New Blog</h1>
          <div className="mb-3">
            <label className="form-label mt-2 fw-bold">Blog Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
              value={mtitle}
              onChange={(e) => setmTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Blog Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={mdesc}
              onChange={(e) => setmDesc(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3 d-flex gap-4">
            <h5>Category: </h5>

            <Dropdown drop="end">
              <Dropdown.Toggle>
                <span className="me-2 "> {categories || "Categories"}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu
                align="end"
                style={{ maxHeight: "240px", overflowY: "auto" }}
              >
                {blogCategories.map((val, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleCategory(val)}
                  >
                    {val}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="mb-3 d-flex align-items-center gap-3">
            <div>
              <label className="form-label fw-bold">Insert Banner</label>
            </div>
            <div>
              <button
                className="btn btn-info text-light btn-outline-primary border-0"
                onClick={() => openWidget("bannerImage")}
              >
                Upload Image
                <i className="ms-2 fa-solid fa-arrow-up-from-bracket "></i>
              </button>
            </div>
          </div>
        </div>
        <div className="shadow p-4 mt-3 rounded">
          <h2>
            Content Area{" "}
            {isNaN(blog?.content?.length) ? 1 : blog?.content?.length + 1}
          </h2>

          <div>
            <div>
              <div className="mb-3">
                <label className="form-label fw-bold">Content Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Content Description
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3 d-flex align-items-center gap-2">
                <div>
                  <label className="form-label fw-bold">
                    Insert Content Image
                  </label>
                </div>
                <br />
                <div>
                  <button
                    className="btn btn-info text-light btn-outline-primary border-0"
                    onClick={() => openWidget("abc")}
                  >
                    Upload Image
                    <i className="ms-2 fa-solid fa-arrow-up-from-bracket "></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-info m-2 shadow text-light btn-outline-primary border-0"
            onClick={handleAdd}
          >
            Add More Content
          </button>
          <button
            className="btn btn-info m-2 shadow text-light btn-outline-primary border-0"
            onClick={handleSubmit}
          >
            Submit Blog Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
