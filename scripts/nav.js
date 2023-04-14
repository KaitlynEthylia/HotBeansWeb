var list = document.getElementsByClassName("nav");

for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click", function(event) {
		event.preventDefault();
		let nav = document.querySelector("nav");
		nav.classList.toggle("open");
	});
}
