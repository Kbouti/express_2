// user controller file - controllers/userController.js
// ********************************************************************************
// I'm not sure if this is supposed to be established here or elsewhere, but the customError is used here in this controller so I'll include it
class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    // So the error is neat when stringified. NotFoundError: message instead of Error: message
    this.name = "NotFoundError";
  }
}
// ********************************************************************************
// Installed ejs with npm install ejs
// ********************************************************************************

const asyncHandler = require("express-async-handler");

const getUserById = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const user = await someDBQueryToGetUser(userId);

  if (!user) {
    throw new CustomNotFoundError("User not found");
  }

  res.send(`User found: ${user.name}`);
});

const getUsers = asyncHandler(async (req, res) => {
  // code
});

const createUser = asyncHandler(async (req, res) => {
  // code
});

module.exports = { getUserById, getUsers, createUser };
