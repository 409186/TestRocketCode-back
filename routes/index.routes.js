const router = require("express").Router();
const usersRoutes = require("./users.routes");

router.get("/", (req, res, next) => {
  res.json("Todo Bien");
});

router.use("/", usersRoutes);

module.exports = router;
