var list = document.getElementsByClassName("nav");
const nav = document.querySelector("hbw-nav");

for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click", function(event) {
		event.preventDefault();
		nav.classList.toggle("open");
	});
}

function closeNav() {
	nav.classList.remove("open");
}
