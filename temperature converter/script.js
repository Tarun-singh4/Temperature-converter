
let input=document.getElementById("input1");
let celsius=document.getElementById("celsius");
let fahren=document.getElementById("fahren");
let button=document.getElementById("button");
let temp=0;
let para=document.getElementById("answer");

function convert(){
    
    if(input.value.trim()==""){
        para.textContent="Enter a number first";
    }
    else if(celsius.checked){
        temp=Number(input.value);
        temp=temp*(9/5)+32;
        para.textContent=temp.toFixed(2)+"f";
    }
    else if(fahren.checked){
        temp=Number(input.value);
        temp=(temp-32)*(5/9);
        para.textContent=temp.toFixed(2)+"c";
    }
    else if(input.value==null){
        para.textContent="Enter a nuber first";
    }
    else{
        para.textContent="select a unit";
    }
}
button.addEventListener('click',convert);