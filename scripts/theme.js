const html = document.querySelector("html");

const preferredTheme = window.matchMedia("prefers-color-scheme: dark");
setAppropriateTheme(preferredTheme);

preferredTheme.addEventListener("change", preferredTheme);

function setAppropriateTheme(preferredTheme) {
	if (preferredTheme.matches) {
		html.classList.add("dark");
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
