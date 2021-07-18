//Write a JavaScript function that checks whether the value of an input is a string or not.

const checkingForString = (str) => {
  if (typeof str === "string") {
    console.log("is a string");
  } else console.log("it is not a string");
};

checkingForString(33);
checkingForString(`lol`);
checkingForString("33lol omg");
checkingForString("33");
checkingForString(0);
