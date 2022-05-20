# SQL

## BIG PICTURE

### Docs [SQL](https://www.mysql.com/)

- We want data to persist
- We need a Database --- we will use SQL. There are a few flavours such Postgress, MYSQL...
- It has been around since the 70s. It is used everywhere
- SQL is relational
- Yes, there are non relational DBs, we'll look into this in the future
- A database allows CRUD operations, enabling us to manipulate and maintain data.
  - CRUD - Create, Read, Update, Delete

> SQL --> Tables - Columns - Rows. Excel as a mini parallel

## Benefits of a Relational databases

SQL databases excel at relational data, meaning tables with their own data can still be linked together simply by referencing the other tables using primary keys.

- It prevents duplicate data by storing information in one location only.
- It reduces clutter in the database by forcing a table to only contain the most pertinent data.

> We will learn SQL, but soon will learn about ORM (Object Relational Mapping). It will allow us to code SQL by writing JavaScript queries.
>
> Other ORMs:
>
> - JavaScript -> Sequelize
> - Ruby -> ActiveRecord
> - PHP -> Eloquent
> - Python -> SQLAlchemy
> - And more

## Should I still learn SQL or just the ORM?

SQL fundamentals first. Think of CSS and Bootstrap.

## MySQL Cheat Sheets

- [Cheat Sheet - Brad Traversy](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3)
- [Cheat Sheet - Dev Hints](https://devhints.io/mysql)

## Installation

- [The Full-Stack Blog (bootcamp blog)](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide)
- Also available on your Module on Canvas

On a Mac on terminal Installation Using HomeBrew may be the way to go

Types of relationship

- One to one (Santa Claus has one license - Country has one flag)
- One to many (City has many Postal Codes - Customer many orders)
- Many to many (class many students, teacher many classes)

# Let's Code

```sql
-- 👩‍💻 From the terminal
mysql -u root -p # (-p will prompt for your password)

-- ⚠️ SQL semicolons are not optional. The command will hang until the semicolon is entered

-- 🚪 to exit from terminal
quit || exit

-- Creates a database
CREATE DATABASE movies_db;

-- Show me all the databases
SHOW DATABASES;

-- Use database
USE movies_db

-- See the structure of the db
DESCRIBE movies_db;

-- 🚧 Create a table (Schema)
CREATE TABLE movies(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(10) NOT NULL,
    director VARCHAR (30) NOT NULL,
    release_year YEAR
);

-- See the tables
show tables;

-- Enter values in the table (rows)
-- One value
INSERT INTO movies (title, genre, director, release_year) VALUES  ('Amélie', 'Romance','Jean-Pierre Jeunet', 2001);

-- Our first query to see the data in the table
-- Show me everything
SELECT * FROM movies;

-- update tables
UPDATE movies
SET genre = 'Action'
WHERE id = 1;

-- delete from tables
DELETE FROM movies
WHERE title = "Amélie";

-- We can add only one of multiple by separating with comas
INSERT INTO movies (title, genre, director, release_year)
VALUES
    ('My Neighbour Totoro', 'Drama', 'Hayao Miyazaki', 1988),
    ('The Matrix', 'Action', 'Wachowskis', 1999),
    ('Akira', 'Action', 'Katsuhiro Otomo', 1988),
    ('Ex Machina', 'Drama', 'Alex Garland', 2014),
    ('Looper', 'Action', 'Rian Johnson', 2012),
    ('Moon', 'Drama', 'Duncan Jones', 2009),
    ('Blade Runner', 'Drama', 'Ridley Scott', 1982),
    ('Tenet', 'Thriller', 'Christopher Nolan', 2020);

-- Give me just the columns I want
SELECT id, title FROM movies;

-- Add a condition
WHERE genre = 'Drama';

-- Chain conditions
OR id > 1;
AND id > 5;

-- Filter by a pattern.  Give all the rows which title starts with C
WHERE title LIKE 'C%' -- to end with '%C', to have in it '%C%'

-- Order them by ID in ascending order.
ORDER BY id ASC; -- descending DESC

-- Limit the number of rows we are getting back
LIMIT 2;

-- Database index speeds up looking up information (MySQL indexes -> PRIMARY KEY, UNIQUE, INDEX, and FULLTEXT)
-- (Grain of Salt comment here)The indexed column will be stored in an ordered separate list that can be searched very fast

-- Create second table(Schema)
CREATE TABLE ratings(
    id INTEGER AUTO_INCREMENT,
    rating VARCHAR(10),
    PRIMARY KEY (id)
);

INSERT INTO ratings (rating)
VALUES
    ('G'),
    ('PG'),
    ('PG-13'),
    ('R');

-- FOREIGN KEY - Creates the relation between tables

-- ALTER TABLE - Modified a created table
ALTER TABLE movies ADD COLUMN rating_id INT NULL REFERENCES ratings (id);
-- REFERENCES connects the rating_id column to the ratings table. ratings (id), says, SQL rating_id column matches the id column of the ratings table

-- UPDATE TABLE - add information to already created tables
UPDATE movies SET rating_id = 1 WHERE id = 1;
UPDATE movies SET rating_id = 2 WHERE id in (2,3);
UPDATE movies SET rating_id = 3 WHERE id in (4,7,9);
UPDATE movies SET rating_id = 4 WHERE id in (5,6,8);

-- JOINS
-- Left Right Inner Outer
```

![joins](https://res.cloudinary.com/practicaldev/image/fetch/s--vmm1_UPm--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/u4rx9tnq7ei4fstlafec.png)

```sql
-- join two tables
SELECT Movies.title, Ratings.rating
FROM Movies
INNER JOIN Ratings -- or
LEFT JOIN Ratings -- or
RIGHT JOIN Ratings -- or
-- FULL OUTER... NOT IN MYSQL
ON Movies.rating_id = Ratings.id;

-- Add more movies without some of the information to test the different joins
INSERT INTO movies (title, genre, director, release_year, rating_id)
VALUES
    ('Amadeus', 'Drama', 'Milos Forman',null,null),
    ('Crouching Tiger, Hidden Dragon', 'Action', 'Ang Lee',1999,2),
    ('A Clockwork Orange', 'Drama', 'Stanley Kubrick',null,null);

-- Joins again
-- join two tables
SELECT Movies.title, Ratings.rating
FROM Movies
INNER JOIN Ratings -- or
LEFT JOIN Ratings -- or
RIGHT JOIN Ratings -- or
-- FULL OUTER... NOT IN MYSQL
ON Movies.rating_id = Ratings.id;

-- Alias
SELECT Movies.id AS the_id_the_movie_has,

-- Dropping (Deleting)
DROP TABLE Scientists;
DROP DATABASE science;
```

# WITH NODE EXPRESS MYSQL

- initialize Express App
- Install Express and Mysql2 packages (Nodemon 👹) "start": "nodemon server.js"
- Setup folder structure
- > Run the commands in your code on mysql
  - > source db/db.sql
  - > source db/schema.sql
  - > source db/seeds.sql
- Configure connection to the db
- Try it out with some queries
  - Read
  - Create
  - Delete db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => )
  - > 💉 PREPARED STATEMENTS. This way the ? gets replaced by text, but it is not executed!
  - > If multiple params are passed VALUES(?,?,?), params go in an array []
  - Update

# Try and Show Utils
