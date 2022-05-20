const router = require("express").Router();
const {
	addComment,
	removeComment,
	addReply,
	removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/:pizzaId
router.route("/:pizzaId").post(addComment);

// /api/comments/:pizzaId/:commentId
router
	.route("/:pizzaId/:commentId")
	// put, not post, since we are updating the comment, not posting to a new model
	.put(addReply)
	.delete(removeComment);

// /api/comments/:pizzaId/:commentId/:replyId
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
