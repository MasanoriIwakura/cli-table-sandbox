const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello"));

app.listen(3000, () =>
  console.log("cli-table-sandbox app listening on port 3000!")
);
