const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "123macaco",
  database: "landing-page",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const street = req.body.street;
  const houseNumber = req.body.houseNumber;
  const uFstate = req.body.uFstate;

  db.query(
    "INSERT INTO pessoas (name, email, phone, street, houseNumber, uFstate) VALUES (?,?,?,?,?,?)",
    [name, email, phone, street, houseNumber, uFstate],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("listening on 3001");
});
