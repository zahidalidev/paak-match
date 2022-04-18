const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const con = require("../config/db");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
  } catch (error) {
    con.close();
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    con.close();
    return res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const { name, email, contactNumber, password } = req.body;

  try {
    bcrypt.genSalt(process.env.NODE_APP_SALT_ROUNDS, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        con.connect((err) => {
          if (err) return res.status(400).send({ message: err.message });
          var sql = `INSERT INTO users (name, email, hash, contact_number) VALUES ('${name}', '${email}', '${hash}', '${contactNumber}')`;

          con.query(sql, (err, result) => {
            if (err) return res.status(400).send({ message: err.sqlMessage });
            res.status(200).send(hash);
          });
        });
      });
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
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
