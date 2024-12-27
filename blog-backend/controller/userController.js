import conn from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const getUser = (req, res, next) => {
  const userId = req.params.id;
  conn
    .query("select * from user where email = ?", [userId])
    .then(([row]) => {
      if (row.length > 0) {
        res.json(row[0]);
      } else {
        res.status(404).json({
          message: "user not found",
        });
      }
    })
    .catch((err) => next(err));
};
export const addUser = (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      conn
        .query("insert into user(name,email,password) values(?,?,?)", [
          name,
          email,
          hash,
        ])
        .then(([result]) => {
          if (!result) return res.status(404).send("Something went wrong");

          let token = jwt.sign({ id: result.insertId }, process.env.JWT_TOKEN);
          res.cookie("token", token, { httpOnly: true });
          res.status(201).json({
            id: result.insertId,
            name,
            email,
            hash,
          });
        })
        .catch((err) => next(err));
    });
  });
};
export const checkUser = (req, res, next) => {
  const { email, password } = req.body;

  conn
    .query("select * from user where email = ?", [email])
    .then(([row]) => {
      const user = row[0];
      if (!user) return res.status(404).send("Something went");
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN);
          res.cookie("token", token, { httpOnly: true });
          res.status(200).send({ message: "Login Successfull" });
        } else {
          res.send("Something Went wrong");
        }
      });
    })
    .catch((err) => {
      next(err);
    });
};
export const changeUserPassword = (req, res, next) => {
  const { email, password } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      conn
        .query("update user set password = ? where email = ?", [hash, email])
        .then(() => res.status(200).send({ message: "Password updated" }))
        .catch((err) => next(err));
    });
  });
};

export const logout = (req, res, next) => {
  try {
    console.log("logout");
    res.clearCookie("token");
    res.send("Logout successfull");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const editUser = (req, res, next) => {
  const { name, email, image, social_link } = req.body;
  const updates = {};
  if (name) updates.name = name;
  if (image) updates.image = image;
  if (social_link) updates.social_link = JSON.stringify(social_link);

  const updateKeys = Object.keys(updates);
  if (updateKeys.length === 0) {
    return res.status(400).json({ message: "No fields to update" });
  }

  const updateValues = updateKeys.map((key) => updates[key]);
  const setClause = updateKeys.map((key) => `${key} = ?`).join(", ");

  conn
    .query(`UPDATE user SET ${setClause} WHERE email = ?`, [
      ...updateValues,
      email,
    ])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User updated successfully" });
    })
    .catch((err) => next(err));
};
