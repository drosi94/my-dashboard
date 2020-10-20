const express = require('express');
const app = express();

app.use(express.static("./dist/my-dashboard"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "./dist/my-dashboard/" });
});

app.listen(process.env.PORT || 8080);
