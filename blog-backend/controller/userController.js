import conn from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const getUser = (req, res, next) => {
  const userId = req.params.id;
  conn
    .query("select * from user where id = ?", [userId])
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
          res.status(201).json({
            id: result.insertId,
            name,
            email,
            hash,
          });
          let token = jwt.sign({ id: result.insertId }, process.env.JWT_TOKEN);
          res.cookie("token", token, { httpOnly: true });
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
          return res.status(200).send({ message: "Login Successfull" });
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

