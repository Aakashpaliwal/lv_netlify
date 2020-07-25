const express = require("express");
const router = express.Router();
let appController = require("../controllers/appcontroller");
let pagesController = require("../controllers/pagesController");
router.get("/health", appController.check);
router.get("/me", appController.getMe);
router.get("/press-release", pagesController.renderPressRelease);
module.exports = router;
