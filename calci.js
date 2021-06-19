function enter(num){
    document.getElementById("result").value+=num
}

function equal(){
  let  x=document.getElementById("result").value
   let  y=eval(x)
    document.getElementById("result").value=y
}

function Clear(){
    document.getElementById("result").value="";
}

function mode(){
    var element = document.body;
    element.classList.toggle("darkmode");
}

