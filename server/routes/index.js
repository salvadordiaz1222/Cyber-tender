const router = require("express").Router();

const { getDrinks } = require("./controllers/drink-controller");

router.post("/options", getDrinks);

module.exports = router;
