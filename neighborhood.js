function buttonNeigh(evt) {
	evt.preventDefault();
	
    let rest = ['Wellers Bistro','Burger Bar','Jins','Roosters'];

    const restChooser = [Math.floor(Math.random() * rest.length)];
    alert(rest[restChooser]);

}


let neigh = document.querySelector('#random');

neigh.addEventListener('click', buttonNeigh);
