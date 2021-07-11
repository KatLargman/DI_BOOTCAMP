document.querySelector('div').style = 'background-color:lightblue;padding: 20px;'; //1
document.querySelector('ul').children[0].style = 'visibility: hidden;'; //2
document.querySelector('ul').children[1].style = 'border: 1px solid black;';//3
document.body.style = 'font-size: 30px;'; //4
if (document.querySelector('div').style.backgroundColor == 'lightblue') //5 bonus
{
	let element = document.querySelector('ul').querySelectorAll('li');
	alert(`Hello ${element[0].innerHTML} and ${element[1].innerText}`);
}
