console.log('Hello New York!');

const bigImageContainer = document.getElementById('bigImageContainer');
const images = document.getElementById('images').children;

const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');

let currentImageIndex = 0;

function selectImages(index) {
	for (const image of images) {
		image.addEventListener('click', function () {
			bigImages(image);

			if (index >= images.length) {
				currentImageIndex = 0;
			} else if (index < 0) {
				currentImageIndex = images.length - 1;
			} else {
				currentImageIndex = index;
			}
		});
	}
}

selectImages();

previousBtn.addEventListener('click', function () {
	selectImages(currentImageIndex - 1);
});

nextBtn.addEventListener('click', function () {
	selectImages(currentImageIndex + 1);
});

function bigImages(img) {
	bigImageContainer.innerHTML = '';

	const bigImage = document.createElement('img');

	bigImage.src = img.src;
	bigImage.alt = img.alt;

	bigImage.classList.add('big-images');

	bigImageContainer.appendChild(bigImage);
}
