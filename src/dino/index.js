import Dinos from "./dino.json";

export class Dino {
	constructor({ height, weight, diet }) {
		this.height = height;
		this.weight = weight;
		this.diet = diet;
		console.log("plain", height, weight, diet);
		console.log(this.height, this.weight, this.diet);
	}
	compareHeight(height) {
		console.log(this.height, height);
	}

	compareWeight(weight) {
		//Weight in JSON file is in lbs,
		console.log(weight, this.weight);
	}
}

//console.log(Dinos);

export function getDinosList() {
	return Dinos.map(dino => new Dino(dino));
}
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.