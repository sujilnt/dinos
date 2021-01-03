import getDinos from "./dino/index";
import {loadGridItems} from "./grid/grid";

export const grid = document.getElementById("grid");
export const form = document.getElementById("dino-compare");
export const container = document.getElementById("container");
export let human = {};

// creating button for user .
const createButton = (text,callback)=>{
	const button = document.createElement("button");
	button.innerText = text;
	button.id="goBack";
	button.onclick = callback;
	return button;
}

// converts feet into inches
const convertFeetToInches = (feet) =>feet*12;

// get values from form
const getInputFormValues = inputFormElements => {
	const humanInformation = {};
	Array.prototype.forEach.call(inputFormElements, ({ name, value }) => {
		let isNameEqualToFeet = name === "feet";
		humanInformation[name] = isNameEqualToFeet ? convertFeetToInches(value) : value;
	});
	delete humanInformation[""];
	return humanInformation;
};

// displaying form and hiding the grid.
const goBack = ()=>{
	// removing grid and goback button
	grid.remove();
	document.getElementById("goBack").remove();

	// displaying and resetting the forms.
	form.reset();
	form.style.display = "block";
}

const onSubmit = event => {
	event.preventDefault();
	// setting form values to human
	let inputFormValues = getInputFormValues(event.target.elements);

	// hiding form elements from the ui.
	form.style.display = "none";

    // fetching the dinos from the dinos.json
	let dinos = getDinos(inputFormValues);

	// loading all the fetched dinos & human in the grid
	grid.innerHTML = loadGridItems(dinos, inputFormValues).join("");

	// adding goback button to the DOM
	container.append(createButton("go back", goBack));
};

// addEventListener for form submission
form.addEventListener("submit", onSubmit);
