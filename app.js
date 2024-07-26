const express = require("express");
const app = express();

// const contactRouter = require("routes/contactRouter");
// ************************************************************************************************
// This^^ isn't doing what I'm trying to do. errors. 
// ************************************************************************************************


app.get("/", (req, res) => res.send("Hello, world!"));
// This is the home route. 

app.get("/contact", (req, res) => res.send('Hello contact'));
// app.get("/contact", (req, res) => res.render("./modules/contact"));


// app.get("/:username/messages", (req, res) => {
//     console.log(req.params);
//     res.end();
// })
// If we visit: http://localhost:3000/Odin/messages
// express will log username: Odin
// We are using the request's paramaters to store information



app.get("/:username/messages", (req, res) => {
    console.log("Params:", req.params);
    console.log("Query:", req.query);
    res.end();
  });
// Next we learn to access query paramaters in the request. These are placed in key value pairs after a ?
// If we visit: localhost:3000/Odin/messages?sort=date&direction=ascending
// We now know how to access both route params and query





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