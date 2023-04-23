const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const statesRouter = require("./routes/states.router");
const gestationalLimits = require("./routes/gestationalLimits.router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use("/api/states", statesRouter);
app.use("/api/gestationalLimits", gestationalLimits);

app.use(express.static("build"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
