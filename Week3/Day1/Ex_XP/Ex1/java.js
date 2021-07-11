let div = document.getElementById('navBar');
div.setAttribute('id', 'socialNetworkNavigation');
let li = document.createElement('li');
let text = document.createTextNode('Logout');
li.appendChild(text);
document.querySelector('ul').appendChild(li);
