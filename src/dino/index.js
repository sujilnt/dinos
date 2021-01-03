import { Dinos } from "./data.json";

const subtract = (a,b) => a - b ;

// random number generator
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

export class Dino {
	constructor({dino, humanInput,randomFact}) {
		const { height, weight, diet, species, fact } = dino;
		this.height = height;
		this.weight = weight;
		this.diet = diet;
		this.species = species;

		// identifying birds and other species, birds weigh less than dinos
		if(weight > 1){
			// setting facts by comparing the user
			this.setFact(humanInput,randomFact,fact);
		} else {
			// for birds setting fact as it is without comparing.
			this.fact = fact;
		}
	}

	setFact({ feet, inches, diet, weight} ,factOptionName,fact) {
		switch (factOptionName) {
			case 'height':
				const totalHeight = feet + inches;
				this.fact = this.compareHeightAndSetFact(totalHeight)
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
    // compares the height of dino vs human and returns the fact.
	compareHeightAndSetFact(height) {
		// Note height in inches.
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

	// compares the weight of dino vs human and returns the fact.
	compareWeightAndSetFact(weight) {
		// NOTE: Weight in JSON file is in lbs.
		let fact = `Our weights are equal! ${weight} lbs`;
		if (this.weight > weight) {
			fact = `I am weigh more than you by ${subtract(this.weight, weight)} lbs`;
		} else if (this.weight < weight) {
			fact = `You weigh more than me by ${subtract(weight, this.weight)} lbs`
		} else {
			// swallow 
		}
		return fact;
	}

	// compares the diet of dino vs human and returns the fact.
	compareDietAndSetFact(diet) {
		let fact;
		if (this.diet === diet.toLowerCase()) {
			fact = `Our diets are same, ${diet}!`
		} else {
			fact = `Our diets are different`;
		}
		return fact;
	}
}


export default function getDinos(humanInput) {
	const compareOptions = ["height", "weight","diet"];
	const randomFact = compareOptions [getRandomInt(compareOptions.length)];
	return Dinos.map(dino => new Dino({dino, humanInput,randomFact}));
}
