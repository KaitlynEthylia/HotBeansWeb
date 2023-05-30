var galleryItems = document.querySelectorAll('reel-entry');
galleryItems = Array.from(galleryItems);

function rotateGallery() {
	galleryItems.forEach(item => {
		var pos = Number(item.dataset.pos);
		pos -= 1;
		if (pos == -4) {
			pos = 3;
		}
		item.dataset.pos = pos;
	})
}

setInterval(rotateGallery, 4000);
