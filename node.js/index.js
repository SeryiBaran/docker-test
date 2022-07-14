const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", ({ res }) => {
  res.sendFile(`${__dirname}/www/index.html`);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
