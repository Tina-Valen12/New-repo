//Function Declaration

function areaCalculation1(width, height) {
	return width * height;
}

const area1 = areaCalculation1(10, 8);
console.log(area1);

//Function Expression

const areaCalculation2 = function (width, height) {
	return width * height;
};

console.log(areaCalculation2(5, 9));

//Arrow Function

const areaCalculation3 = (width, height) => {
	return width * height;
};

console.log(areaCalculation3(85, 37));
