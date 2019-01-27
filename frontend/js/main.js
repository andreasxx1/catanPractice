(function() {
	'use strict';

	document.addEventListener("DOMContentLoaded", function () {
		//

		function createHexagon() {
			const hex1 = document.createElement('div');
			const hex2 = document.createElement('div');
			const hexc = document.createElement('div'); // Hexagon container
			// Adding CSS classes
			hex2.classList.add('hexagon-in2');
			hex1.classList.add('hexagon-in1');
			hexc.classList.add('hexagon-wrapper','hexagon','hexagon1');
			// Organizing parents and childrens
			hex1.appendChild(hex2);
			hexc.appendChild(hex1);

			hexc.style.width = '300px';
			hexc.style.height = '150px';
			hexc.style.marginLeft = -(parseInt(hexc.style.width)/2.05)+'px';

			return hexc;
		}

		function createLevel(numberOfTiles) {
			const level = document.createElement('div');
			// Creating tiles (hexagons)
			for (let i = 0; i < numberOfTiles; i++) { 
				level.appendChild(createHexagon()); 
			}
			return level;
		}

		// 5-3, 7-4, 9-5
		function createGame(numberOfLevels=5, minTilesPerLevel=3) {
			let isPlus = true;
			let tilesPerLevel = minTilesPerLevel;
			const gameArea = document.createElement('div');
			//
			for (let i = 0; i < numberOfLevels; i++) {
				gameArea.appendChild(createLevel(tilesPerLevel));
				// Increasing or decreasing te number of tiles based on the level will be created next
				tilesPerLevel = isPlus ? ++tilesPerLevel : --tilesPerLevel;
				// Once it surpass the threshold (middle of the map) the number of tiles start decrasing (to create a mirror map)
				isPlus = (tilesPerLevel >= minTilesPerLevel + Math.floor(numberOfLevels/2)) ? false : isPlus;
			}
			return gameArea;
		}

		document.querySelector('.game-container').appendChild(createGame());
	});

})();