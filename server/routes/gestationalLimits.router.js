const express = require("express");
const router = express.Router();
const apiKey = process.env.POLICY_API_KEY;
const axios = require("axios");

router.post("/", (req, res) => {
  let stateAbbr = req.body.state;
  axios({
    url: `https://api.abortionpolicyapi.com/v1/gestational_limits/states/${stateAbbr}/`,
    method: "GET",
    headers: { token: apiKey },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch(function error(response) {
      console.log("error", response);
      res.sendStatus(500);
    });
  return;
});

module.exports = router;
