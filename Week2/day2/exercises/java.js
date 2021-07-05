//Ex1
let x = 5;
let y = 7;

//You should display:
//x is the biggest number

    if (x === y) {
        console.log("value of x is equal y");
    } else if (x > y) {
        console.log("value of x bigger than value of y");
    } else {
        console.log("value of x smaller than value of y");
    }

//ex2

//1.Create a variable called newDog where it’s value 
//is “Chihuahua”.
//2.Check and display how many letters are in newDog.
//3.Display the newDog variable in uppercase and then 
//in lowercase (no need to create new variables, just 
//console.log twice).
//4.Check if the variable newDog is equal to “Chihuahua”
//if it does, display ‘I love Chihuahuas, it’s 
//my favorite dog breed’
//else, console.log ‘I dont care, I prefer cats’

let newDog = "Chihuahua"; //1
console.log("variable value is" +newDog);//1
let long =newDog.length;//2
console.log("in variable newDog there is letters: " +long);//2
console.log("in upper case: " +newDog.toUpperCase()); //3
console.log("in lower case: " +newDog.toLowerCase());//3
//newDog = "Chi";
if (newDog === "Chihuahua") { //4
        console.log("I love Chihuahuas, it’s my favorite dog breed");
    } 
	else {
       console.log("I dont care, I prefer cats");
    }

//ex3
//1.Prompt the user for a number and save it to a variable.
//2.Check whether the variable is even or odd.
	//a)If it is even, display: “x is an even number”. Where x is the actual number the user chose.
	//b)If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.


let x1 = prompt('Please, enter integer number:', );

if (x1%2 == 0 ) { 
        console.log("x is an even number");
    } 
	else {
       console.log("x is an odd number");
    }

//ex4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

//users.shift();//if delete 1 element
//console.log('after delete one element ' + users);


if (users.length === 0) { 
	console.log("no one is online");
} 
else if (users.length === 1){
   console.log("Online user" +users[1]);
}
else if (users.length === 2){
	console.log("Online users" +users[0], users[1]);
 }
 else if (users.length === 3){
	console.log(`online ${users[0]} , ${users[1]} and 1 more online `);
 }
else {
	console.log(`online ${users[0]} , ${users[1]} and 2 more online `);
}

