//Von Aufgabe 7//
var s1 = new Audio("A.mp3");
var s2 = new Audio("C.mp3");
var s3 = new Audio("F.mp3");
var s4 = new Audio("G.mp3");
var s5 = new Audio("hihat.mp3");
var s6 = new Audio("kick.mp3");
var s7 = new Audio("laugh-1.mp3");
var s8 = new Audio("laugh-2.mp3");
var sound9 = new Audio("snare.mp3");
var allSounds = ["Sounds/A.mp3", "Sounds/C.mp3", "Sounds/F.mp3", "Sounds/G.mp3", "Sounds/hihat.mp3", "Sounds/kick.mp3", "Sounds/laugh-1.mp3", "Sounds/laugh-2.mp3", "Sounds/snare.mp3"];
document.querySelector("#bu1").addEventListener("click", function () { playSample(0); });
document.querySelector("#bu2").addEventListener("click", function () { playSample(1); });
document.querySelector("#bu3").addEventListener("click", function () { playSample(2); });
document.querySelector("#bu4").addEventListener("click", function () { playSample(3); });
document.querySelector("#bu5").addEventListener("click", function () { playSample(4); });
document.querySelector("#bu6").addEventListener("click", function () { playSample(5); });
document.querySelector("#bu7").addEventListener("click", function () { playSample(6); });
document.querySelector("#bu8").addEventListener("click", function () { playSample(7); });
document.querySelector("#bu9").addEventListener("click", function () { playSample(8); });
//Aufgabe 8.6 a) Abspielen der Samples über eine zentrale Funktion//
function playSample(ButtonNumber) {
    var sound = new Audio(allSounds[ButtonNumber]);
    sound.play();
    if (isrecording == true) {
        beat1.push(allSounds[ButtonNumber]);
        console.log(beat1);
    }
}
//Aufgabe 8.6 b) Nur ein Array soll manipuliert werden: dieses hier://
var beat1 = ["Sounds/kick.mp3", "Sounds/snare.mp3", "Sounds/hihat.mp3"];
document.querySelector(".fa-play").addEventListener("click", function () {
    var playbut = document.querySelector("#playbutton");
    if (playbut.classList.contains("fa-play")) {
        playbut.classList.remove("fa-play");
        playbut.classList.add("fa-stop");
        DrumMachine(beat1);
    }
    else {
        playbut.classList.remove("fa-stop");
        playbut.classList.add("fa-play");
        stopbeat();
    }
});
//Aufgabe 8// //Mit Hilfe von Hannah, Herr Rausch und Moritz :)) //
//8.1 Linter ist Installiert//
//8.2 Beat als Loop// //funktioniert//
var i = 0;
var myinterval;
function stopbeat() {
    clearInterval(myinterval);
}
function DrumMachine(beat) {
    //8.3 Playbutton erweiterung// //Funktioniert//
    myinterval = setInterval(function () {
        var Sample = new Audio(beat[i]);
        Sample.play();
        console.log(beat[i]);
        i++;
        if (i > 2) {
            i = 0;
        } //Wenn i grösser als 3 dann soll i wieder 0 werden//
    }, 500);
}
//8.4 Deletebutton// //funktioniert//
document.querySelector("#deletebutton").addEventListener("click", function () { deletebeat(); });
function deletebeat() {
    beat1.length = 0;
}
//8.5 Recordbutton// // Click auf recordbu-> recording, click auf button -> push sound into array beat1 // funktioniert//
document.querySelector("#recordbutton").addEventListener("click", function () { recording(); });
var isrecording = false;
function recording() {
    isrecording = true;
}
//Extra-Aufgabe: Keydown Event mit Googles Hilfe//
/*
//Funktioniert ned//
 window.addEventListener("keydown", logKey);

 function logKey(e) {
  log.textContent += ` ${e.code}`;

  switch (e.code) {
  case "":
    playSample(0);
    break;
  case "":
    playSample(1);
    break;
  case "":
    playSample(2);
    break;
  case "":
    playSample(3);
    break;
  case "":
    playSample(4);
    break;
  case "":
    playSample(5);
    break;
  case "":
    playSample(6);
    break;
  case "":
    playSample(7);
    break;
  case "":
    playSample(8);
    break;
  case "":
    DrumMachine(beat1);
    break;
  case "":
    deletebeat();
    break;
  case "":
    recording();
    break;
    }
}
})
*/ 
//# sourceMappingURL=script.js.map