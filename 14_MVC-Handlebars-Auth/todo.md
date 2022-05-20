# MVC

- MVC Structure
- [Handlebars.js](https://handlebarsjs.com/)
  - [npm express-handlebars](https://www.npmjs.com/package/express-handlebars)
  - Expressions
  - Helpers
  - Partials
  - Sessions
  - Middleware
    - [npm express-session](https://www.npmjs.com/package/express-session)
- User Authentication
  - Sessions
  - Cookies

### MVC

- Model (data)
- View (user interface)
- Controler (in between Model and View)

### Handlebars

- Explain it first on its own example

#### Concepts Handlebars

- Bring it to Express
  - app.engine('handlebars', hbs.engine);
  - app.set('view engine', 'handlebars');
- Folder structure
  - views
    - All other templates will go here
    - layouts
      - main.handlebars
- {{{body}}} vs {{}} -> bring JS in HTML. 2 converts HTML to string and 3 will not!
- res.render instead of res.send to render a template (.handlebars is implied)

  - render takes a template name and an object with the information we want to pass to the HTML
  - render from Sequelize dbPostData[0].get({plain:true}) as Sequelize returns a large object
  - Now it is an array,

  ```js
  const posts = dbPostData.map(post => post.get({ plain: true }));
  res.render("homepage", { posts });
  ```

  - Handlebars can loop using {{#each postsas |post|}} {{/each}}

### Sessions

- [Session-🍪 Diagram](https://excalidraw.com/#json=Yl6w_hlK-4Mha6c0X5y-e,i4_izAEmGZc5HPRyaypZxw)

- The cookie gets send with every request
  - Test by res.cookie('key','value'); ie. res.cookie('uid','supeDuperId');
