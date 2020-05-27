
var loadTime;
function loadPage() {
  loadTime = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("home").style.visibility = "visible";
}

//Connors Section
var num1 = 0;
var num2 = 0;
let numbers = [0,0,0]
var loopAmount = 0;

function combine(){
    numbers[0] = document.getElementById("NUM3").value;
    numbers[1] = document.getElementById("NUM4").value;

    numbers[2] = numbers[0] + numbers[1];
    document.getElementById("NUMADD").innerHTML = numbers[2];
}

function larger(){
  num1 = document.getElementById("NUM1").value;
  num2 = document.getElementById("NUM2").value;

    if(num1 > num2){
      document.getElementById("NUMSIZE").innerHTML = num1;
    }
    else if(num2 > num1){
      document.getElementById("NUMSIZE").innerHTML = num2;
    }
    else{
      document.getElementById("NUMSIZE").innerHTML = 34404;
    }

}

function spinnn(){
  loopAmount = document.getElementById("NUM5").value;
    var temp = 1;
    while(loopAmount != 0){
        loopAmount--;
        temp *= 2;
    }
    document.getElementById("LOOPRESULT").innerHTML = temp;
}


