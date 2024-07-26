// routes/authorsRouter.js
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Index"));
// indexRouter.get("/:bookId", (req, res) => {
//   const { bookId } = req.params;
//   res.send(`Book ID: ${bookId}`);
// });

module.exports = indexRouter;
