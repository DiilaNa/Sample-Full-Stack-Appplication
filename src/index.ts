import { log } from "console";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(5000, () => {
  log("Server is running on port 5000");
});