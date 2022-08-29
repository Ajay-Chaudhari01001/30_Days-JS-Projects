let loanAmount = document.querySelector("#amount");
let intrestRate = document.querySelector("#intrest");
let loanDuration = document.querySelector("#loanDuration");
let submit = document.querySelector("#calculate");

submit.addEventListener("click", (e) => {
	e.preventDefault();
	calculateEmi();
});

function calculateEmi() {

	// first calculate total number of months in loan duration if selected year
	let isYear = document.querySelector("#year").checked;
	let isMonth = document.querySelector("#month").checked;
	let noOfMonth = 0;

	if(isYear == "" && isMonth == ""){
		alert("Please select loan duration Month or Year");
	}else{

		if(isYear == true){
			noOfMonth = loanDuration.value * 12;
		}else{
			noOfMonth = loanDuration.value;
		}

		let r = parseFloat(intrestRate.value)/12/100;
		let p = loanAmount.value;
		let n = noOfMonth;	

		// formula EMI = (p * r * (1 + r)^n ) / ((1+r)^n -1)
		let EMI = (p*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
        let totalInterest =(EMI * n) - p;
        let totalPayment  = totalInterest + parseFloat(p);

		document.querySelector("#emi").innerText = "Rs " + Math.round(EMI);
		document.querySelector("#totalIntrest").innerText = "Rs " + Math.round(totalInterest);
		document.querySelector("#totalPayment").innerText = "Rs " + Math.round(totalPayment);
		
	} 
}