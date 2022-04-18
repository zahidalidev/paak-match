const express = require("express");
const cors = require("cors");

const user = require("./routes/user");

const app = express();

// middle ware
app.use(cors());
app.use(express.json());
app.use("/api/user", user);

// setting port if not in environment variable then 5000
app.set("port", process.env.PORT || 5000);

// listining on port
app.listen(app.get("port"), () =>
  console.log(`app is running on port ${app.get("port")}...`)
);

// const con = require("./config/db")

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("select * from users", function (err, result) {
//     if (err) throw err;
//     console.log("Result: ", result);
//   });
// });
