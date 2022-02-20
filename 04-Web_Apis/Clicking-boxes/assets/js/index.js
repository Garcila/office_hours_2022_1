var container = document.querySelector(".container");

// create element
var mydiv = document.createElement("div");

// ADD CONTENT
mydiv.textContent = "🚀";
mydiv.classList.add("box");

// append to the page
container.appendChild(mydiv);

container.textContent = localStorage.getItem("name");

container.addEventListener("click", function (event) {
	localStorage.setItem("name", "pepito");
	// var clickedElement = event.target.dataset.number;
	// if (clickedElement === 1) {
	// 	var myTimer = setInterval(function () {
	// 		console.log("done");
	// 	}, 1000);
	// } else {
	// 	clearInterval(myTimer);
	// }
});
