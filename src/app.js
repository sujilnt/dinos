import { getDinos } from "./dino/index";
import { loadGridItems } from "./grid/grid";
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
	// removing form elements from the ui.
	form.innerHTML = null;
	// loading all the fetched dinos & human in the grid
	grid.innerHTML = loadGridItems(getDinos(), human).join("");
};

form.addEventListener("submit", onSubmit);
