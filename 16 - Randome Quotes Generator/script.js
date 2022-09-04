const quoteText = document.querySelector(".quote"),
	quoteBtn = document.querySelector("button"),
	authorName = document.querySelector(".name"),
	speechBtn = document.querySelector(".speech"),
	copyBtn = document.querySelector(".copy"),
	synth = speechSynthesis;


function randomQuote() {
	quoteBtn.classList.add("loading");
	quoteBtn.innerText = "Loading Quote...";
	fetch("https://type.fit/api/quotes").then(response => response.json()).then(data => {
		console.log(Math.floor(Math.random() * 1000));
		quoteText.innerText = data[Math.floor(Math.random() * 1000)].text;
		authorName.innerText = data[Math.floor(Math.random() * 1000)].author;
		quoteBtn.classList.remove("loading");
		quoteBtn.innerText = "New Quote";
	});
}


speechBtn.addEventListener("click", () => {
	if (!quoteBtn.classList.contains("loading")) {
		let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
		synth.speak(utterance);
		setInterval(() => {
			!synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
		}, 10);
	}
});


copyBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(quoteText.innerText);
});


quoteBtn.addEventListener("click", randomQuote);