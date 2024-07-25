
let primerText = document.getElementById('text1');
primerText.style.display ='inline-block';
primerText.style.backgroundColor = 'purple';

let secondText = document.getElementById('text2');
secondText.style.display = 'inline-block';
secondText.style.backgroundColor ='orange';

let box = document.getElementById('caja2');
box.style.display = 'inline-block';
box.style.marginTop = '10px';
box.style.height = '100px';
box.style.width = '100px';
box.style.backgroundColor = 'black';

let cajaTres = document.querySelector('#caja3 p');
cajaTres.style.fontSize = '1rem';



function hide(){
    secondText.setAttribute("style","display:none; background-color:orange")
}

function show(){
    secondText.setAttribute("style","display:inline-block; background-color:orange")
}

function giant(){
    box.setAttribute("style","displa:inline-block; height:500px; width:500px; background-color: black; margin-top: 10px")
}

function little(){
    box.setAttribute("style","displa:inline-block; height:100px; width:100px; background-color: black; margin-top: 10px")
}

function giantText(){
    if(cajaTres.style.fontSize == '3rem'){
        cajaTres.setAttribute("style","font-size:1rem")
    }else{
        cajaTres.setAttribute("style","font-size:3rem")
    }
}

