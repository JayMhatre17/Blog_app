import express from "express";
import {
  createBlog,
  editBlog,
  editBlogLikes,
  getBlogs,
  getUserBlogs,
} from "../controller/blogControlller.js";
const blogrouter = express.Router();
blogrouter.get("/getblogs", getBlogs);
blogrouter.post("/createblog", createBlog);
blogrouter.post("/editbloglikes", editBlogLikes);
blogrouter.post("/editblog", editBlog);
blogrouter.get("/user/:user", getUserBlogs);
export default blogrouter;
