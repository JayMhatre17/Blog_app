import express from "express";
import { createBlog } from "../controller/blogControlller.js";
const blogrouter = express.Router();

blogrouter.post("/createblog", createBlog);
export default blogrouter;
