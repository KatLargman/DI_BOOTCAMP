//Daily Challange

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log('fruits massive origin: ' + fruits);
fruits.splice(0, 1); //1)
console.log('1. fruits after remove "Banana": ' + fruits);// display result 1)
fruits.sort (); //2)
console.log('2. fruits after Sort the array in alphabetical order: ' + fruits); //display result 2)
fruits.push("Kiwi"); //3)
console.log('3. fruits after adding "Kiwi" ' + fruits);
fruits.shift();//4)
console.log('4. fruits after delete "Apples": ' + fruits);
//console.log(fruits); //display result 4)
fruits.reverse();
console.log('5.fruits after delete reverse sorting: ' + fruits);

//ex2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let a = moreFruits [1][1][0];
console.log(' display Orange : ' + a); //display result 
