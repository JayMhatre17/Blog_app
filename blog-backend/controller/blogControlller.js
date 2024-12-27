import conn from "../config/db.js";

export const createBlog = (req, res, next) => {
  const { title, desc, category, banner, content, email } = req.body;

  if (!title || !desc || !category || !banner || !content) {
    return res.status(400).json({ message: "All fields are required" });
  }
  conn
    .query(
      "INSERT INTO blog(title, `desc`, category, banner, content, user_email) VALUES (?, ?, ?, ?, ?, ?)",
      [title, desc, category, banner, JSON.stringify(content), email]
    )
    .then(([result]) => {
      if (!result) {
        res.status(400).send({
          message: "Invalid request",
        });
      }
      res.status(201).json({
        message: "blog created",
      });
    })
    .catch((err) => next(err));
};

export const getBlogs = (req, res, next) => {
  conn
    .query(
      "select b.id, b.title, b.desc, b.category, b.banner, b.content,b.created_at,b.updated_at,u.name,u.email,u.image from blog as b join  user as u where b.user_email = u.email"
    )
    .then(([result]) => {
      if (!result) {
        res.status(400).send({
          message: "Invalid request",
        });
      }
      res.status(200).json({
        message: "blogs fetched",
        data: result,
      });
    })
    .catch((err) => next(err));
};

export const editBlogLikes = (req, res, next) => {
  const { blogId, like } = req.body;
  if (!blogId || !like) {
    return res.status(400).json({ message: "All fields are required" });
  }
  conn
    .query("update blog set like = ? where id = ?", [like, blogId])
    .then(([result]) => {
      if (!result) {
        res.status(400).send({
          message: "Invalid request",
        });
      }
      res.status(200).json({
        message: "blog updated",
      });
    })
    .catch((err) => next(err));
};

export const editBlog = (req, res, next) => {
  const { title, desc, category, banner, content, blogId } = req.body;

  if (!title || !desc || !category || !banner || !content || !blogId) {
    return res.status(400).json({ message: "All fields are required" });
  }
  conn
    .query(
      "update blog set title = ?, `desc` = ?, category = ?, banner = ?, content = ? where id = ?",
      [title, desc, category, banner, JSON.stringify(content), blogId]
    )
    .then(([result]) => {
      if (!result) {
        res.status(400).send({
          message: "Invalid request",
        });
      }
      res.status(200).json({
        message: "blog updated",
      });
    })
    .catch((err) => next(err));
};

export const getUserBlogs = (req, res, next) => {
  const user = req.params.user;
  conn
    .query(
      "select id,title, `desc`, category, banner, content,created_at,updated_at,user_email from blog where user_email = ?",
      [user]
    )
    .then(([result]) => {
      if (!result) {
        res.status(400).send({
          message: "No blogs found",
        });
      }
      res.status(200).json({
        message: "blogs fetched",
        data: result,
      });
    })
    .catch((err) => next(err));
};

export const deleteBlog = (req, res, next) => {
  const { id: blogId } = req.params;
  console.log(blogId);
  conn
    .query("delete from blog where id = ?", [blogId])
    .then(([result]) => {
      if (!result) {
        return res.status(400).send({
          message: "Invalid request",
        });
      }
      res.status(200).json({
        message: "blog deleted",
      });
    })
    .catch((err) => next(err));
};
