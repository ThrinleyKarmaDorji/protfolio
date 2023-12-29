function myFunction(){
    var k = document.getElementById('childTwo');

    if (k.className === "ham"){
        k.className += " responsive";
    }
    else {
        k.className = "ham";
    }
}

let valueDisplay = document.querySelectorAll(".number");
let interval = 4000;

valueDisplay.forEach((valueDisplay) =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function (){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});

