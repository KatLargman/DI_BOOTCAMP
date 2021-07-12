planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

for (planet of planets)
{
	let elem = document.createElement('div');
	elem.setAttribute('class',`planet ${planet}`);
	let text = document.createTextNode(`${planet}`);
	elem.appendChild(text);
	document.body.querySelector('.listPlanets').appendChild(elem);
}
