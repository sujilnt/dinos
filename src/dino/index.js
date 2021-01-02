import { Dinos } from "./data.json";
import {human} from "../app";

const subtract = (a,b) => a - b ;

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

export class Dino {
	constructor({dino, humanInput,randomFact}) {
		const {height, weight,diet,species} = dino;
		this.height = height;
		this.weight = weight;
		this.diet = diet;
		this.species = species;
		// setting facts for the user
		this.setFact(humanInput,randomFact);
		console.log(this.fact);
	}

	setFact(humanInput,factOptionName) {
		console.log( factOptionName);
		const { feet, inches, diet, weight} = humanInput;
		switch (factOptionName) {
			case 'height':
				const height = feet + inches;
				this.fact = this.compareHeightAndSetFact(height)
				break;
			case 'weight':
				this.fact = this.compareWeightAndSetFact(weight);
				break;
			case 'diet':
				this.fact = this.compareDietAndSetFact(diet);
				break;
			default:
				this.fact = "no fact to display";
				break;
		}
	}

	compareHeightAndSetFact(height) {
		let fact = `Our heights are equal!  ${height} inches`;
		if (this.height > height) {
			fact = `I am taller than you by ${this.height - height} inches`;
		} else if (this.height < height) {
			fact = `You are taller than me by ${subtract(height, this.height)} inches`;
		} else {
			//swallow
		}
		return fact;
	}

	compareWeightAndSetFact(weight) {
		//Weight in JSON file is in lbs,
		let fact = `Our weights are equal! ${weight}`;
		if (this.weight > weight) {
			fact = `I am weigh more than you by ${subtract(this.weight, weight)}`;
		} else if (this.weight < weight) {
			fact = `You weigh more than me by ${subtract(weight, this.weight)}`
		} else {
			// swallow 
		}
		return fact;
	}

	compareDietAndSetFact(diet) {
		let fact = ' ';
		if (this.diet === diet) {
			fact = `Our diets are same ${diet}`
		} else {
			fact = `Our diets are different `;
		}
		return fact;
	}
}


export default function getDinos(humanInput) {
	console.log("dinos", Dinos);
	const compareOptions = ["height", "weight","diet"];
	const randomFact = compareOptions [getRandomInt(3)];
	return Dinos.map(dino => new Dino({dino, humanInput,randomFact}));
}
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
