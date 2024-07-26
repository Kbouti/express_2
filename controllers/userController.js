
//   Here we install express-async-handler with:
// npm install --save express-async-handler
const asyncHandler = require("express-async-handler");

// Any errors that is thrown in this function will automatically be caught and call the `next` function
const getUserById = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const user = await someDBQueryToGetUser(userId);

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  res.send(`User found: ${user.name}`);
});


