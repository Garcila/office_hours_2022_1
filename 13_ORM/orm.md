# ORM - Object Relation Mapping

## Libraries

- [Sequelize](https://sequelize.org/) - [Package](https://www.npmjs.com/package/sequelize)
  > ORM sits between the server's API endpoints and the SQL database to translate and normalize data between JavaScript and SQL.
  - Don't write your own SQL queries. We have provided queries
- [Dotenv](https://www.npmjs.com/package/dotenv)
  > loads environment variables from a .env file into process.env, a Node.js property that returns an object containing the user environment.
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
  > allows you to hash passwords. Hashing is the process of taking input and using a mathematical formula to chop and mix it up to produce an output of a specific length. Hashing is a one-way function, meaning that it can easily convert input to a fixed-size output, but it is difficult to invert, or convert in the opposite direction. This attribute allows developers to secure passwords when authenticating users for their applications.

### Process

- npm init -y
  - set server.js instead of index.js
  - script to start
- .gitignore file
  - node_modules and .DS_Store
- server.js
- folders we'll use
  - models
  - routes
  - config
  - db
- install express, sequelize and mysql2
- db folder
  - schema.sql
  - run the file from mysql terminal to create db
  - create db connection
    > we don't want our private information to be public, therefore we replace the information in the new Sequelize connection with environment variables
  - install dotenv
  - create .env file and add variables to be hidden
  - add .env to .gitignore file to keep it out of commits
  - change process.env.DB_USER... replacing "root"...
- Sequelize Model - Object to represent a table
  - Create User Model (inherits CRUD from Sequelize)
    > User.js I keept the comments for the information required there
  - Add index.js file.
- Add api folder to routes and create a user-routes.js
  - uses Router as before
  - create boilerplate for different CRUD routes
    - READ - findAll() - findOne({where: {id:req.params.id}})
    - CREATE - create({username: req.body.username...})
    - UPDATE - update(req.body, {{where:id:req.params.id}})
    - DELETE - destroy({{where: {id:req.params.id}}})
  - Add index.js files to api and routes
- Add code to server.js
  - sequelize.sync() - sync will connect models and connecting them to tables. It will create tables if have not been created
  - {force: false} - Will not DROP and recreate tables. true will
- Test routes
  - We are getting the password back. This is not safe, therefore, change findAll(), to look like this findAll({attributes: {exclude:['password']}})
    > regardless of what we just did... Passwords should not be stored in the db. We'll hash the password and store the hash instead
- Install Bcrypt
  - [Bcrypt Docs](https://www.npmjs.com/package/bcrypt)
    📚 Explain Hashing -[hashing repo](https://github.com/Garcila/hashing)
  - Hash with Express - [hasing in Express repo](https://github.com/Garcila/express_hash)
  - ⛔️ POTENTIAL ERROR Did you receive the following error code when trying to restart your Express.js server? 13.2.6.
    ![error](./400-error-code.jpg)
    > Try the following options to fix this error:
    > Change the port number in your server.js file.
    > Kill the process (this is OS-specific, so Google can help), then restart the server.
  - add it to the User.js model as part of the init method. {hooks:{settings}}
  - also update the beforeUpdate (put) in the sync method and also in the User rote as individualHooks: true
- Create login route. Use POST because the information is included in the body of the request. This is more secure than sending the information on the url as we do in a GET request.
- Add to the User class in the modules folder a method that checks the hashed password against the password entered by the user
- Modify post to '/login' to check for a valid password using the method included in the previous step (checkPassword)

- Create Post Model (inherits CRUD from Sequelize)

  - Relational DB
  - user-post -> one-many
  - At init, include user_id:{type: DataTypes.INTEGER, references:{model:"user",key:"id}}

    > In the sync method, there is a configuration parameter { force: false }. If we change the value of the force property to true, then the database connection must sync with the model definitions and associations. By forcing the sync method to true, we will make the tables re-create if there are any association changes.

    > REWIND
    > This definition performs similarly to DROP TABLE IF EXISTS, which was used previously. This allows the table to be overwritten and re-created.

    > Remember back in the Post model, we defined the column names to have an underscore naming convention by using the underscored: true, assignment. In Sequelize, columns are camelcase by default.

- To include the association we add a include key in the findAll method, this is an array of objects with the model we want to associate
  s
