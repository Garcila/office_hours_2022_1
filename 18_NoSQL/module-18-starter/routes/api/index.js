const router = require("express").Router();
const pizzaRoutes = require("./pizza-routes");
const commentRoutes = require("./comment-routes");

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use("/pizzas", pizzaRoutes);

// add prefix of `/comments` to routes created in `comment-routes.js`
router.use("/comments", commentRoutes);

module.exports = router;
