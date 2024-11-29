Create a database `movieflix` and insert the following data into a collection called `movies`:

```json
[
    {
        "title": "The Matrix",
        "director": "Lana Wachowski",
        "year": 1999,
        "genre": ["Sci-Fi", "Action"],
        "rating": 8.7,
        "runtime": 136,
        "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        "isOscarWinner": true,
        "boxOffice": 463.5,
        "streamingOn": ["Netflix", "Amazon Prime"],
        "languages": ["English", "Spanish", "French"]
    },
    {
        "title": "Inception",
        "director": "Christopher Nolan",
        "year": 2010,
        "genre": ["Sci-Fi", "Action", "Thriller"],
        "rating": 8.8,
        "runtime": 148,
        "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        "isOscarWinner": true,
        "boxOffice": 836.8,
        "streamingOn": ["Netflix"],
        "languages": ["English", "Japanese"]
    },
    {
        "title": "The Dark Knight",
        "director": "Christopher Nolan",
        "year": 2008,
        "genre": ["Action", "Crime", "Drama"],
        "rating": 9.0,
        "runtime": 152,
        "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "isOscarWinner": true,
        "boxOffice": 1004.6,
        "streamingOn": ["HBO Max", "Amazon Prime"],
        "specialFeatures": {
            "behindTheScenes": true,
            "commentary": true,
            "deletedScenes": true
        }
    },
    {
        "title": "Memento",
        "director": "Christopher Nolan",
        "year": 2000,
        "genre": ["Mystery", "Thriller"],
        "rating": 8.4,
        "runtime": 113,
        "cast": ["Guy Pearce", "Carrie-Anne Moss"],
        "boxOffice": 39.7
    },
    {
        "title": "Interstellar",
        "director": "Christopher Nolan",
        "year": 2014,
        "genre": ["Sci-Fi", "Drama", "Adventure"],
        "rating": 8.6,
        "runtime": 169,
        "cast": ["Matthew McConaughey", "Anne Hathaway"],
        "isOscarWinner": true,
        "boxOffice": 701.7,
        "streamingOn": ["Netflix", "Paramount+"],
        "specialFeatures": {
            "behindTheScenes": true,
            "commentary": false,
            "deletedScenes": false
        }
    },
    {
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "year": 1994,
        "genre": ["Drama"],
        "rating": 9.3,
        "runtime": 142,
        "cast": ["Tim Robbins", "Morgan Freeman"],
        "boxOffice": 58.3,
        "languages": ["English", "French"]
    },
    {
        "title": "Alien",
        "director": "Ridley Scott",
        "year": 1979,
        "genre": ["Horror", "Sci-Fi"],
        "rating": 8.5,
        "runtime": 117,
        "cast": ["Sigourney Weaver", "Tom Skerritt"],
        "isOscarWinner": true,
        "boxOffice": 104.9
    },
    {
        "title": "Jurassic Park",
        "director": "Steven Spielberg",
        "year": 1993,
        "genre": ["Action", "Sci-Fi", "Adventure"],
        "rating": 8.7,
        "runtime": 127,
        "cast": ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
        "isOscarWinner": true,
        "boxOffice": 914.7,
        "streamingOn": ["Netflix", "Amazon Prime"],
        "specialFeatures": {
            "behindTheScenes": true,
            "commentary": true,
            "deletedScenes": true
        }
    },
    {
        "title": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "year": 1994,
        "genre": ["Crime", "Drama"],
        "rating": 8.9,
        "runtime": 154,
        "cast": ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
        "isOscarWinner": true,
        "boxOffice": 213.9,
        "languages": ["English", "Spanish", "French"]
    },
    {
        "title": "The Godfather",
        "director": "Francis Ford Coppola",
        "year": 1972,
        "genre": ["Crime", "Drama"],
        "rating": 9.2,
        "runtime": 175,
        "cast": ["Marlon Brando", "Al Pacino", "James Caan"],
        "isOscarWinner": true,
        "boxOffice": 245.1,
        "languages": ["English", "Italian"]
    },
    {
        "title": "Avatar",
        "director": "James Cameron",
        "year": 2009,
        "genre": ["Action", "Sci-Fi", "Adventure"],
        "rating": 7.8,
        "runtime": 162,
        "cast": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        "boxOffice": 2847.2,
        "streamingOn": ["Disney+", "Amazon Prime"],
        "specialFeatures": {
            "behindTheScenes": true,
            "commentary": true,
            "deletedScenes": true
        }
    },
    {
        "title": "The Silence of the Lambs",
        "director": "Jonathan Demme",
        "year": 1991,
        "genre": ["Crime", "Thriller"],
        "rating": 8.6,
        "runtime": 118,
        "cast": ["Jodie Foster", "Anthony Hopkins"],
        "isOscarWinner": true,
        "boxOffice": 272.7
    },
    {
        "title": "Gladiator",
        "director": "Ridley Scott",
        "year": 2000,
        "genre": ["Action", "Drama"],
        "rating": 8.5,
        "runtime": 155,
        "cast": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        "isOscarWinner": true,
        "boxOffice": 460.6,
        "specialFeatures": {
            "behindTheScenes": true,
            "commentary": true,
            "deletedScenes": true
        }
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "director": "Peter Jackson",
        "year": 2001,
        "genre": ["Action", "Adventure", "Fantasy"],
        "rating": 8.8,
        "runtime": 178,
        "cast": ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
        "isOscarWinner": true,
        "boxOffice": 897.7,
        "streamingOn": ["HBO Max", "Netflix", "Amazon Prime"],
        "languages": ["English", "Spanish", "French", "German"]
    },
    {
        "title": "Forrest Gump",
        "director": "Robert Zemeckis",
        "year": 1994,
        "genre": ["Drama", "Romance"],
        "rating": 8.8,
        "runtime": 142,
        "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        "isOscarWinner": true,
        "boxOffice": 678.2,
        "streamingOn": ["Netflix", "Paramount+"],
        "languages": ["English", "French"]
    }
]
```



Write MongoDB queries for the following:

1. Find all movies where:
   - Runtime is greater than 150 minutes
   - Rating is higher than 8.5
   - Year is between 2000 and 2015 (inclusive)
   - Box office earnings were less than 500 million OR greater than 1 billion

2. Find movies directed by Christopher Nolan that won an Oscar, made more than 700 million at box office, and are available on Netflix.

3. Find movies that have special features, where both behind-the-scenes content and deleted scenes are available.

4. Find movies where either Carrie-Anne Moss or Morgan Freeman is in the cast, have language options available, and can be watched on at least 2 streaming platforms.

5. For the movie "Inception", add Chinese to its languages.

6. Add Michael Caine to the cast of all Christopher Nolan movies.

7. Add Disney+ as a streaming option for all movies longer than 140 minutes.

8. Find movies that have exactly 2 genres and have box office earnings listed, but don't have any special features.

9. Remove all movies with rating less than 8.0.

10. Remove Netflix from the streaming platforms of all movies released before 2000.

11. Find movies where box office earnings are more than 10 times the runtime.

12. Find all movies available on exactly the same streaming platforms as "The Matrix".

13. Find movies that have both "Action" and "Sci-Fi" in their genres.

14. Find movies where "Action" is the first genre listed.

15. Find movies that have exactly 3 cast members.
