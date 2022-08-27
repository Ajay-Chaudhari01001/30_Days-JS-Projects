const buttons =  document.querySelector("#buttons");
const li = buttons.querySelectorAll("li");
const result = document.querySelector("#result");

 
for(let i=0; i<li.length; i++){
    // getting each li tag in for loop to targest specific operation button(li)
     li[i].addEventListener("click", function () { 
         
         if(this.innerHTML=="="){
             
            // using eval function
             result.innerHTML = eval(result.innerHTML); 

         }else{
             if(this.innerHTML=="÷"){
                 result.innerHTML += "/";
             }else if(this.innerHTML == "x"){
                 result.innerHTML += "*";

             }else if(this.innerHTML=='C'){
                 result.innerHTML = "";
             }
             
             else{
                 result.innerHTML += this.innerHTML;
             }

             
         }
        
         

      });
}
