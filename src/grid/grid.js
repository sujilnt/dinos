import images from "../images/*.png";
import "./grid.css";

// removing slash from the input image .
const getImage = url => {
	return url.substring(1);
};

const gridItem = ({ name, image,fact }) =>
	` <div class="grid-item">
	  	<h3>${name}</h3>
  			<img src="${window.location.origin}/${image}" alt="Flowers" style="width:auto;">
			${fact ? `<p>${fact ? fact: '&nbsp;'}</p>`:  `&nbsp;`}
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

// Add tiles of dinos and human to DOM
export const loadGridItems = (dinos, humanInfo) => {
	const dinosGrid = [];
	// Generate Tiles for each Dino in Array
	dinos.forEach(dino => {
		dinosGrid.push(
			gridItem({
				name: dino.species,
				image: getImage(images[dino.species.toLowerCase()]),
				fact: dino.fact
			}));
	});

	return addHumanInfoToGrid(humanInfo, dinosGrid);
};
