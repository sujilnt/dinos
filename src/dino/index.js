import { Dinos } from "./data.json";

const subtract = (a,b) => a - b ; 
export class Dino {
	constructor({ height, weight, diet, species,option }) {
		this.height = height;
		this.weight = weight;
		this.diet = diet;
		this.species = species;
		this.fact  = setfact(option);
	}

    setfact(option){
		
		switch(option){
			case 'height':
				this.compareHeightAndSetFact(this.height)
			case 'weight':
				this.compareWeightAndSetFact(this.weight);
			case 'diet':
			     this.compareDietAndSetFact(this.diet)		
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
			fact = `You are taller than me by ${subtract(height,this.height)} inches`;
		} else {
			//swallow
		}
		return fact;
	}

	compareWeightAndSetFact(weight) {
		//Weight in JSON file is in lbs,
		let fact = `Our weights are equal! ${weight}`;
		if (this.weight> weight){
			fact  = `I am weigh more than you by ${subtract(this.weight,weight)}`; 	
		}else if(this.weight < weight){
			fact  = `You weigh more than me by ${subtract(weight,this.weight)}`
		}else{
			// swallow 
		}
		return fact;
	}

	compareDietAndSetFact(diet){
	    let fact = ' ';
		if(this.diet === diet){
          fact = `Our diets are same ${diet}`
		} else{
           fact =`Our diets are different `; 
		}
		return fact;
	}



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
