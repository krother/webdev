console.log('hello from the carousel script');

// STEP 1: List of all your pictures
const images = [
	'panda_kayak.png',
	'sakura_boats.png',
	'rafting.png',
	'relaxing_heron.png',
	'stereotypically_biased_frogs.png',
];

// STEP 2: Keep track of which picture we're showing
let currentIndex = 0; // Start at the first picture (0 = first)

// STEP 3: Find the elements on the page we need to change
const imageElement = document.getElementById('carouselImage');
const dotsContainer = document.getElementById('dotsContainer');
console.log('imageElement', imageElement);

// STEP 4: Function to show a picture
function showImage(index) {
	// Change the image source to show the new picture
	imageElement.src = images[index];

	// Update the dots to show which picture is active
	updateDots(index);
}

// STEP 5: Function to go to the next picture automatically
function nextImage() {
	currentIndex = currentIndex + 1; // Move forward one picture

	// If we're past the last picture, go back to the first
	if (currentIndex >= images.length) {
		currentIndex = 0;
	}

	showImage(currentIndex);
}

// STEP 6: Create the dots (one for each picture)
function createDots() {
	// Loop through each image and create a dot
	for (let i = 0; i < images.length; i++) {
		const dot = document.createElement('span');
		dot.className = 'dot';
		dotsContainer.appendChild(dot);
	}
}

// STEP 7: Update which dot is highlighted
function updateDots(index) {
	const dots = document.getElementsByClassName('dot');

	// Remove 'active' from all dots
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('active');
	}

	// Add 'active' to the current dot
	dots[index].classList.add('active');
}

// STEP 8: Start the carousel
createDots(); // Make the dots
showImage(currentIndex); // Show the first picture

// STEP 9: Automatically change pictures every 3 seconds
setInterval(nextImage, 3000); // 3000 milliseconds = 3 seconds
