grid = [];
var rows = 10;
var columns = 10; 

function addToMyArray(){
	for (var x = 0; x < rows; x++) {
		grid.push([]);
		for (var y = 0; y < columns; y++){
			grid.push(x + "," + y);
		}
	};
}
addToMyArray();
console.log(grid);