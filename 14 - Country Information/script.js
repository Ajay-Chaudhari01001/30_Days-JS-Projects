const searchBtn = document.querySelector(".btn");
const countryInput = document.querySelector(".searchBox");
const informationBox = document.querySelector(".country-data");

searchBtn.addEventListener("click", () => {

	let countryName = countryInput.value;
	let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;


	fetch(url)
	 .then((reponse) => reponse.json())
	 .then((data) => {

		informationBox.innerHTML = `

			<img src="${data[0].flags.svg}" class="flag-img">
			<h2>${data[0].name.common}</h2>
			<div class="wrapper">
				<div class="data-wrapper">
					<h4>Capital</h4>
					<span>${data[0].capital[0]}</span>
				</div>
				<div class="data-wrapper">
					<h4>Continent</h4>
					<span>${data[0].continents[0]}</span>
				</div>
				<div class="data-wrapper">
					<h4>Population</h4>
					<span>${data[0].population}</span>
				</div>
				<div class="data-wrapper">
					<h4>Currencie</h4>
					<span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
				</div>
				<div class="data-wrapper">
					<h4>Common Languages</h4>
					<span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
				</div>
			</div>
		`;

	 }).catch( () =>{
		if(countryName.length == 0){
			informationBox.innerHTML = `
				<p>Cannot blank input field</p>
			`;
		} else{
			informationBox.innerHTML = `
				<p>Invalid country name</p>
				`;
		}
	 })
});