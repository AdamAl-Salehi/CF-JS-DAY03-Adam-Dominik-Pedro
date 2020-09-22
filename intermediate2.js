function grades(math, physics, english) {
	var math = prompt("enter math grade:");
	var physics = prompt("enter physics grade:");
	var english = prompt("enter english grade:");

	var sum = Number(math) + Number(physics) + Number(english);
	var avg = sum / 3;

	console.log("Sum: " + sum + "\n" + "Average: " + avg);
}

grades();


