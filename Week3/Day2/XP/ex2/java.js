let para = document.getElementsByTagName("p")[0]
let array = [];
function getBold_items() 
{
    let str = para.querySelectorAll("Strong");
    let str1;
    for(let i = 0; i<str.length; i++)
    {
        str1 = str[i];
        array.push(str1);
    }

return array;
}

para.addEventListener("mouseover", highlight);
function highlight()
{
    getBold_items()
    for(const element of array)
    {
        element.style.color = "blue";
    }
}

para.addEventListener("mouseout", return_normal)

function return_normal()
{
    getBold_items()
    for(const element of array)
    {
        element.style.color = "black";
    }
}
