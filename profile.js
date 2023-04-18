function buttonColor(evt) {
	evt.preventDefault();
	
	alert('great WHITE shark');
}


let color = document.querySelector('#color');

color.addEventListener('click', buttonColor);

function buttonPlace(evt) {
	evt.preventDefault();
	
	alert('home is where HAWAII is');
}


let place = document.querySelector('#place');

place.addEventListener('click', buttonPlace);

function buttonRitual(evt) {
	evt.preventDefault();
	
	alert('my workday can rarely be started without a COFFEE');
}


let ritual = document.querySelector('#ritual');

ritual.addEventListener('click', buttonRitual);