//Aufgabe 7.1//
  var s1: HTMLAudioElement = new Audio("A.mp3");
  var s2: HTMLAudioElement = new Audio("C.mp3");
  var s3: HTMLAudioElement = new Audio("F.mp3");
  var s4: HTMLAudioElement = new Audio("G.mp3");
  var s5: HTMLAudioElement = new Audio("hihat.mp3");
  var s6: HTMLAudioElement = new Audio("kick.mp3");
  var s7: HTMLAudioElement = new Audio("laugh-1.mp3");
  var s8: HTMLAudioElement = new Audio("laugh-2.mp3");
  var sound9: HTMLAudioElement = new Audio("snare.mp3");
  
var allSounds = ["Sounds/A.mp3", "Sounds/C.mp3", "Sounds/F.mp3", "Sounds/G.mp3", "Sounds/hihat.mp3", "Sounds/kick.mp3", "Sounds/laugh-1.mp3", "Sounds/laugh-2.mp3", "Sounds/snare.mp3"];

document.querySelector("#bu1").addEventListener("click", function() {playSample(0);});
document.querySelector("#bu2").addEventListener("click", function() {playSample(1);});
document.querySelector("#bu3").addEventListener("click", function() {playSample(2);});
document.querySelector("#bu4").addEventListener("click", function() {playSample(3);});
document.querySelector("#bu5").addEventListener("click", function() {playSample(4);});
document.querySelector("#bu6").addEventListener("click", function() {playSample(5);});
document.querySelector("#bu7").addEventListener("click", function() {playSample(6);});
document.querySelector("#bu8").addEventListener("click", function() {playSample(7);});
document.querySelector("#bu9").addEventListener("click", function() {playSample(8);});


function playSample(ButtonNumber) { 

    var sound:HTMLAudioElement = new Audio(allSounds[ButtonNumber]);
    sound.play(sound);
  } 


//Aufgabe 7.2//
var beat1 = ["Sounds/kick.mp3", "Sounds/snare.mp3","Sounds/hihat.mp3"]

document.querySelector("#playbutton").addEventListener("click", function() {DrumMachine(beat1);});

function DrumMachine(beat) { 
	var i: number = 0;
	//window.alert(anzahl);
	setInterval(function() {  //Inpiriert von Marie beim Praktikum//
		var Sample = new Audio(beat[i]);
		Sample.play();
		console.log(beat[i]);
		i++;
	}, 500); 
} 
