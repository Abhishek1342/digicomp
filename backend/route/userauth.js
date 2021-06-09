const { json } = require("express");
const express = require("express");
require("../db/connection");
const User = require("../model/userSchema");
const router = express.Router();

router.get("/user-register", (req, res) => {
  res.send("user register");
});

router.post("/user-register", (req, res) => {
  const { username, phone, email, password, cpassword } = req.body;
  /*checking if user have entered all field or not*/
  if (!username || !phone || !email || !password || !cpassword) {
    return res.status(422).json({ message: "please fill all data" });
  } else {
    /*checking if already username exists or not*/
    User.findOne({ username: username })
      .then((usernameExist) => {
        if (usernameExist) {
          return res.status(422).json({ message: "username already exists" });
        } else {
          /*checking if already email exists or not*/
          User.findOne({ email: email })
            .then((emailExist) => {
              if (emailExist) {
                return res
                  .status(422)
                  .json({ message: "Email already exists" });
              } else {
                /*is new email and username then save the user*/
                const newUser = new User({
                  username,
                  phone,
                  email,
                  password,
                  cpassword,
                });

                newUser
                  .save()
                  .then(() => {
                    console.log("successfull");
                    res
                      .status(201)
                      .json({ message: "sucessfully added new user" });
                  })
                  .catch((err) => {
                    res.status(500);
                    console.log(err);
                  });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = router;
