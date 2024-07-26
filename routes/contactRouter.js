const {Router} = require("express");
const contactRouter = Router();

contactRouter = Router();

contactRouter.get("/", (req, res) => res.send("contact route?"));

module.exports = contactRouter;