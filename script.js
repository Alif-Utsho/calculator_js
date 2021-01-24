var inp= document.querySelector(".display");

function digitClicked(value){
    if(inp.value.length<15){
        inp.value=inp.value+value;
    }
}
function equalClicked(){
    var exp= inp.value;
    var result= eval(exp);
    inp.value=result;
}

function clearAll(){
    inp.value="";
}
function negClicked(){
    inp.value= Math.abs(input.value);
}
function delClicked(){
    inp.value= inp.value.substring(0,inp.value.length-1);
}