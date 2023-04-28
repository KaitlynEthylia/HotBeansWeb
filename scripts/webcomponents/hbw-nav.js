class HBWNav extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<a href="index.html#home">
				<img src="assets/hotbeansweb.svg" class="noinvert"></img>
				<h2>hotbeans</h2>
				<button class="nav">
					<img src="assets/close.svg"></img>
				</button>
			</a>
			<span class="theme-switcher">
				<img src="assets/theme-light.svg" class="icon-light"><img src="assets/theme-dark.svg" class="icon-dark">
			</span>
			<div>
				<a href="index.html#about">
					<img src="assets/about.svg"></img>
					about us
				</a>
				<a href="index.html#learn">
					<img src="assets/learn.svg"></img>
					learn
				</a>
				<a href="index.html#team">
					<img src="assets/team.svg"></img>
					meet the team
				</a>
				<a href="index.html#jobs">
					<img src="assets/jobs.svg"></img>
					jobs
				</a>
				<a href="index.html#contact">
					<img src="assets/contact.svg"></img>
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
