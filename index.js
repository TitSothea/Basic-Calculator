
const btnAdd = document.getElementById("btnAdd");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
const showResult = document.getElementById("show-result");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function add(x,y){
    return x + y;
}
function sub(x,y){
    return x - y;
}
function mul(x,y){
    return x * y;
}
function div(x,y){
    return y !== 0 ? x / y : `Error`;
}

btnAdd.onclick = function(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    showResult.textContent = add(num1,num2);
}
btnSub.onclick = function(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    showResult.textContent = sub(num1,num2);
}
btnMul.onclick = function(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    showResult.textContent = mul(num1,num2);
}
btnDiv.onclick = function(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    showResult.textContent = div(num1,num2);
}






    


    



