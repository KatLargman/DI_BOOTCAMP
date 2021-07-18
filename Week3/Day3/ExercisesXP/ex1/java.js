const outterBox = document.getElementById("container");
const innerBox = document.getElementById("animate");
const buttonToClick = document.getElementsByTagName("button")[0];

const moveBox = () => {
  //declaring the function
  let pos = 0; //saying what the position is
  let interval = setInterval(() => {
    //using setinterval, setting it to a variable
    if (pos == 350) {
      clearInterval(interval); //clearing the interval
    } else {
      console.log(`the ${counter} is`);
      pos++;
      innerBox.style.left = `${pos}px`;
    }
  }, 5);
};

buttonToClick.addEventListener("click", moveBox);
