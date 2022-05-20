const router = require("express").Router();
const sequelize = require("../config/connection");
const { User } = require("../models");
const withAuth = require("../utils/auth");

// get all posts for homepage
router.get("/", (req, res) => {
	// res.render("login");
	// User.findAll({})
	// 	.then(users => {
	res.render("home", {
		loggedIn: req.session.loggedIn,
	});
	// })

	// .catch(err => {
	// 	console.log(err);
	// 	res.status(500).json(err);
	// });
});

router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/secret");
		return;
	}

	res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/secret", withAuth, (req, res) => {
	res.render("secret", {
		session: req.session,
	});
});

module.exports = router;
