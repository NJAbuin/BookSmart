const router = require("express").Router();
const path = require("path");
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const auth = require("./auth");

router.get("/*", (req, res) => {
  res.sendFile(HTML_FILE);
});

router.use("/auth", auth);

module.exports = router;
