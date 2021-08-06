const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
   cors({
      origin: "*",
   })
);

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
require("./db/connection");

app.use(express.json());

const User = require("./model/userSchema");

// const user1 = new User({
//   username: "user1",
//   phone: 5256454,
//   email: "1@kiv.com",
//   password: "123",
//   cpassword: "123",
// });
// user1.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("added user" + user);
//   }
// });

app.use(require("./route/userauth.js"));

app.get("/", (req, res) => {
   res.send("<h1>hello</h1>");
});

app.listen(PORT, () => {
   console.log("Server started on port " + PORT);
});
