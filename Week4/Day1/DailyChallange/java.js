const gameInfo = [
	{
	  username: "john",
	  team: "red",
	  score: 5,
	  items: ["ball", "book", "pen"],
	},
	{
	  username: "becky",
	  team: "blue",
	  score: 10,
	  items: ["tape", "backpack", "pen"],
	},
	{
	  username: "susy",
	  team: "red",
	  score: 55,
	  items: ["ball", "eraser", "pen"],
	},
	{
	  username: "tyson",
	  team: "green",
	  score: 1,
	  items: ["book", "pen"],
	},
  ];
  
  const addingRandomThings = (arr) => { //1 
	let myNewArray = [];
	arr.forEach((element) => {   //1 Create an array using forEach that contains all the usernames from the gameInfo array
	  myNewArray.push(element.username + `!`); // add an exclamation point (ie. “!”) to the end of every username.
	});
	console.log(myNewArray);
	return myNewArray;
  };
  
  addingRandomThings(gameInfo);
  
  const biggerThan5 = (arr) => {
	let scoreArray = []; //2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
	arr.forEach((element) => {
	  console.log(element.score);
	  element.score > 5
		? scoreArray.push(element.score)
		: console.log(element.score);
	});
	console.log(scoreArray);
  };
  
  biggerThan5(gameInfo);
  
  const totalScore = (arr) => { //3 Find and display the total score of the users.
	let score = 0;
	arr.forEach((element) => {
	  console.log(element["score"]);
	  score += element["score"];
	});
	console.log(`${score} total score`);
  };
  
  totalScore(gameInfo);
