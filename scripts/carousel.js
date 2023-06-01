const carousel = document.querySelector('#team ul');
const carouselItems = document.querySelectorAll('#team li');
const elems = Array.from(carouselItems);

carousel.addEventListener('click', function(event) {
	var newActive = event.target;
	var isItem = newActive.closest('#team li');

	if (!isItem || isItem.classList.contains('active')) {
		return;
	};

	update(isItem);
});

var timeout;

function update(newActive) {
	const first = elems.find((elem) => elem.dataset.pos == -2);
	const prev = elems.find((elem) => elem.dataset.pos == -1);
	const current = elems.find((elem) => elem.dataset.pos == 0);
	const next = elems.find((elem) => elem.dataset.pos == 1);
	const last = elems.find((elem) => elem.dataset.pos == 2);

	current.classList.remove('active');
	newActive.classList.add('active');

	var newActivePos = newActive.dataset.pos;

	[first, prev, current, next, last].forEach(item => {
		item.dataset.pos = rotate(item.dataset.pos, newActivePos);
	});

	clearTimeout(timeout);
	timeout = setTimeout(update, 10000, elems.find((elem) => elem.dataset.pos == 1));
};

function rotate(a, b) {
	a = Number(a);
	b = Number(b) * -1;
	b += a;
	if (b > 2 || b < -2) {
		b = (5 - Math.abs(b)) * -(Math.sign(b));
	}
	return b
}

timeout = setTimeout(update, 10000, elems.find((elem) => elem.dataset.pos == 1));
