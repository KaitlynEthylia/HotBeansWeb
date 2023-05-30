const html = document.querySelector("html");

const lightsrc = "assets/jobs-light.png";
const darksrc = "assets/jobs-dark.png";

const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)");
setAppropriateTheme(preferredTheme);

preferredTheme.addEventListener("change", preferredTheme);

function setAppropriateTheme(preferredTheme) {
	if (preferredTheme.matches) {
		html.classList.add("dark");
		document.getElementById('jobs-img').setAttribute("src", darksrc);
	}
}

var switchlist = document.getElementsByClassName("theme-switcher");

for (var i = 0; i < switchlist.length; i++) {
	var list = switchlist[i].children;

	for (let i = 0; i < list.length; i++) {
		list[i].addEventListener("click", function() {
			html.classList.toggle("dark");
		});
	}
}

var observer = new MutationObserver(mutList => {
	if (mutList[0].type == "attributes" && mutList[0].attributeName == "class") {
		var elem = document.getElementById('jobs-img');
		if (html.classList.contains("dark")) {
			elem.setAttribute("src", darksrc);
		} else {
			elem.setAttribute("src", lightsrc);
		}
	}
});
observer.observe(html, { attributes: true });
