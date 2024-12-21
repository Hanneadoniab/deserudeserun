var movie_json = { "id": 100, };

// To insert a new key/value pair to movie_json
movie_json['name'] = 'Harry Potter';
console.log("new key: " + movie_json);

// To update a key/value in movie_json
movie_json['id'] = 101;
console.log("updated key: " + movie_json);

// Adding a JSON array to movie_json and pushing a new item
movie_json['movies'] = ["The Philosopher's Stone"];
movie_json['movies'].push('The Chamber of Secrets');
console.log(movie_json);
