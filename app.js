import express from "express";
import path from "path";

const app = express();

require("dotenv").config();

app.set("port", process.env.PORT || 5050);
app.get("/", (req, res) => {
  res.send({ "message": "Hello, World!!"});
});

const port = app.get("port");
app.listen(port, () =>
  console.log(`cli-table-sandbox app listening on port ${port}!`)
);
