let listn = document.getElementsByClassName("list");//1
listn[0].lastElementChild.textContent = "Richard"
for(let i = 0; i<listn.length; i++) //2
    { listn[i].firstElementChild.textContent = "Kate"}
for(let i = 0; i <listn.length; i++) //3
{
    let newLi = document.createElement("li");
    let node = document.createTextNode("Hey students");
    newLi.appendChild(node)
    listn[i].append(newLi)
}
let secondList = listn[1] //4
let sarah = secondList.children[1]
secondList.removeChild(sarah)
