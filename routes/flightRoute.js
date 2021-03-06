const express = require("express");
const controller = require("../controllers/flightController");

const router = express.Router();

router.get("/", controller.fetch);
router.get("/:id", controller.fetchid);
router.post("/add", controller.add);
router.post("/update/:id", controller.update);
router.delete("/update/:id", controller.delete);

module.exports = router;
