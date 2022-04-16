var mysql = require("mysql");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "paakmatch",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("select * from users", function (err, result) {
    if (err) throw err;
    console.log("Result: ", result);
  });
});
