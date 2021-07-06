/ one loop
let loop = "";
for (let i = 0; i < 6; ++i) {
	loop += "* ";
    console.log(loop);
}
console.log("there above used one loop method");
// nested loop
let nested = [];
for (i = 0; i <= 3; ++i) {
	for (let j = 0; j < i; ++j) {
		nested.push("*");
		console.log(nested.join(" "));
	}
}
console.log("there above used nested loop method");
