function createTemplate(tagname, sheetname, templateContets) {
	var template = document.createElement('template');
	template.id = tagname
	template.innerHTML = templateContets;
	document.getElementsByTagName("body")[0].appendChild(template);

	customElements.define(tagname, class extends HTMLElement {
		constructor() {
			super();
			const template = document.getElementById(tagname).content;
			this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));

			var sheet = document.createElement('link');
			sheet.rel = 'stylesheet';
			sheet.type = 'text/css';
			sheet.href = `styles/${sheetname}.css`;
			this.shadowRoot.prepend(sheet);
		}
	})
}

createTemplate('reel-entry', 'sec-home', `
	<figure>
		<slot name="image"></slot>
		<hr />
		<figcaption>
			<slot name="date"></slot>
			|
			<slot name="site"></slot>
		</figcaption>
	</figure>
`);

createTemplate('fw-course', 'sec-jobs', `
	<div>
		<h1>
			<slot name='course'>
		</h1>
		<slot name="icon"></slot>
	</div>
	<hr />
	<slot name='desc'></slot>
	<hr />
	<slot name='video'></slot>
	<small>Watch this youtube video to get a short introduction</small>
	<hr />
	<span>Or visit this site to learn more</span>
	<slot name='link'></slot>
`);

createTemplate('team-member', 'sec-team', `
	<div>
		<slot name="photo"></slot>
		<slot name="name"></slot>
		<slot name="desc"></slot>
		<div>
			<hr />
			<slot name="date"></slot>
		</div>
	</div>
`);

