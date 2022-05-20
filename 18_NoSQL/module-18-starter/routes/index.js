const router = require("express").Router();
const htmlRoutes = require("./html/html-routes");
const apiRoutes = require("./api");

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

router.use((req, res) => {
	res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;
