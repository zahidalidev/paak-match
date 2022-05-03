const express = require("express");
const cors = require("cors");

const user = require("./routes/user");
const profile = require("./routes/profile");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("assets"));

app.use("/api/user", user);
app.use("/api/profile", profile);

app.set("port", process.env.PORT || 5001);

app.listen(app.get("port"), () =>
  console.log(`app is running on port ${app.get("port")}...`)
);
