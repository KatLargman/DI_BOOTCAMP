let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

const displayFavoriteColor = (array) => {
  array.forEach((element, i) => {
    console.log(`${i + 1}# choice is ${element}`);
  });
};
displayFavoriteColor(colors);
