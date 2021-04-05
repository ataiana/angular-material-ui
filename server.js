const express = require("express");
const app = express();
// Serve Angular App
app.use(express.static("dist/angular-material-eleven"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dist/angular-material-eleven/index.html");
});

process.env.PORT = process.env.PORT || 8080;
process.env.GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || '';
// Serve Google Api Key
app.get("/maps", (req, res) => {
  res.json({ mapsApi: process.env.GOOGLE_API_KEY });
});

app.listen(process.env.PORT, () =>
  console.log("Listening to port: " + process.env.PORT)
);
