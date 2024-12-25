// errorHandler.js
export const errorHandler = function (err, req, res, next) {
  console.error(err.stack);
  console.log("Error: ");
  res.status(500).json({ message: "Something went wrong!" });
};
