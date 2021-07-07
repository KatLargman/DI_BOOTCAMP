//ex1 
infoAboutMe = () => console.log("Hi I'm Kate Largman, and I like learn new languages and coding."); //p1
infoAboutMe();
infoAboutPerson = (personName, personAge, personFavoriteColor) => console.log(`Hi I'm ${personName}, I'm ${personAge} and my favorite color is ${personFavoriteColor}`);// p2
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");
infoAboutPerson = (personName, personAge, personFavoriteColor, personHobbies) => {//3.1
	console.log(`Hi I'm ${personName}, I'm ${personAge} and my favorite color is ${personFavoriteColor}.\nmy hobbies are:`); //p3.2
	for (h of personHobbies)
	{ console.log(h); };
infoAboutPerson("David", 45, "blue", ["tennis", "painting"]); //p3.3
infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"]);
