import { Dinos } from "./data.json";
export class Dino {
	constructor({ height, weight, diet, species,option }) {
		this.height = height;
		this.weight = weight;
		this.diet = diet;
		this.species = species;
		this.fact  = setfact(option);
		//console.log("plain", height, weight, diet);
		//console.log(this.height, this.weight, this.diet);
	}

    setfact(option){
		
		switch(option){
			case '1':
				this.compareHeightAndSetFact(this.height)
		}
	}
	addFact(fact){
		console.log(fact,this);
		this.fact = fact;
	}
	compareHeightAndSetFact(height) {
		let fact = `Our heights are equal!  ${height} inches`;
		if (this.height > height) {
			fact = `I am taller than you by ${this.height - height} inches`;
		} else if (this.height < height) {
			fact = `You are taller than me by ${height - this.height} inches`;
		} else {
			//swallow
		}
		return fact;
	}

	compareWeightAndSetFact(weight) {
		//Weight in JSON file is in lbs,
}

//console.log(Dinos);

export default function getDinos() {
	console.log("dinos", Dinos);
	return Dinos.map(dino => new Dino(dino));
}
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
