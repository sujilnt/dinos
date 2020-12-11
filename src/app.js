// Create Dino Constructor

// Create Dino Objects
const dinos = new Dino();
console.log(dinos);
// Create Human Object
const human = {};
function load() {
	function Dino() {
		this.dinos = [];
	}

	const dinos = new Dino();
}
// Use IIFE to get human data from form
(() => {
	const buttonId = document.getElementById("btn");
	const formElements = document.getElementById("dino-compare").elements;
	Array.prototype.forEach.call(formElements, element => {
		console.log(element, element.name);
	});
	buttonId.addEventListener("click", () => {
		console.log("button is clicked");
		Array.prototype.forEach.call(formElements, element => {
			human[element.name] = element.value;
		});
	});
})();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
