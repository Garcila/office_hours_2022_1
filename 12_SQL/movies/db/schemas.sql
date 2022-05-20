DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS movies;

CREATE TABLE ratings (
    id INTEGER AUTO_INCREMENT,
    rating VARCHAR(10),
    PRIMARY KEY (id)
);

CREATE TABLE movies(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    genere VARCHAR(10) NOT NULL,
    director VARCHAR (30) NOT NULL,
    release_year YEAR,
    rating_id INTEGER,
    FOREIGN KEY (rating_id) REFERENCES ratings(id)
);


