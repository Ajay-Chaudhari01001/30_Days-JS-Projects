

function myColor() {

	const red = document.querySelector("#red").value;
	const green = document.querySelector("#green").value;
	const blue = document.querySelector("#blue").value;

	const color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

	document.body.style.backgroundColor = color;

	document.querySelector("#box").value = color;

}


document.querySelector("#red").addEventListener('input', myColor);
document.querySelector("#green").addEventListener('input', myColor);
document.querySelector("#blue").addEventListener('input', myColor);