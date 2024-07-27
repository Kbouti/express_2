// app file

const express = require("express");
const userRouter = require("./routes/userRoutes");

const app = express();





const path = require("path");


const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// application-level middlewares, will always execute on every incoming requests
// parses form payloads and sets it to the `req.body`
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     console.log('Hello from your middleware function! ');
//   // Our own custom middleware function
//   // Just make sure to call `next`
//   next();
// })

app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});

// base mount path is `/users` and will always execute on that specific mount path, and yes including `/users/a/b/c`
app.use("/users", userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
