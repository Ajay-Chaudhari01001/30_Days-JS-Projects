const code = document.querySelectorAll('.code');
const color = document.querySelectorAll('.color');
const button = document.querySelector('button');

button.addEventListener("click",colorGen);

function colorGen() {

    var letters = '0123456789abcdef';

    var hastag = ['#','#','#','#','#','#'];

    for (let i=0;i<6;i++){

        hastag[i]+=letters[Math.floor(Math.random() *16)];

        hastag[i]+=letters[Math.floor(Math.random() *16)];

        hastag[i]+=letters[Math.floor(Math.random() *16)];

        hastag[i]+=letters[Math.floor(Math.random() *16)];

        hastag[i]+=letters[Math.floor(Math.random() *16)];

        hastag[i]+=letters[Math.floor(Math.random() *16)];

    }

    for (let i=0;i<code.length;i++){

        code[i].innerHTML = hastag[i];

        color[i].style.backgroundColor = hastag[i];

    }

}

colorGen();

window.onkeyup = (e)=> {

    if (e.which||e.keycode == 33) {

        colorGen();

    }

};

