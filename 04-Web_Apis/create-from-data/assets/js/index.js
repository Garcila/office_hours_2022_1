var container = document.querySelector(".container");
var deleteButton = document.querySelector(".button");

for (var i = 0; i < animals.length; i++) {
	// CREATE ELEMENTS
	var mydiv = document.createElement("div");
	var h2 = document.createElement("h2");
	var h3 = document.createElement("h3");
	var img = document.createElement("img");
	var p = document.createElement("p");

	// ADD CONTENT
	h2.textContent = animals[i].name;
	h3.textContent = animals[i].species;
	img.src = animals[i].thumbnail;
	p.textContent = animals[i].description;

	h2.setAttribute("style", "color: red");

	mydiv.appendChild(h2);
	mydiv.appendChild(h3);
	mydiv.appendChild(img);
	mydiv.appendChild(p);

	container.appendChild(mydiv);
}

deleteButton.addEventListener("click", function (event) {
	console.log(event.target);
});
