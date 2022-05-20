# EXPRESS YOURSELF 👩‍🎤

Why are we doing this. What is the learning and use path

- Use Node to create a server, but easier using Express
- Serve files from the server
- more??

## [express js](expressjs.com)

## What is it

'Fast, unopinionate, minimalist web framework for Node.js'

## Let's Code 💻

### Part Juan ①

- init 🏁
- require
- excecute => Starts a new express application and stores it in app
- time to listen 🎧
  - how do we know it is working? 🤷‍♀️
  - the port ⛴ should be a variable... why are you shouting 📢 ?

### Part Who ②

- add a get route to listen to '/'

  - res.send something
  - ok... that is pretty nice, how about json? 🏒
  - res.json... we need an object. We'll make one.. a really silly one
  - We'll make it a .json object {key:[{}]}

- What if I only want one item from the set of data? 🔎

  - :something. Parameters - params from the request
  - how about ?name=Pepito - Query
  - we saw the params, how do we filter ☕️ ?

- What else can I send 📦
  res.send('Greetings');
  res.render(file);
  res.status(400);
  res.sendStatus(200);
  res.download('file');
  ... and more

### Part 🌳 ③

- We are GETting, but we are givers... can I POST 📬 ?

  - post route to /fruits and console.log ??? (body)
  - wait... how, where 🙁 you lost me. Insomia to the rescue 🛌
  - tried... failed. what is wrong?? Middleware
    From the module:
    > In order for our server to accept incoming data the way we need it to, we need to tell our Express.js app to intercept our POST request before it gets to the callback function. At that point, the data will be run through a couple of functions to take the raw data transferred over HTTP and convert it to a JSON object.
    - //parse incoming string or array data
    - app.use(express.urlencoded({ extended: true }));
    - //parse incoming JSON data
    - app.use(express.json());
  - Ideally we should save this new data to a database or to our file system

  ```js
  function createNewFruit(body, fruits) {
  	const fruit = body;
  	fruits.push(fruit);
  	// fs?
  	fs.writeFileSync(
  		// what is that? path, __dirname
  		path.join(__dirname, "../data/fruits.js"),
  		JSON.stringify({ fruits: fruits }, null, 2)
  	);
  	return fruits;
  }
  ```

- This will need some debbuging!! 🐞
  - What do you mean no fs
  - What do you mean no path
  - Keep at it until it works 🔧

### Part Validate the name of the fruit please ✅

- app.use(middleware_name)
- maybe the logger example
- if typeof req.body.name !== string 🙁 else next();

### I miss HTML - CSS - and JS in the Client side 🏡

- Add folder with HTML... call it client or public

  - Add HTML File
  - Now serve it... It can be from '/'. Use

  ```js
  res.sendFile(path.join(__dirname, "../../client/index.html"));
  ```

  - Not working.... Middleware app.use(express.static("public"));
  - Yay... I hope 🤞

### Part this is messy, clean up time 🧹

- Epress Router
- From Stack Overflow

> When var app = express() is called, an app object is returned. Think of this as the main app.

> When var router = express.Router() is called, a slightly different mini app is returned. The idea behind the mini app is that each route in your app can become quite complicated, and you'd benefit from moving all that code into a separate file. Each file's router becomes a mini app, which has a very similar structure to the main app.

```
const router = require("express").Router();
```

# Folders

- data -> Holds fruits.json
- lib -> Libraries. In our example fruitIsString and addAFruit
- client -> Project 1 CSS JS HTML Assets
- routes -> all the routes and in server.js or index.js app.use('/api',apiRoutes) app.use('/', htmlRoutes);
- tests
