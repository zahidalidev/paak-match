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
          return res.status(200).send({ name: name, email: email, hash: hash });
        });
      });
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:email/:password", async (req, res) => {
  const { email, password } = req.params;
  console.log(email, password);
  try {
    var sql = `select name, email, role, hash from users where email = '${email}'`;
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      const { name, email, hash } = result[0];
      bcrypt.compare(password, hash, (err, resp) => {
        if (err) return res.status(400).send({ message: err.message });
        if (!resp)
          return res
            .status(400)
            .send({ message: "Email or Password is incorrect" });
        return res.status(200).send({ name: name, email: email, hash: hash });
      });
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
  } catch (error) {
    con.close();
    return res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {});

router.put("/:id", async (req, res) => {
  try {
  } catch (error) {
    conn.close();
    return res.status(500).send(error);
  }
});

module.exports = router;
