const express = require("express");
const router = express.Router();

const controller = require("../controller/index");

router.get("/", controller.landing);

router.get("/get", controller.getDesc);
router.post("/post", controller.sendDesc);

module.exports = router;
