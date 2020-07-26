// Endaufgabe SoSe 2020, Annette Wiedenmann, 265117//
//VARIABLEN WERDEN DEKLARIERT//
let compOrder = []; //Array in der die vom Computer generierte Reihenfolge der aufleuchtendet Buttons gespeichert werden
let playerOrder = []; //Array in der die vom Spieler eingegebene Reihenfolge gespeichert wird
let flash; // Anzahl der Buttons die aufleuchten
let turn; // Gibt an in welcher Runde sich der Spieler befindet
let good; // Gibt an ob der Nutzter fehler macht (false) oder nicht (true)
let compTurn; // Gibt an ob der Computer an der Reihe ist die Reihenfolge vor zu spielen oder nicht (dann ist der Nutzer dran)
let intervalId;
let noise = true; // Gibt an ob die Buttons einen Ton abspielen sollen oder nicht
let on = false; // Gibt an ob das Spiel an ist. Der Spieler soll nur klicken können wenn on, true ist.
let win; // Gibt an ob der Spieler das Spiel gewonnen hat oder nicht
let buttonsounds = ["Sounds/A.mp3", "Sounds/C.mp3", "Sounds/F.mp3", "Sounds/G.mp3", "Sounds/hihat.mp3", "sounds/winningsound.mp3", "sounds/failsound.mp3"];
// Ein Array für alle Sounds//
//Diese Booleans geben an, welcher Schwierigkeitsgrad gewählt wurde//
let easychosen;
let advancedchosen;
let hardchosen;
let extremechosen;
//BUTTONS SELEKTIEREN//
// Für den Counter//
const turnCounter = document.querySelector("#turn");
const instructions = document.querySelector("#instruction");
//Füt die Buttons//
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const innerCircle = document.querySelector("#inner-circle");
const reloadbutton = document.querySelector("#reload");
//Für die Schwierigkeitsgrad buttons
const diffEasy = document.querySelector("#difficultyeasy");
const diffAdvanced = document.querySelector("#difficultyadvanced");
const diffHard = document.querySelector("#difficultyhard");
const diffExtreme = document.querySelector("#difficultyextreme");
//FUNKTIONEN FÜR DEN JEW. SCHWIERIGKEITSGRAD//
var i;
// EASY//
diffEasy.addEventListener("click", function () {
    console.log("buttonEASYclicked"); //Konsolenausgabe zur kontrolle
    diffEasy.style.boxShadow = "3px 3px 15px 3px white"; //gewählte Schwierigkeit wird durch einen boxschatten markiert
    on = true; // Das Spiel läuft
    easychosen = true;
    advancedchosen = false;
    hardchosen = false;
    extremechosen = false;
    playeasy();
});
function playeasy() {
    win = false; // Alle variablen werden erstmal zurückgesetzt falls von vorherigen Runden noch die Reihenfolge gespeichert ist etc.
    compOrder = []; // Array in dem die willkürliche Reihenfolge gespeichert wird ist leer
    playerOrder = [];
    flash = 0; // Noch kein Button hat aufgeleuchtet
    intervalId = 0;
    turn = 1; //Erste Runde
    turnCounter.innerHTML = "1"; // Der counter stellt sich auf 1, da erste Runde
    good = true; // der Spieler hat noch nichts falsches gedrückt
    for (i = 0; i < 5; i++) { // 5 Zahlen werden erstellt
        compOrder.push(Math.floor(Math.random() * 5) + 1); // erstellt eine willkürliche Zahl zwischen eins und fünf und pusht diese Reihenfolge dann in das dafür vorgesehene Array
    }
    console.log(compOrder); // Kontrolle über Konsolenausgabe, funktioniert yeyyy
    compTurn = true; // der Computer startet und beginnt den Ton zu spielen
    intervalId = setInterval(gameTurn, 800); //die Funktion wird alle 800millisekunden aufgerufen: Der computer spielt einen Ton alle 800ms
}
//ADVANCED//
diffAdvanced.addEventListener("click", function () {
    console.log("buttonAdvancedclicked"); //funktioniert
    diffAdvanced.style.boxShadow = "3px 3px 15px 3px white";
    on = true; // Das Spiel ist am laufen
    easychosen = false;
    advancedchosen = true;
    hardchosen = false;
    extremechosen = false;
    playadvanced();
});
function playadvanced() {
    win = false; // Alle variablen werden erstmal zurückgesetzt falls von vorherigen Runden noch die Reihenfolge gespeichert ist etc.
    compOrder = []; // Array in dem die willkürliche Reihenfolge gespeichert wird ist leer
    playerOrder = [];
    flash = 0; // Noch kein Button hat aufgeleuchtet
    intervalId = 0;
    turn = 1; //Erste Runde
    turnCounter.innerHTML = "1"; // Der counter stellt sich auf 1, da erste Runde
    good = true; // der Spieler hat noch nichts falsches gedrückt
    for (i = 0; i < 15; i++) { // 15 Zahlen werden erstellt
        compOrder.push(Math.floor(Math.random() * 5) + 1); // erstellt eine willkürliche Zahl zwischen eins und fünf und pusht diese Reihenfolge dann in das dafür vorgesehene Array
    }
    console.log(compOrder); // Kontrolle über Konsolenausgabe, funktioniert yeyyy
    compTurn = true; // der Computer startet und beginnt den Ton zu spielen
    intervalId = setInterval(gameTurn, 800); //die Funktion wird alle 800millisekunden aufgerufen: Der computer spielt einen Ton alle 800ms
}
//HARD//
diffHard.addEventListener("click", function () {
    console.log("buttonHardclicked"); //funktioniert
    diffHard.style.boxShadow = "3px 3px 15px 3px white";
    on = true; // Das Spiel ist am laufen
    easychosen = false;
    advancedchosen = false;
    hardchosen = true;
    extremechosen = false;
    playhard();
});
function playhard() {
    win = false; // Alle variablen werden erstmal zurückgesetzt falls von vorherigen Runden noch die Reihenfolge gespeichert ist etc.
    compOrder = []; // Array in dem die willkürliche Reihenfolge gespeichert wird ist leer
    playerOrder = [];
    flash = 0; // Noch kein Button hat aufgeleuchtet
    intervalId = 0;
    turn = 1; //Erste Runde
    turnCounter.innerHTML = "1"; // Der counter stellt sich auf 1, da erste Runde
    good = true; // der Spieler hat noch nichts falsches gedrückt
    for (i = 0; i < 25; i++) { //es werden 25 Zahlen erstellt
        compOrder.push(Math.floor(Math.random() * 5) + 1); // erstellt eine willkürliche Zahl zwischen eins und fünf und pusht diese Reihenfolge dann in das dafür vorgesehene Array
    }
    console.log(compOrder); // Kontrolle über Konsolenausgabe, funktioniert yeyyy
    compTurn = true; // der Computer startet und beginnt den Ton zu spielen
    intervalId = setInterval(gameTurn, 800); //die Funktion wird alle 800millisekunden aufgerufen: Der computer spielt einen Ton alle 800ms
}
//Extreme//
diffExtreme.addEventListener("click", function () {
    console.log("buttonExtremeclicked"); //funktioniert
    diffExtreme.style.boxShadow = "3px 3px 15px 3px white";
    on = true; // Das Spiel ist am laufen
    easychosen = false;
    advancedchosen = false;
    hardchosen = false;
    extremechosen = true;
    playextreme();
});
function playextreme() {
    win = false; // Alle variablen werden erstmal zurückgesetzt falls von vorherigen Runden noch die Reihenfolge gespeichert ist etc.
    compOrder = []; // Array in dem die willkürliche Reihenfolge gespeichert wird ist leer
    playerOrder = [];
    flash = 0; // Noch kein Button hat aufgeleuchtet
    intervalId = 0;
    turn = 1; //Erste Runde
    turnCounter.innerHTML = "1"; // Der counter stellt sich auf 1, da erste Runde
    good = true; // der Spieler hat noch nichts falsches gedrückt
    for (i = 0; i < 35; i++) { //35 Zahlen werden generiert
        compOrder.push(Math.floor(Math.random() * 5) + 1); // erstellt eine willkürliche Zahl zwischen eins und fünf und pusht diese Reihenfolge dann in das dafür vorgesehene Array
    }
    console.log(compOrder); // Kontrolle über Konsolenausgabe, funktioniert yeyyy
    compTurn = true; // der Computer startet und beginnt den Ton zu spielen
    intervalId = setInterval(gameTurn, 800); //die Funktion wird alle 800millisekunden aufgerufen: Der computer spielt einen Ton alle 800ms
}
function gameTurn() {
    on = false; // der Spieler kann keine Buttons drücken
    if (flash == turn) { //Wenn ide Anzahl der gespielten töne mit der Runde übereinstimmt. Ist der Computer fertig und der Spieler ist an der reihe 
        clearInterval(intervalId); // Abspielen der Samples stoppt
        compTurn = false; // der computer ist nichtmehr an der reihe
        on = true; //jetzt kann der spieler drücken
    }
    if (compTurn) { // wenn der computer noch nicht fertig ist
        setTimeout(function () {
            if (compOrder[flash] == 1)
                topleftbutton(); //Wenn die erste Stelle im Array eins entspricht, wird funktion one ausgeführt
            if (compOrder[flash] == 2)
                toprightbutton(); // Wenn die erste Stelle im Array zwei entspricht,...usw
            if (compOrder[flash] == 3)
                bottomleftbutton();
            if (compOrder[flash] == 4)
                bottomrightbutton();
            if (compOrder[flash] == 5)
                innerbutton();
            flash++; // dann wird die zewite Stelle im Array verglichen usw.
        }, 200); //Dies passiert nach 200ms
    }
}
//FUNKTIONEN FÜR DIE BUTTONS, WENN DER COMPUTER SIE ABSPIELT ( SOUND UND LIGHTFLASH)//
function topleftbutton() {
    if (noise) {
        /*let audio:  = document.getElementById("clip1"); // Spielt den jeweiligen Sound ab
        audio.play();*/
        let sound = new Audio(buttonsounds[0]);
        sound.play();
    }
    noise = true; //wenn der Ton gespielt wird...
    topLeft.style.backgroundColor = "rgb(255, 204, 251)"; //...scheint das licht auf
    setTimeout(() => {
        clearColor();
    }, 300);
}
function toprightbutton() {
    if (noise) {
        let sound = new Audio(buttonsounds[1]);
        sound.play();
    }
    noise = true;
    topRight.style.backgroundColor = "rgb(215, 252, 255)";
    setTimeout(() => {
        clearColor();
    }, 300);
}
function bottomleftbutton() {
    if (noise) {
        let sound = new Audio(buttonsounds[2]);
        sound.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "rgb(186, 255, 215)";
    setTimeout(() => {
        clearColor();
    }, 300);
}
function bottomrightbutton() {
    if (noise) {
        let sound = new Audio(buttonsounds[3]);
        sound.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "rgb(255, 237, 198)";
    setTimeout(() => {
        clearColor();
    }, 300);
}
function innerbutton() {
    if (noise) {
        let sound = new Audio(buttonsounds[4]);
        sound.play();
    }
    noise = true;
    innerCircle.style.backgroundColor = "rgb(218, 185, 255)";
    setTimeout(() => {
        clearColor();
    }, 300);
}
// Funktion wenn alle Buttons aufleuchten sollen
function flashColor() {
    topLeft.style.backgroundColor = "rgb(255, 204, 251)";
    topRight.style.backgroundColor = "rgb(215, 252, 255)";
    bottomLeft.style.backgroundColor = "rgb(186, 255, 215)";
    bottomRight.style.backgroundColor = "rgb(255, 237, 198)";
    innerCircle.style.backgroundColor = "rgb(218, 185, 255)";
}
function clearColor() {
    topLeft.style.backgroundColor = "rgb(255, 0, 234";
    topRight.style.backgroundColor = "rgb(23, 240, 255)";
    bottomLeft.style.backgroundColor = "rgb(0, 255, 106)";
    bottomRight.style.backgroundColor = "rgb(255, 177, 10)";
    innerCircle.style.backgroundColor = "rgb(37, 1, 85)";
}
//FUNKTION FÜR DIE BUTTONS, WENN SIE VOM NUTZER GEKLICKT WERDEN//
topLeft.addEventListener("click", function () {
    if (on) { //und das Spiel an ist
        playerOrder.push(1); // dann wird die Buttonnummer ins Array der Spielerreihenfolge gepushed
        check(); //Funktion die, die Eingabe mit der Reihenfolge des Computers vergleicht
        topleftbutton(); // Funktion für licht unf ton vom Button wird aufgerufen
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
}); // so auch für die anderen Buttons//
topRight.addEventListener("click", function () {
    if (on) {
        playerOrder.push(2);
        check();
        toprightbutton();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
bottomLeft.addEventListener("click", function () {
    if (on) {
        playerOrder.push(3);
        check();
        bottomleftbutton();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
bottomRight.addEventListener("click", function () {
    if (on) {
        playerOrder.push(4);
        check();
        bottomrightbutton();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
innerCircle.addEventListener("click", function () {
    if (on) {
        playerOrder.push(5);
        check();
        innerbutton();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
// VERGLEICH VON COMPUTEREINGABE UND NUTZEREINGABE//
function check() {
    if (playerOrder[playerOrder.length - 1] !== compOrder[playerOrder.length - 1]) // hier vergleicht der Computer das Array mit der Reihenfolge des Computers mit dem Array mit der Spielereingabe
        good = false; // wenn sie nicht übereinstimmen ist das boolean falsch
    if (playerOrder.length == 5 && good && easychosen) { // wenn nach 5 runden vom Nutzer alles richtig gedrückt wurde und easy gewählt wurde, dann ist das Spiel gewonnen; genauso für die anderen Levels
        winGame(); //Spiel gewonnen für Level easy
    }
    if (playerOrder.length == 15 && good && advancedchosen) {
        winGame(); //Spiel gewonnen für Level advanced
    }
    if (playerOrder.length == 25 && good && hardchosen) {
        winGame(); //Spiel gewonnen für Level hard
    }
    if (playerOrder.length == 35 && good && extremechosen) {
        winGame(); //Spiel gewonnen für Level extreme
    }
    if (good == false) { // Wenn der Spieler einen Fehler macht, also das boolean falsch ist...
        looseGame(); //...Wird die ´Spiel verloren´ Funktion abgespielt
        noise = false; // Dabei sollen beim Aufleuchten der Button aber deren Töne nicht abgespielt werden
    }
    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
    }
}
// FUNKTION FÜR GEWINNEN DES SPIELS//
function winGame() {
    flashColor(); //Alle Buttons leuchten auf
    let sound = new Audio(buttonsounds[5]); //WinnerSound wird abgespielt
    sound.play();
    instructions.innerHTML = "CONGRATS, YOU WON!"; //Feierliche Nachricht wird angezeigt //Zeit und schwierigkeitsgrad hinzufügen
    turnCounter.innerHTML = "WIN!"; // es wird eine Gewinner nachricht angezeigt
    on = false; //Spiel schaltet sich aus, der Spieler kann also keine Knöpfe mehr drücken
    win = true; // Spiel gewonnen
}
// FUNKTION FÜR VERLIEREN DES SPIELS//
function looseGame() {
    flashColor(); //alle Buttons leuchten auf
    let sound = new Audio(buttonsounds[6]); //verliererSound wird abgespielt
    sound.play();
    instructions.innerHTML = "SORRY, YOU LOST!"; //verlierer Nachricht
    turnCounter.innerHTML = "FAIL!"; // eine verlierer Nachricht leuchtet auch im counter auf 
    setTimeout(() => {
        clearColor();
    }, 800);
    on = false;
    win = false;
}
// RELOADBUTTON//
reloadbutton.addEventListener("click", function () {
    window.location.reload(); // nachgeschaut bei https://stackoverflow.com/questions/43985752/how-to-reload-page-the-whole-page-in-angular-2//
});
// PROGRESSBAR//
class Progress {
    constructor(p) {
        this.bar = document.querySelectorAll("#prog-bar > .progress-bar")[0];
        this.p = p;
        this.update();
    }
    update() {
        this.bar.style.width = this.p + "%";
    }
    countup() {
        if (this.p < 100) {
            this.p += 10;
        }
        this.update();
    }
}
var p = new Progress(0);
//# sourceMappingURL=endaufgabescript.js.map