var timer = 60;
var Score = 0; 
var rn;
function hitval() {
     rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").innerHTML = rn;
}
function score() {
    Score += 10;
    document.querySelector("#scoreVal").textContent = Score;
}
var bubble = function () {
    var clutter = "";
for (var i = 1; i <= 168; i++){
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#panelbtm").innerHTML = clutter;
}
function TimerInt() {
    var runtimer = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;   
        }
        else {
            clearInterval(runtimer);
            document.querySelector("#panelbtm").innerHTML = `<h1>Game OverYour Score is ${Score}</h1>`;
        }
        
    },1000)
}
document.querySelector("#panelbtm")
    .addEventListener("click", function (details) {
        var clickedNum = Number(details.target.textContent);
        if (rn == clickedNum) {
            score();
            hitval();
            bubble();
        }
})
hitval();
bubble();
TimerInt();
