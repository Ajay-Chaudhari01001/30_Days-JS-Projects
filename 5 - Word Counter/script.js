 
let textbox = document.querySelector("#textbox");

textbox.addEventListener("input", function(){
	let text = this.value;
	// counting characters
	let char = text.length;
	document.querySelector("#char").innerText = char;

	// removing starting and ending spaces..
	   text = text.trim();
	// counting words
	let word = text.split(" ");
	// removing between unneccesery spaces, due to counting wrods
	let cleanArray = word.filter((value) =>{
		return value != "";
	})
	document.querySelector("#word").innerText = cleanArray.length;

});

