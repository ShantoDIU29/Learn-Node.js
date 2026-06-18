const { getAlluser, createUser } = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/", getAlluser);
router.post("/", createUser);

module.exports = router;