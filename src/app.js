//import { getDinosList } from "./dino";

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
	human = getInputFormVaues(event.target.elements);
};

form.addEventListener("submit", onSubmit);
