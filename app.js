const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();

app.set("port", process.env.PORT || 5050);
app.get("/", (req, res) => res.send("Hello"));

const port = app.get("port");
app.listen(port, () =>
  console.log(`cli-table-sandbox app listening on port ${port}!`)
);
