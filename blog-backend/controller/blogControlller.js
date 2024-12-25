import conn from "../config/db.js";

export const createBlog = (req, res, next) => {
  const { title, desc, category, banner, context, email } = req.body;
  if (!title || !desc || !category || !banner) {
    return res.status(400).json({ message: "All fields are required" });
  }
  conn
    .query(
      "INSERT INTO blog (title, `desc`, category, banner, content,user_email) VALUES (?, ?, ?, ?, ?,?)",
      [title, desc, category, banner, context, email]
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
