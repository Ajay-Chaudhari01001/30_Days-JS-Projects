const dropList = document.querySelectorAll(".drop-list select");
const getButton = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");

for (let i = 0; i < dropList.length; i++) {
    for (currency_code in country_code) {
        // select INR as a FROM currency and USD as a TO currency by default
        let selected;
        if (i == 0) {
            selected = currency_code == "USD" ? "selected" : "";
        } else if (i == 1) {
            selected = currency_code == "INR" ? "selected" : "";
        }

        // creating option tag with passing currency code as a text and value
        let optionTag = `
            <option value="${currency_code}" ${selected}>${currency_code}</option>
        `;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }

    dropList[i].addEventListener("change", e => {
        // calling loadflag with passing target element as an argument
        loadFlag(e.target);
    });
}


function loadFlag(element){
    for(code in country_code){
        // if currency code of country list is equal to option value
        if(code == element.value) {
            // selecting img tag of particular drop list
            let imgTag = element.parentElement.querySelector("img");
            
            // passing country code of a selected currency code in a img url
            imgTag.src = `https://countryflagsapi.com/png/${country_code[code]}`;
        }
    }
}


window.addEventListener("load", () =>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    // preventing form submitting
    e.preventDefault();
    getExchangeRate();
});


const exchangeIcon = document.querySelector(".drop-list .icon");
exchangeIcon.addEventListener("click", () =>{
    // temporary cuurency code of FROM drop list
    let tempCode = fromCurrency.value;
    // passing TO currency code to FROM currency code
    fromCurrency.value = toCurrency.value;
    // passing temporary currency code to TO currency code
    toCurrency.value = tempCode;
    
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    const exchangeRateTxt = document.querySelector(".exchange-rate");

    let amountVal = amount.value;
    // if the user don't enter any value or enter 0 then we will put 1 value by default in the input field
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }

    exchangeRateTxt.innerText = "Getting exchange Rate...";
    // ExchangeRate API link
    let url = ` https://v6.exchangerate-api.com/v6/9f7f74b93aad01db26db7cc3/latest/${fromCurrency.value} `;

    // fetching api response and returning it with parsing into js object and in another then method receiving that object
    fetch(url)
    .then(response => response.json())
    .then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
    
       
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`; 
    });
}