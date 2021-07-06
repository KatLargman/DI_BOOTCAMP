// Ex1  Fav_Colors
let counter = 0;
let colors = ["red", "yellow", "green", "gold","blue", "silver" ];
console.log(`all colors in array:${colors}`);
let bonus = ["1st", "2nd" ,"3rd", "4th", "5th", "6th"];// bonus
for(i=0; i < colors.length; i++){
    counter++;
    console.log(`my #${counter} choice is ${colors[i]}`);
    console.log(`my ${bonus[i]} choice is ${colors[i]}`);// bonus
}

// Ex2 People
let people = ["Greg", "Mary", "Devon", "James"];
people.shift(); //1
console.log(people);//1 result
people.splice(2, 1, "Jason");//2
console.log(people);//2
people.push("Kate");//3
console.log(people);//3

for(i = 0; i < people.length; i++){//4
    console.log(people[i]);
}

for (let i = 0; i < people.indexOf("Jason")+1; i++) {//5
    console.log(people[i]);
}

// mary, devon, jason, kate

let newPpl = people.slice(1,3);
console.log(newPpl);

console.log(people.indexOf("Mary"));//6

console.log(people.indexOf("Foo"));//8  -1/ no Foo in  array 

let last = people[people.length -1];//7
console.log(last);

// Ex3 repeat
let user_counter;
do {
    user_counter = parseInt(prompt("Please enter a number: ")); //check that it is int if not return integer
}
while (user_counter < 10);
    

// Ex4 attendance
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  };

//let studentName = prompt("Enter your name: ").toLowerCase();
let studentName = window.prompt("Enter your name: ");
studentName.toLowerCase();

if(studentName in guestList){
    console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`)
}else {
    console.log("Hi! I'm a guest.");
}

// Ex5 family

let family = {
    dad : "Abram",
    mom : "Sara",
    son : "David",
    daughter : "Rivka"
};

for(let i in family){
    console.log("family: " +i, family[i]);
}

// Ex6 rudolf
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };


let k = Object.keys(details);
let v = Object.values(details);
let x = 0;
let sentance = [];
for(let key in details){
  sentance.push(`${k[x]} ${v[x]}`);
  x++;
}
console.log(sentance.join(" "));

//Ex7 secret
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let secret = [];
for(i in names){
    let x = names[i][0];
    secret.push(x);   
}
//let lable = secret.join() // separate words
let lable = secret.join("") // need quotes because would be just separate words
console.log("lable of Secret Group: " +lable.toString());
