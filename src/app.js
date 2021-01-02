import getDinos from "./dino/index";
import {loadGridItems} from "./grid/grid";

export const grid = document.getElementById("grid");
export const buttonId = document.getElementById("btn");
export const form = document.getElementById("dino-compare");
export const formElements = form.elements;
export let human = {};

const button = ()=>`<button id="btn" onclick={loadForm()}>Compare Me!</button>`
// converts feet into inches
const convertFeetToInches = (feet) =>feet*12;

const getInputFormValues = inputFormElements => {
	const humanInformation = {};
	Array.prototype.forEach.call(inputFormElements, ({ name, value }) => {
		let isNameEqualToFeet = name === "feet";
		humanInformation[name] = isNameEqualToFeet ? convertFeetToInches(value) : value;
	});
	delete humanInformation[""];
	return humanInformation;
};

const onSubmit = event => {
	event.preventDefault();
	// setting form values to human
	let inputFormValues = getInputFormValues(event.target.elements);
	console.log(inputFormValues);
	// removing form elements from the ui.
	form.style.display = "none";

    // fetching the dinos from the dinos.json
	let dinos = getDinos(inputFormValues);

	// loading all the fetched dinos & human in the grid
	grid.innerHTML = loadGridItems(dinos, inputFormValues).join("");
	grid.append(button);
};

form.addEventListener("submit", onSubmit);
