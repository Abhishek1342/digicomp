const mongoose = require("mongoose");
const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log("No connection");
  });
