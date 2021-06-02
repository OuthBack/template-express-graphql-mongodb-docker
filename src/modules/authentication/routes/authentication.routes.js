const express = require("express");
const router = express.Router();
const session = require("../../helpers/database_connection");
const controller = require("../controller/authentication.controller");

router.get("/register", controller.Register);
router.post("/admin/user-create-constrain", controller.UserCreateConstrain);
router.delete("/admin/user-drop-constrain", controller.UserDropConstain);

module.exports = router;
