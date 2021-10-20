const router = require("express").Router();
const questionsRoutes = require("./");

router.use("/Questions", questionsRoutes);

module.exports = router;
