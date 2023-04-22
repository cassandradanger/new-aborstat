const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // GET route code here
  console.log("ihi hihihihi!");
  res.send('limits');
});

module.exports = router;
