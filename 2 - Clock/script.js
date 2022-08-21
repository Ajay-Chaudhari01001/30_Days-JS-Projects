
 let hr = document.querySelector('#hr');
 let mn = document.querySelector('#mn');
 let sc = document.querySelector('#sc');

 setInterval( () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() *6;
   
   
   hr.style.transform = `rotateZ(${hh+(hh/12)}deg)`;
   mn.style.transform = `rotateZ(${hh+(mm)}deg)`;
   sc.style.transform = `rotateZ(${hh+(ss)}deg)`;


});