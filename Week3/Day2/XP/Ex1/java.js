let lP = document.getElementsByTagName("article")[0].lastElementChild;//1
lP.remove();
let h2 = document.getElementsByTagName("h2")[0]; //2
h2.addEventListener("click",function ()
{
    h2.style.backgroundColor = "red";
})
let h1 = document.getElementsByTagName("h1")[0];//3
h1.addEventListener("click",function ()
{
    h1.style.fontSize =  Math.floor((Math.random() * 100) + 1) +"px";
})
let h3 = document.getElementsByTagName("h3")[0]; //4
h3.addEventListener("click",function () 
{
    h3.style.display ="none";
})
let button = document.createElement("button");//5
button.innerHTML = "Changing font";
document.body.appendChild(button);
button.addEventListener("click", changeToBold);
function changeToBold() 
{
    document.body.style.fontWeight = 'bold';
}
let submit = document.getElementById("submit"); //6
submit.addEventListener("click", getValues);
function getValues(event) {
    let form = document.getElementsByTagName("form")[0];
    console.log(form);
    let valueName1 = form.elements.fname.value;
    console.log(valueName1);
    let valueName2 = form.elements.lname.value;
    console.log(valueName2);
    if(valueName1.length < 4 || valueName2 < 4)
    {
        alert("Please fill in at least 4 symbols please");
    }
    else
    {
        let div = document.getElementsByClassName("usersAnswer")[0];
        let table = document.createElement("table");
        let row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = valueName1;
        cell2.innerHTML = valueName2;
        div.appendChild(table);
    }
    event.preventDefault();
}
let P2 = document.getElementsByTagName("p")[1]; // 7
console.log(P2);
P2.addEventListener("mouseover", function () 
{
    P2.style.opacity = "0.2"
    P2.style.transition = "0.8s"
});
P2.addEventListener("mouseout", function () 
{
    P2.style.opacity = "1";
    P2.style.transition = "0.5s";
});
