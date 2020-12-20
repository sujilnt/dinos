import images from "../images/*.png";
import "./grid.css";

const getImage = url => {
	return url.substring(1);
};

const gridItem = ({ name, image }) =>
	` <div class="grid-item">
	  	<div>${name}</div>
	  	<picture>
  			<source media="(min-width:350px)" srcset="${window.location.origin}/${image}">
  			<img src="${window.location.origin}/${image}" alt="Flowers" style="width:auto;">
		</picture>
	</div>`;

export const loadGrid = dinos => {
	const dinosGrid = [];
	dinos.forEach(dino => {
		dinosGrid.push(
			gridItem({
				name: dino.species,
				image: getImage(images[dino.species.toLowerCase()])
			})
		);
	});
	return dinosGrid.join("");
};

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
