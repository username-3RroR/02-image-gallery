console.log('Hello New York!');

const bigImageContainer = document.getElementById('bigImageContainer');
const images = document.getElementById('images').children;

let currentImageIndex = 0;

function selectImages() {
	for (const image of images) {
		image.addEventListener('click', function () {
			bigImages(image);

			currentImageIndex = index;
		});
	}
}

selectImages();

function bigImages(img) {
	bigImageContainer.innerHTML = '';

	const bigImage = document.createElement('img');

	bigImage.src = img.src;
	bigImage.alt = img.alt;

	bigImageContainer.appendChild(bigImage);
}
