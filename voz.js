x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function dedo() {
 document.getElementById("nivel").innerHTML="se escucha,yabadabadabadu;";
recognition.start();

}

function setup() {
 canvas=createCanvas(499,399);
 canvas.center();
}

recognition.onresult=function(eventcopy){
console.log(eventcopy);
var resultado2=eventcopy.results[0][0].transcript;
}

function haaland() {
console.log("")

}
function draw() {


}


