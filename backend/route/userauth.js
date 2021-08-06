const bcrypt = require("bcryptjs");
const express = require("express");
const nodemailer = require("nodemailer");
const { json } = require("express");

require("../db/connection");
const User = require("../model/userSchema");
const router = express.Router();

var { username, phone, email, password, cpassword } = 0;

router.post("/user-register", async (req, res) => {
   var { username, phone, email, password, cpassword } = req.body;
   /*checking if user have entered all field or not*/
   if (!username || !phone || !email || !password || !cpassword) {
      return res.status(422).json({ message: "please fill all data" });
   }

   try {
      /*checking if already username exists or not*/
      const usernameExist = await User.findOne({
         username: username,
      });

      if (usernameExist) {
         return res.status(422).json({ message: "username already exists" });
      } else {
         /*checking if already email exists or not*/
         const emailExist = await User.findOne({ email: email });

         if (emailExist) {
            return res.status(422).json({
               message: "Email already exists",
            });
         }
         if (password != cpassword) {
            return res.status(422).json({
               error: "password and confirm password is not same",
            });
         } else {
            var otpgenerator = Math.floor(Math.random() * 1000000);
            otpgenerator = parseInt(otpgenerator);
            console.log(otpgenerator);

            let transporter = require("../email/sendmail");

            let mailoptions = {
               from: "noreply.digicomp@gmail.com",
               to: email,
               subject: "Digicomp OTP for email varification",
               html:
                  "<h3> Your one time password (otp) for registration in Digicomp is : </h3>" +
                  "<h2>" +
                  otpgenerator +
                  "</h2>",
            };

            transporter.sendMail(mailoptions, (err, data) => {
               if (err) {
                  console.log("Mail not sent" + err);
                  res.status(400).json({ error: "Mail not sent" });
               } else {
                  console.log("Email sent");
                  res.status(200).json({ message: "Mail sent" });
                  res.redirect("/otp");
               }
            });
         }
      }
   } catch (err) {
      console.log("err register");
   }
});

router.post("/otp", async (res, req, otpgenerator) => {
   /*is new email and username then save the user*/

   try {
      console.log(req.body.otp);
      const newUser = new User({
         username,
         phone,
         email,
         password,
         cpassword,
      });

      const addUser = await newUser.save();
      if (addUser) {
         console.log("successfull");
         res.status(201).json({
            message: "sucessfully added new user",
         });
      }
   } catch (err) {
      console.log("err otp" + err);
   }
});

router.post("/user-login", async (req, res) => {
   const { email, password } = req.body;
   if (!email || !password) {
      res.status(422).json({ message: "please enter all fields" });
   }
   try {
      const findUser = await User.findOne({ email: email });
      if (findUser) {
         const matchPassword = await bcrypt.compare(
            password,
            findUser.password
         );
         if (!matchPassword) {
            res.status(422).json({
               message: "invalid credentials pass",
            });
         } else {
            res.status(200).json({
               message: "login sucessfull",
            });
         }
      } else {
         res.status(422).json({
            message: "invalid credentials email",
         });
      }
   } catch (err) {
      console.log(err);
   }
});

module.exports = router;
