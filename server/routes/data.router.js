const express = require("express");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
  console.log("ihi hihihihi!");
  res.send("hellooooooooo");
});

module.exports = router;
