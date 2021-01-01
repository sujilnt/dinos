import images from "../images/*.png";
import "./grid.css";

// removing slash from the input image .
const getImage = url => {
	return url.substring(1);
};

const gridItem = ({ name, image }) =>
	` <div class="grid-item">
	  	<h3>${name}</h3>
	  	<picture>
  			<source media="(min-width:350px)" srcset="${window.location.origin}/${image}">
  			<img src="${window.location.origin}/${image}" alt="Flowers" style="width:auto;">
		</picture>
	</div>`;

// inserting human information into the grid.
const addHumanInfoToGrid = (human, dinos) => {
	const humanInformation = gridItem({
		name: human.name,
		image: getImage(images["human"])
	});
	// inserting the human information at the center of the grid.
	dinos.splice(Math.floor(dinos.length / 2), 0, humanInformation);
	return dinos;
};

export const loadGridItems = (dinos, humanInfo) => {
	const dinosGrid = [];
	dinos.forEach(dino => {
		dinosGrid.push(
			gridItem({
				name: dino.species,
				image: getImage(images[dino.species.toLowerCase()])
			})
		);
	});

	return addHumanInfoToGrid(humanInfo, dinosGrid);
};

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
