const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");

const app = express();
const PORT = process.env.PORT || 3000;

// creating 1 hour from milliseconds
const hour = 1000 * 60 * 60;

//session middleware
app.use(
	sessions({
		secret: "superdupersecretthatnobdyknows4948858", // better stored in .env.  Randomdly generated
		saveUninitialized: true, // first time it is uninitialized
		cookie: { maxAge: hour }, // cookie duration
		resave: false, // Can the session to be stored back to the session store, even if the session was never modified during the request?
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/", express.static(path.join(__dirname, "client")));

app.use(cookieParser());

// a variable to save a session
let session;

app.get("/", (req, res) => {
	let user = "Mr. Smart";
	session = req.session;
	if (session.name) {
		user = session.name;
		res.send(
			`<h1>Hello 🤖 ${user}!</h1>
            <p>Your session expires ${session.cookie._expires}</p>
            <p><a href='/logout'>click to logout</a></p>
            <p><a href='/'>click to go back</a></p>`
		);
	} else {
		res.send(`
            <h1>Welcome, ${user}</h1>
            <form action="/user" method="POST">
                <input type="text" name="name" placeholder="User enter name">
                <button>Submit</button>
            </form>
        `);
	}
});

app.post("/user", (req, res) => {
	session = req.session;
	session.name = req.body.name;
	console.log(req.session);
	res.send(
		`<h1>Hello 🤖 ${session.name}</h1>
        <p><a href='/logout'>click to logout</a></p>
        <p><a href='/'>click to go back</a></p>`
	);
});

app.get("/logout", (req, res) => {
	req.session.destroy();
	res.redirect("/");
});

app.listen(PORT, () => console.log(`Server ready 🗄 at ⚓️ ${PORT}`));
