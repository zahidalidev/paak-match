const express = require("express");
const bcrypt = require("bcrypt");
const con = require("../config/db");
const multer = require("multer");

const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets/images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

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

router.post("/userprofile/:id", upload.single("file"), async (req, res) => {
  const imgPath = req.file.path.replace("assets/", "");
  const { id } = req.params;
  try {
    var sql = `INSERT INTO profileDetails (user_id, image) VALUES ('${id}', '${imgPath}')`;
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      return res.status(200).send(`${result.affectedRows} Affected`);
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("/addpartnerpreferences", async (req, res) => {
  const {
    userID,
    age,
    height,
    maritalStatus,
    motherTongue,
    religion,
    income,
    occupation,
    city,
    education,
    caste,
  } = req.body;
  console.log(req.body);
  try {
    var sql = `INSERT INTO preferences VALUES (${userID}, '${age}', '${height}', '${maritalStatus}', '${motherTongue}', '${religion}', '${income}', '${occupation}', '${education}', '${city}', '${caste}');`;
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      return res.status(200).send(`${result.affectedRows} Affected`);
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
router.put("/updatePartnerPreferences", async (req, res) => {
  const {
    userID,
    age,
    height,
    maritalStatus,
    motherTongue,
    religion,
    income,
    occupation,
    city,
    education,
    caste,
  } = req.body;
  try {
    var sql = `UPDATE preferences SET age_range = '${age}', height_range = '${height}', marital_status = '${maritalStatus}', mother_tongue = '${motherTongue}', religion = '${religion}', income = '${income}', occupation = '${occupation}', education = '${education}', city = '${city}', caste = '${caste}' where user_id = ${userID}`;
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      return res.status(200).send(`${result.affectedRows} Affected`);
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.put("/createprofile", async (req, res) => {
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

  try {
    var sql = `UPDATE profileDetails SET DOB = '${DOB}', religion = '${religion}', mother_tongue = '${motherTongue}', gender = '${gender}', marital_status = '${maritalStatus}', height = '${height}', caste = '${caste}', sub_caste = '${subCaste}', education = '${education}', occupation = '${occupation}', income = '${income}', about = '${about}', city = '${city}' where user_id = '${userID}'`;

    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      return res.status(200).send(`${result.affectedRows} Affected`);
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("/loginwithtoken", async (req, res) => {
  const { token, email } = req.body;
  try {
    var sql = `select id, name, email, role, hash from users where hash = '${token}' AND email = '${email}'`;
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
          console.log({ id, name, email, hash });
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
      return res.status(200).send(`${result.affectedRows} Affected`);
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
