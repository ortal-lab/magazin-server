const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

port = 3000
app.listen(port, () => {
    console.log("listening");
});
