"use strict";
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
    sound.play(sound);
}
//Aufgabe 8.6 b) Nur ein Array soll manipuliert werden: dieses hier://
var beat1 = ["Sounds/kick.mp3", "Sounds/snare.mp3", "Sounds/hihat.mp3"];
document.querySelector("#playbutton").addEventListener("click", function () { DrumMachine(beat1); });
//Aufgabe 8//
//8.1 Linter ist Installiert//
//8.2 Beat als Loop//
function DrumMachine(beat) {
    var i = 0;
    setInterval(function () {
        var Sample = new Audio(beat[i]);
        Sample.play();
        console.log(beat[i]);
        i++;
    }, 500);
}
//8.3 PlayButton Erweiterung//
function DrumMachine(beat, loopAnzahl) {
    //Klasse ändern für Css// //Wenn button Klaase play hat, dann auf Stop ändern. Wenn Klasse Stop hat dann auf play ändern//
    var but = document.querySelector("#playbutton");
    if (but.getAttribute("class") == "play") {
        but.setAttribute("class", "stop");
        functionIsRunning = true;
    }
    else {
        but.setAttribute("class", "stop");
        functionIsRunning = false;
    }
    //8.4 Deletebutton//
    document.querySelector("#deletebu").addEventListener("click", function () { deletebeat(); });
    function deletebeat() {
        beat1.length = 0;
    }
    //8.5 Recordbutton// // Click auf recordbu-> recording, click auf button -> push sound into array beat1 //
    document.querySelector("#recordbu").addEventListener("click", function () { recording(); });
    function recording() {
        var but = document.querySelector("#recordbu");
        if (but.getAttribute("class") == "notrecording") { // wenn CSS klasse notrecording dann zu recording
            but.setAttribute("class", "recording");
            isrecording = true;
            console.log("Aufnahme gestartet");
        }
        else {
            btn.setAttribute("class", "notrecording"); //ansonsten auf notrecording
            isRecording = false;
            console.log("Aufnahme gestoppt");
        }
    }
    if (isrecording == true) {
        console.log("Sample: " + sound.src);
        beat1.push(sound.src);
    }
    //Extra-Aufgabe: Keydown Event mit Googles Hilfe//
    //funktioniert ned lol//
    window.addEventListener("keydown", logKey);
    function logKey(e) {
        log.textContent += ` ${e.code}`;
        switch (e.code) {
            case "Digit1":
                playSample(0);
                break;
            case "Digit2":
                playSample(1);
                break;
            case "Digit3":
                playSample(2);
                break;
            case "Digit4":
                playSample(3);
                break;
            case "Digit5":
                playSample(4);
                break;
            case "Digit6":
                playSample(5);
                break;
            case "Digit7":
                playSample(6);
                break;
            case "Digit8":
                playSample(7);
                break;
            case "Digit9":
                playSample(8);
                break;
            case "Space":
                DrumMachine(beat1);
                break;
            case "Backspace":
                deletebeat();
                break;
            case "Enter":
                recording();
                break;
        }
    }
}
;
//# sourceMappingURL=script.js.map