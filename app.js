const express = require("express");
const app = express();

// const contactRouter = require("routes/contactRouter");
// ************************************************************************************************
// This^^ isn't doing what I'm trying to do. errors. 
// ************************************************************************************************

// const contact = require("modules/contact.html");
app.get("/", (req, res) => res.send("Hello, world!"));

app.get("/contact", (req, res) => res.send('Hello contact'));
// app.get("/contact", (req, res) => res.render("./modules/contact"));

const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));


// Start server with command:
// node app.js

// Start server in watch mode with 
// node --watch app.js



// Saving progress, but we haven't accomplished what we want. 
// We're simply sending a simple string but we want to render the html file. 

// For a clearer tutorial next try copying and running the code from the odin node-js/routes lesson
// https://www.theodinproject.com/lessons/nodejs-routes