const express = require("express");

const table = require("../utils/compatibilityTable");
const con = require("../config/db");

const router = express.Router();

router.post("/chatsetdetails", async (req, res) => {
  const { set } = req.body;
  try {
    var sql = `select u.id, u.name, p.image from users u JOIN profileDetails p on u.id = p.user_id where u.id in ${set}`;
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      const tempData = result;
      return res.status(200).send(tempData);
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    var sql = `select id, gender, personality_type from users u JOIN profileDetails p on u.id = p.user_id where u.id = ${id}`;
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      if (result.length != 0) {
        let currentUserDetailsPref = result[0];
        currentUserDetailsPref.gender =
          currentUserDetailsPref.gender === "Female" ? "Male" : "Female";

        sql = `select * from preferences where user_id = ${currentUserDetailsPref.id}`;
        con.query(sql, (err, result) => {
          if (err) return res.status(400).send({ message: err.sqlMessage });
          currentUserDetailsPref = { ...currentUserDetailsPref, ...result[0] };
          sql = `select id, DOB, name, height, personality_type, marital_status, mother_tongue, religion, income, occupation, education, city, caste, image from users u JOIN profileDetails p on u.id = p.user_id where gender = '${
            currentUserDetailsPref.gender
          }' AND personality_type IN ${
            table[currentUserDetailsPref.personality_type]
          }`;
          con.query(sql, (err, result) => {
            if (err) return res.status(400).send({ message: err.sqlMessage });
            let matchedProfiles = [...result];
            console.log("matchedProfiles: ", matchedProfiles);

            [currentUserDetailsPref.height1, currentUserDetailsPref.height2] =
              currentUserDetailsPref.height_range.split("-");
            [currentUserDetailsPref.age1, currentUserDetailsPref.age2] =
              currentUserDetailsPref.age_range.split("-");

            matchedProfiles.map((item) => (item.age = getAge(item.DOB)));
            let pointedProfiles = getProfilesWithPoints(
              currentUserDetailsPref,
              matchedProfiles
            );

            pointedProfiles = sortByPoints(pointedProfiles);
            return res.status(200).send(pointedProfiles);
          });
        });
      } else {
        res.status(400).send({ message: "Not Found" });
      }
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/details/:id", async (req, res) => {
  const { id } = req.params;
  try {
    var sql = `select * from users u JOIN profileDetails p on u.id = p.user_id LEFT JOIN subscriptions su on su.plan_user_id = u.id where u.id = ${id}`;
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      if (result.length == 0) {
        return res.status(200).send([]);
      }
      const tempData = result[0];
      tempData.age = getAge(tempData.DOB);
      return res.status(200).send(tempData);
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/preferences/:id", async (req, res) => {
  const { id } = req.params;
  try {
    var sql = `select * from preferences where user_id = ${id}`;
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send({ message: err.sqlMessage });
      const tempData = result[0];
      tempData.age = getAge(tempData.DOB);
      return res.status(200).send(result[0]);
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

const getAge = (dateString) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const getProfilesWithPoints = (currentUserDetailsPref, matchedProf) => {
  let matchedProfiles = [...matchedProf];
  matchedProfiles.forEach((obj, index) => {
    let points = 0;
    let matchedKeys = [];
    for (let key in currentUserDetailsPref) {
      if (
        matchedProfiles[index][key] == currentUserDetailsPref[key] &&
        key != "personality_type" &&
        key != "id" &&
        key != "name" &&
        key != "religion"
      ) {
        points++;
        matchedKeys.push(key);
      }

      if (key == "religion") {
        if (currentUserDetailsPref[key] == "Any(Muslim)") {
          points++;
          matchedKeys.push(key);
        } else if (matchedProfiles[index][key] == currentUserDetailsPref[key]) {
          points++;
          matchedKeys.push(key);
        }
      }

      if (key == "age1") {
        if (
          parseInt(matchedProfiles[index]["age"]) >=
            currentUserDetailsPref.age1 &&
          parseInt(matchedProfiles[index]["age"]) <= currentUserDetailsPref.age2
        ) {
          points++;
          matchedKeys.push(key);
        }
      }
      if (key == "height1") {
        if (
          parseInt(matchedProfiles[index]["height"]) >=
            currentUserDetailsPref.height1 &&
          parseInt(matchedProfiles[index]["height"]) <=
            currentUserDetailsPref.height2
        ) {
          points++;
          matchedKeys.push(key);
        }
      }
    }
    matchedProfiles[index]["age_range"] = currentUserDetailsPref.age_range;
    matchedProfiles[index]["height_range"] =
      currentUserDetailsPref.height_range;
    matchedProfiles[index]["points"] = points;
    matchedProfiles[index]["matchedKeys"] = matchedKeys;
  });

  return matchedProfiles;
};

const sortByPoints = (arr) =>
  arr.sort(function (a, b) {
    if (a.points > b.points) return -1;
    if (a.points < b.points) return 1;
    return 0;
  });

module.exports = router;
