import { getDinos } from "./dino/index";
import { loadGrid } from "./grid/grid";
export const grid = document.getElementById("grid");
export const buttonId = document.getElementById("btn");
export const form = document.getElementById("dino-compare");
export const formElements = form.elements;
export let human = {};

const getInputFormVaues = inputFormElements => {
	const humanInformation = {};
	Array.prototype.forEach.call(inputFormElements, ({ name, value }) => {
		humanInformation[name] = value;
	});
	delete humanInformation[""];
	return humanInformation;
};

const onSubmit = event => {
	event.preventDefault();
	// setting form values to human
	human = getInputFormVaues(event.target.elements);

	// loading all the dinos in the grid 
	grid.innerHTML = loadGrid(getDinos());

};

form.addEventListener("submit", onSubmit);
