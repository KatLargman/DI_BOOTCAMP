
let divId = document.querySelector("div"); //1
divId.setAttribute("id", "socialNetworkNavigation");
console.log(divId);
let newList = document.createElement("li"); //2.1
let node = document.createTextNode("Logout"); //2.2
newList.appendChild(node); //2.3
let list = document.querySelector("ul"); //2.4
list.appendChild(newList);
let firstList = list.firstElementChild.textContent; //3
console.log(firstList);
let lastList = list.lastElementChild.textContent;
console.log(lastList);
