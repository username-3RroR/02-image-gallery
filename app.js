console.log('Hello New York!');

const bigImageContainer = document.getElementById('bigImageContainer');
const navImageContainer = document.getElementById('navImageContainer');

const images = document.getElementById('images').children;
/*
// the function to call back for to sync with the little image navigation container
function openBigImage(openThisImage) {
	bigImageContainer.innerHTML = '';

	const bigImage = document.createElement('img');

	bigImage.src = openThisImage.src;
	bigImage.alt = openThisImage.alt;

	bigImageContainer.appendChild(bigImage);
}

function runImg() {
	images.forEach(function (image, index) {
		let imgTag = document.createElement('img');

		imgTag.src = image.src;
		imgTag.alt = image.alt;

		imgTag.addEventListener('click', function () {
			openBigImage(image);

			currentImgIndex = index;
		});
	});
} 
*/
