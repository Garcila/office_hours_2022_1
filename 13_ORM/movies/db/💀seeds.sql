INSERT INTO ratings (rating)
VALUES
    ('G'),
    ('PG'),
    ('PG-13'),
    ('R');

INSERT INTO movies (title, genere, director, release_year, rating_id)
VALUES
    ('Amélie', 'Romance','Jean-Pierre Jeunet', 2001, 1),
    ('My Neighbor Totoro', 'Drama', 'Hayao Miyazaki', 1988,3),
    ('The Matrix', 'Action', 'Wachowskis', 1999, 2),
    ('Akira', 'Action', 'Katsuhiro Otomo', 1988, 2),
    ('Ex Machina', 'Drama', 'Alex Garland', 2014, null),
    ('Looper', 'Action', 'Rian Johnson', 2012, 1),
    ('Moon', 'Drama', 'Duncan Jones', 2009, 1),
    ('Blade Runner', 'Drama', 'Ridley Scott', 1982, 2),
    ('Tenet', 'Thriller', 'Christopher Nolan', 2020, 3),
    ('Amadeus', 'Drama', 'Milos Forman', null, null),
    ('Crouching Tiger, Hidden Dragon', 'Action', 'Ang Lee', 1999, 2),
    ('A Clockwork Orange', 'Drama', 'Stanley Kubrick', null, null);