 //Von Aufgabe 7//
 
 var allSounds: HTMLAudioElement = ["Sounds/A.mp3", "Sounds/C.mp3", "Sounds/F.mp3", "Sounds/G.mp3", "Sounds/hihat.mp3", "Sounds/kick.mp3", "Sounds/laugh-1.mp3", "Sounds/laugh-2.mp3", "Sounds/snare.mp3"];

 document.querySelector("#bu1").addEventListener("click", function() {playSample(0); });
 document.querySelector("#bu2").addEventListener("click", function() {playSample(1); });
 document.querySelector("#bu3").addEventListener("click", function() {playSample(2); });
 document.querySelector("#bu4").addEventListener("click", function() {playSample(3); });
 document.querySelector("#bu5").addEventListener("click", function() {playSample(4); });
 document.querySelector("#bu6").addEventListener("click", function() {playSample(5); });
 document.querySelector("#bu7").addEventListener("click", function() {playSample(6); });
 document.querySelector("#bu8").addEventListener("click", function() {playSample(7); });
 document.querySelector("#bu9").addEventListener("click", function() {playSample(8); });

//Aufgabe 8// //Mit Hilfe von Hannah, Herr Rausch und Moritz :)) //

//Aufgabe 8.6 a) Abspielen der Samples über eine zentrale Funktion//

 function playSample(ButtonNumber) { 

    var sound: HTMLAudioElement = new Audio(allSounds[ButtonNumber]);
    sound.play();

    if (isrecording == true) {
     beat1.push(allSounds[ButtonNumber]);
     console.log(beat1);

    }
  } 


//Aufgabe 8.6 b) Nur ein Array soll manipuliert werden: dieses hier://

 var beat1:HTMLAudioElement = ["Sounds/kick.mp3", "Sounds/snare.mp3", "Sounds/hihat.mp3"];

 document.querySelector(".fa-play").addEventListener("click", function() {
  
  var playbut: HTMLElement = document.querySelector("#playbutton");

  if (playbut.classList.contains ("fa-play")) { //8.3 Playbutton erweiterung// //Funktioniert//
    playbut.classList.remove ("fa-play");
    playbut.classList.add ("fa-stop");
    DrumMachine(beat1);
  } else {
    playbut.classList.remove ("fa-stop");
    playbut.classList.add ("fa-play");
    stopbeat();       
  }
  });

//8.1 Linter ist Installiert//

//8.2 Beat als Loop// //funktioniert//

 var i: number = 0;
 var myinterval: number;
 var beat: HTMLAudioElement;
 
 function stopbeat() {
  clearInterval(myinterval); }
  
 function DrumMachine(beat) { 
 
  myinterval = setInterval(function() { 
    var Sample = new Audio(beat[i]);
    Sample.play();
    console.log(beat[i]);
    i++;
    if (i >= beat1.length ) { i  = 0; }  //Wenn i grössergleich länge des arrays ist,  dann soll i wieder 0 werden.//
  },                       500); 
} 


//8.4 Deletebutton// //funktioniert//
 document.querySelector("#deletebutton").addEventListener("click", function() {deletebeat(); });

 function deletebeat() {
  beat1.length = 0;
}

//8.5 Recordbutton// // Click auf recordbu-> recording, click auf button -> push sound into array beat1 // funktioniert//

 document.querySelector("#recordbutton").addEventListener("click", function() {recording(); });
 
 var isrecording: Boolean = false;
 
 function recording() {
  if (isrecording == false) {
    isrecording = true;
} else {
    isrecording = false;
}
 }

 

//Extra-Aufgabe: Keydown Event mit Googles Hilfe//
/*
//Funktioniert ned//
 window.addEventListener("keypress", logKey);
 function logKey(e) {
   console.log(e.code);

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
  case "KeyR":
    recording();
    break;
    }
}
*/