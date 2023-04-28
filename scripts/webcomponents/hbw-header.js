class HBWHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<span>
				<img src="assets/hotbeansweb.svg" class="noinvert">
				<h1>hotbeans</h1>
			</span>
			<span>
				<a href="old"><img src="assets/arrow-right.svg"></img></a>
				<button class="nav">
					<img src="assets/menu.svg"></img>
				</button>
			</span>
		`;

		var style = document.createElement('link');
		style.type = "text/css";
		style.rel = "stylesheet";
		style.href = "styles/header.css";
		document.getElementsByTagName("head")[0].appendChild(style);
	}
}

customElements.define('hbw-header', HBWHeader);
