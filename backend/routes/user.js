const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const con = require("../config/db");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, contactNumber, password } = req.body;

  try {
    bcrypt.genSalt(process.env.NODE_APP_SALT_ROUNDS, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) return res.status(400).send({ message: err.message });

        var sql = `INSERT INTO users (name, email, hash, contact_number) VALUES ('${name}', '${email}', '${hash}', '${contactNumber}')`;

        con.query(sql, (err, result) => {
          if (err) return res.status(400).send({ message: err.sqlMessage });
          return res
            .status(200)
            .send({ id: result.insertId, name, email, hash });
        });
      });
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/createprofile", async (req, res) => {
  const {
    userID,
    city,
    DOB,
    religion,
    motherTongue,
    gender,
    maritalStatus,
    height,
    caste,
    subCaste,
    education,
    occupation,
    income,
    about,
  } = req.body;

  const img =
    "https://www.hygradebusiness.com/assets/media/2017/11/hygrade_analytics_blog.jpg";

  try {
    var sql = `INSERT INTO profileDetails VALUES ('${userID}', '${DOB}', '${religion}', '${motherTongue}', '${gender}', '${maritalStatus}', '${height}', '${caste}','${subCaste}','${education}','${occupation}','${income}','${about}','${city}','${img}')`;

    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      return res.status(200).send(`${result.affectedRows} Affected`);
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("/loginwithtoken", async (req, res) => {
  console.log("token");
  const { token } = req.body;
  console.log(token);
  try {
    var sql = `select id, name, email, role, hash from users where hash = '${token}'`;
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      if (result.length != 0) {
        const { id, name, email, hash } = result[0];
        return res.status(200).send({ id, name, email, hash });
      } else {
        res.status(400).send({ message: "Not Found" });
      }
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:email/:password", async (req, res) => {
  const { email, password } = req.params;
  try {
    var sql = `select id, name, email, role, hash from users where email = '${email}'`;
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      if (result.length != 0) {
        const { id, name, email, hash } = result[0];
        bcrypt.compare(password, hash, (err, resp) => {
          if (err) return res.status(400).send({ message: err.message });
          if (!resp)
            return res
              .status(400)
              .send({ message: "Email or Password is incorrect" });
          return res.status(200).send({ id, name, email, hash });
        });
      } else {
        res.status(400).send({ message: "Not Found" });
      }
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

router.put("/updatepersonality", async (req, res) => {
  const { id, type } = req.body;
  try {
    var sql = `UPDATE users SET personality_type = '${type}' where id = '${id}'`;
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      // console.log(result);
      return res.status(200).send(`${result.affectedRows} Affected`);
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
