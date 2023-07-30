
const progress1 = document.querySelector(".progress-bar-done1");
const input1 = document.querySelector(".progress-input1");

let finalValue1 = 0;

function changeWidth1(){
    progress1.style.width = `${(finalValue1/100)*100}%`;
    // progress.innerText = `${Math.ceil(((finalValue/100)*100))}%`;
}

input1.addEventListener("keyup", function(){
    finalValue1 = parseInt(input1.value, 10);
    changeWidth1();
}) 


const progress2 = document.querySelector(".progress-bar-done2");
const input2 = document.querySelector(".progress-input2");

let finalValue12= 0;

function changeWidth2(){
    progress2.style.width = `${(finalValue2/100)*100}%`;
    // progress.innerText = `${Math.ceil(((finalValue/100)*100))}%`;
}

input2.addEventListener("keyup", function(){
    finalValue2 = parseInt(input2.value, 10);
    changeWidth2();
}) 