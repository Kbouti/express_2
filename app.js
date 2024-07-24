const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));


// Start server with command:
// node app.js

// Start server in watch mode with 
// node --watch app.js