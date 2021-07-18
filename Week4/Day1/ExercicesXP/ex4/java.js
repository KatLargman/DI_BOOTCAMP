let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];

const myFavoriteColors = (array) => {
  let four = 4;
  array.forEach((element, i) => {
    if (i == 0) {
      console.log(`1${ordinal[1]} choice ${element}`);
    } else if (i == 1) {
      console.log(`2${ordinal[2]} choice ${element}`);
    } else if (i == 2) {
      console.log(`3${ordinal[3]} choice ${element}`);
    } else {
      console.log(`${four}${ordinal[0]} choice ${element}`);
      four++;
    }
  });
};

myFavoriteColors(color);
