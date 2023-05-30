class HBWNav extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<a onclick="closeNav()" href="index.html#home">
				<img src="assets/hotbeansweb.svg"></img>
				<h2>hotbeans</h2>
				<button class="nav">
					<img class="invert" src="assets/close.svg"></img>
				</button>
			</a>
			<span class="theme-switcher">
				<img src="assets/theme-light.svg" class="invert icon-light"><img src="assets/theme-dark.svg" class="invert icon-dark">
			</span>
			<div>
				<a onclick="closeNav()" href="index.html#about">
					<img class="invert" src="assets/about.svg"></img>
					about us
				</a>
				<a onclick="closeNav()" href="index.html#learn">
					<img class="invert" src="assets/learn.svg"></img>
					learn
				</a>
				<a onclick="closeNav()" href="index.html#team">
					<img class="invert" src="assets/team.svg"></img>
					meet the team
				</a>
				<a onclick="closeNav()" href="index.html#jobs">
					<img class="invert" src="assets/jobs.svg"></img>
					jobs
				</a>
				<a onclick="closeNav()" href="index.html#contact">
					<img class="invert" src="assets/contact.svg"></img>
					contact
				</a>
			</div>
		`;

		var style = document.createElement('link');
		style.type = "text/css";
		style.rel = "stylesheet";
		style.href = "styles/nav.css";
		document.getElementsByTagName("head")[0].appendChild(style);
	}
}

customElements.define('hbw-nav', HBWNav);
