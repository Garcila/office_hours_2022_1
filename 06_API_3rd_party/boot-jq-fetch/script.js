fetch("https://ghibliapi.herokuapp.com/films")
	.then(function (woof) {
		return woof.json();
	})
	.then(function (films) {
		populatePage(films);
	});

function populatePage(data) {
	for (var i = 0; i < data.length; i++) {
		var film = data[i];

		$(".container").append(`
            <div class="card" style="width: 18rem;">
            <img src="${film.movie_banner}" class="card-img-top" alt="${film.title}">
            <div class="card-body">
                <h5 class="card-title">${film.title}</h5>
                <p class="card-text">${film.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${film.original_title}</li>
                <li class="list-group-item">${film.director}</li>
                <li class="list-group-item">${film.release_date}</li>
            </ul>
            </div>
        `);
	}
}
