const express = require("express");
const path = require("path");

const app = express();

// disable x-powered by
app.disable("x-powered-by");

// serve static files
app.use(express.static("build"));

// Parse incoming post request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
