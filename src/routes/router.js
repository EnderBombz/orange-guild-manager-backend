const express = require("express");
const router = express.Router();

const auth = require("./authentication/auth");
const authMiddleware = require("../middleware/auth");

router.use("/api/auth", auth);
//router.use(authMiddleware);

module.exports = router;
