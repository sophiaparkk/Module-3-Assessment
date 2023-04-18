console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function mouseOver(evt) {
	evt.preventDefault();

	alert('Tell yourself you look fantastic right meow');
}

let content = document.querySelector('#img');

content.addEventListener('mouseover', mouseOver);