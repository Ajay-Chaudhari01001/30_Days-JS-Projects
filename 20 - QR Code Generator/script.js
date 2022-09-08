const wrapper = document.querySelector(".wrapper");
const generateBtn = document.querySelector(".form button");
const qrInput = document.querySelector(".form input");
const qrImg = document.querySelector(".qr-code img");
const qrError = document.querySelector(".qr-code h2");

generateBtn.addEventListener("click", () => {
	let qrValue = qrInput.value;
	// if the input value is empty then return from here
	if(!qrValue)return;
	// getting a QR code of user entered value using the 
	// qrserver api and passing the api returned img src to qrImg
	qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
	wrapper.classList.add("active");
});