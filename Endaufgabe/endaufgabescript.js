// Endaufgabe SoSe 2020, Annette Wiedenmann, 265117//// mit Hilfe von https://github.com/beaucarnes/simon-game/blob/master/js/index.js  //
//VARIABLEN WERDEN DEKLARIERT//
let compOrder = []; //Array in der die, vom Computer generierte Reihenfolge der aufleuchtenden Buttons, gespeichert werden
let playerOrder = []; //Array in der die vom Spieler eingegebene Reihenfolge gespeichert wird
let flash; // Anzahl der Buttons die aufleuchten
let turn; // Gibt an in welcher Runde sich der Spieler befindet
let good; // Gibt an ob der Nutzter fehler macht (false) oder nicht (true)
let compTurn; // Gibt an ob der Computer an der Reihe ist die Reihenfolge vor zu spielen oder nicht (dann ist der Nutzer dran)
let intervalId; // Für den Intervall, in dem die Buttons aufleuchten
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
/*
Die Anwendung muss immer wieder auf die selben DOM-Elemente zugreifen. Damit diese Elemente nicht
jedes mal neu selektiert werden müssen, werden hier Variablen deklariert, die die entsprechenden DOM-Elemente speichern.
Es werden Konstanten verwendet, da der Wert der Variablen immer gleich ist
*/
// Für den Counter und Instructions//
const turnCounter = document.querySelector("#turn");
const instructions = document.querySelector("#instruction");
//Füt die Buttons//
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const innerCircle = document.querySelector("#inner-circle");
const reloadbutton = document.querySelector("#reload");
const progressbar = document.querySelector(".progress-bar");
//Für die Schwierigkeitsgrad buttons
const diffEasy = document.querySelector("#difficultyeasy");
const diffAdvanced = document.querySelector("#difficultyadvanced");
const diffHard = document.querySelector("#difficultyhard");
const diffExtreme = document.querySelector("#difficultyextreme");
//FUNKTIONEN FÜR DEN JEW. SCHWIERIGKEITSGRAD//
var i; // Zählervariable für die Schleife (wird global deklariert, damit für jeden Schwierigkeitsgrad darauf zugegriffen werden kann//
// EASY//
diffEasy.addEventListener("click", function () {
    console.log("buttonEASYclicked"); //Konsolenausgabe zur Kontrolle ob der Button reagiert
    diffEasy.style.boxShadow = "3px 3px 15px 3px white"; //gewählte Schwierigkeit wird durch einen Boxschatten markiert
    on = true; // Das Spiel läuft
    easychosen = true; //es wurde Schwierigkeit easy gewählt
    advancedchosen = false; //Die anderen Schwierigkeiten wurden nicht gewählt, sind also false
    hardchosen = false;
    extremechosen = false;
    playeasy(); //Funktion playeasy wird aufgerufen
});
function playeasy() {
    win = false; // Alle variablen werden erstmal zurückgesetzt, falls von vorherigen Runden noch die Reihenfolge gespeichert ist
    compOrder = []; // Array in dem die willkürliche Reihenfolge gespeichert wird ist leer
    playerOrder = []; // Array mit der Nutzereigabe soll auch leer sein
    flash = 0; // Noch kein Button haben aufgeleuchtet
    intervalId = 0; // Das Interval wird auf 0 gesetzt
    turn = 1; //Erste Runde
    turnCounter.innerHTML = "1"; // Der counter stellt sich auf 1, da erste Runde
    good = true; // der Spieler hat noch nichts falsches gedrückt
    for (i = 0; i < 5; i++) { // Willkütliche Zahlenreihenfolge von 5 Zahlen wird erstellt mit dieser Schleife
        compOrder.push(Math.floor(Math.random() * 5) + 1); // Diese Methode erstellt eine willkürliche Zahl zwischen eins und fünf und pusht diese dann in das Array für die Computerreihenfolge. Das passiert durch die Schleife 5 Mal//
    }
    console.log(compOrder); // Kontrolle über Konsolenausgabe
    compTurn = true; // der Computer startet und beginnt, durch Aufruf der Funktion gameTurn (in der folgenden Zeile), den ersten Ton zu spielen
    intervalId = setInterval(gameTurn, 800); //die Funktion gameturn wird alle 800millisekunden aufgerufen. Der Computer lässt also alle 800ms ein Button aufleuchten bis das Intervall geleert wurde mit clearInterval (siehe bei funktion gameTurn)
}
//ADVANCED//
diffAdvanced.addEventListener("click", function () {
    console.log("buttonAdvancedclicked");
    diffAdvanced.style.boxShadow = "3px 3px 15px 3px white";
    on = true;
    easychosen = false;
    advancedchosen = true;
    hardchosen = false;
    extremechosen = false;
    playadvanced();
});
function playadvanced() {
    win = false;
    compOrder = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = "1";
    good = true;
    for (i = 0; i < 15; i++) { // Hier wird eine Reihenfolge von 15 Zahlen erstellt
        compOrder.push(Math.floor(Math.random() * 5) + 1);
    }
    console.log(compOrder);
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}
//HARD//
diffHard.addEventListener("click", function () {
    console.log("buttonHardclicked");
    diffHard.style.boxShadow = "3px 3px 15px 3px white";
    on = true;
    easychosen = false;
    advancedchosen = false;
    hardchosen = true;
    extremechosen = false;
    playhard();
});
function playhard() {
    win = false;
    compOrder = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = "1";
    good = true;
    for (i = 0; i < 25; i++) {
        compOrder.push(Math.floor(Math.random() * 5) + 1);
    }
    console.log(compOrder);
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}
//Extreme//
diffExtreme.addEventListener("click", function () {
    console.log("buttonExtremeclicked");
    diffExtreme.style.boxShadow = "3px 3px 15px 3px white";
    on = true;
    easychosen = false;
    advancedchosen = false;
    hardchosen = false;
    extremechosen = true;
    playextreme();
});
function playextreme() {
    win = false;
    compOrder = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = "1";
    good = true;
    for (i = 0; i < 35; i++) {
        compOrder.push(Math.floor(Math.random() * 5) + 1);
    }
    console.log(compOrder);
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}
function gameTurn() {
    on = false; // der Spieler kann zunächst keine Buttons drücken
    if (flash == turn) { //Wenn die Anzahl der gespielten Töne mit der Runde übereinstimmt, dann:
        clearInterval(intervalId); // stoppt das Interval in dem die  Buttons aufleuchten, denn in Runde eins soll ja nur der erste Ton abgespielt werden, in Runde zwei die ersten zwei Töne usw...
        compTurn = false; // der Computer hat den Tön/ die Töne abgespielt und ist nichtmehr an der Reihe
        instructions.innerHTML = "REPEAT THE SOUNDS!"; // Mit der Spielanweisung wird der SPieler aufgefordert die Töne nachzuahmen
        on = true; //jetzt kann der Spieler die Buttons drücken
    }
    if (compTurn) { // Wenn der Computer noch nicht fertig ist
        instructions.innerHTML = "WATCH AND LISTEN CAREFULLY!"; // dann wird der SPieler aufgefordert aufmerksam zu sein
        setTimeout(function () {
            //die Variable flash wird hier als Index benutzt um auf die jeweilige Stelle im Array zuzugreifen. flash ist am Anfang 0, also wird die erste Stelle im Array verglichen.
            if (compOrder[flash] == 1)
                topleftbutton(); //Wenn die erste Stelle im Array der Computerreihenfolge eins entspricht, wird die Funktion für den oberen linken Button ausgeführt ( also wird der jew. Button aufleuchten und den Ton abspielen)
            if (compOrder[flash] == 2)
                toprightbutton(); // Wenn die erste Stelle im Array zwei entspricht, wird die Funktion für den oberen rechten Button getriggert
            if (compOrder[flash] == 3)
                bottomleftbutton(); // usw..//
            if (compOrder[flash] == 4)
                bottomrightbutton();
            if (compOrder[flash] == 5)
                innerbutton();
            flash++; // dann wird die Variable erhöht damit die nächste Stelle im Array verglichen wird
        }, 200); /*Das ganze passiert nach jew. 200ms. Da die Funktion gameTurn oben alle 800ms aufgerufen wird, Leuchtet ein Button alle 800ms auf.
                            Da wir hier die 200ms haben, leuchtet kein Button für 200ms. Nach Ende der obigen 800ms leuchtet dann wieder ein Button auf */
    }
}
//FUNKTIONEN FÜR DIE BUTTONS, WENN DER COMPUTER SIE ABSPIELT ( SOUND UND LIGHTFLASH)//
function topleftbutton() {
    if (noise) { // Wenn der Button auch einen Ton abspielen soll dann
        let sound = new Audio(buttonsounds[0]); //wird der Ton abgespielt
        sound.play();
    }
    topLeft.style.backgroundColor = "rgb(255, 204, 251)"; // Der Button leuchtet durch veränderung der Farbe auf, wenn der Ton abgespielt wird
    setTimeout(() => {
        clearColor(); // ...wird das Aufleuchten des Buttons wieder rückgängig gemacht mit der clearColour Funktion
    }, 300);
}
// genauso für alle anderen Buttons//
function toprightbutton() {
    if (noise) {
        let sound = new Audio(buttonsounds[1]);
        sound.play();
    }
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
    innerCircle.style.backgroundColor = "rgb(218, 185, 255)";
    setTimeout(() => {
        clearColor();
    }, 300);
}
// Funktion für die Farbänderung der Buttons//
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
// [geht natürlich auch mit CSS Klassenwechsel aber Inline style ging schneller zu coden :) ]
//FUNKTION FÜR DIE BUTTONS, WENN SIE VOM NUTZER GEKLICKT WERDEN//
topLeft.addEventListener("click", function () {
    if (on) { //und das Spiel an ist
        playerOrder.push(1); // dann wird die Buttonnummer ins Array der Spielerreihenfolge gepushed
        check(); //Funktion die, die Eingabe mit der Reihenfolge des Computers vergleicht wird aufgerufen
        topleftbutton(); // Funktion für Licht und Ton vom Button wird aufgerufen
        if (!win) { // Wenn das Spiel nicht gewonnen wurde, dann...
            setTimeout(() => {
                clearColor(); // ...werden die Farben der Buttons wieder zurück gesetzt
            }, 300); // nach 300ms
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
    if (playerOrder[playerOrder.length - 1] !== compOrder[playerOrder.length - 1]) // hier vergleicht der Computer die letzte Eingabe ins NutzerArray mit der Zahl, die im ComputerArray steht.
        /*Es wird die jeweils letzte Eingabe vom Nutzer verglichen. z.B. Ist die Länge des Nutzer Arrays nach der ersten Runde eins. Damit die erste Stelle aber verglichen wird, muss man beim Index noch -1 schreiben,
        da der Index der ersten Stelle 0 ist.*/
        good = false; // wenn sie NICHT übereinstimmen ist das boolean falsch, der SPieler hat also einen Fehler gemacht
    //Festlegen, wann das Spiel gewonnen ist//
    if (playerOrder.length == 5 && good && easychosen) { // wenn nach 5 Runden (Also wenn die Länge vom NutzterArray 5 ist) vom Nutzer alles richtig gedrückt wurde und easy gewählt wurde, dann ist das Spiel gewonnen; genauso für die anderen Levels
        winGame(); //Spiel gewonnen für Level easy
    }
    if (playerOrder.length == 15 && good && advancedchosen) { // Genauso wie Oben, nur dass das Spiel für den Schwierigkeitsgrad advanced nach 15 Runden gewonnen ist
        winGame(); //Spiel gewonnen für Level advanced
    }
    if (playerOrder.length == 25 && good && hardchosen) {
        winGame(); //Spiel gewonnen für Level hard
    }
    if (playerOrder.length == 35 && good && extremechosen) {
        winGame(); //Spiel gewonnen für Level extreme
    }
    //Verlieren des Spiels//
    if (good == false) { // Wenn der Spieler einen Fehler macht, also das boolean falsch ist...
        looseGame(); //...Wird die ´Spiel verloren´ Funktion abgespielt
        noise = false; // Dabei sollen beim Aufleuchten der Button aber deren Töne nicht abgespielt werden, da es einen anderen Sound für diesen Fall gibt
    }
    //Für den Rundenwechsel//
    if (turn == playerOrder.length && good && !win) { // Wenn die Runde der Länge des Arrays mit der Nutzterreihenfolge entspricht und bisher kein Fehler gemacht wurde und das Spiel noch nicht gewonnen wurde,...
        turn++; // ...,dann geht das Spiel in die nächste Runde
        playerOrder = []; // Das Array mit der Nutzterreihenfolge wird wieder gelehrt, damit es für die kommende Runde mit der neuen Nutztereingabe befüllt werden kann
        compTurn = true; // Der Computer ist als erstes an der Reihe die willkürliche Reihenfolge zu spielen
        flash = 0; // Es hat in der neuen Runde noch kein Button augeleuchtet, deshalb wird flash wieder auf 0 gesetzt
        turnCounter.innerHTML = turn; // Im Counter wird angezeigt in welcher Runde der Spieler ist
        intervalId = setInterval(gameTurn, 800);
        //PROGRESS BAR VERSUCH nur für easy. So ist es aber umstädlich und zu lang :( //
        //easy//
        if (turn == 2 && easychosen) { //Wenn der Spieler in Runde zwei ist und easy als Schwierigkeit gewählt wurde,
            progressbar.style.width = "20%"; //dann steht der Balken bei 20 Prozent usw...
        }
        else if (turn == 3 && easychosen) {
            progressbar.style.width = "40%";
        }
        else if (turn == 4 && easychosen) {
            progressbar.style.width = "60%";
        }
        else if (turn == 5 && easychosen) {
            progressbar.style.width = "80%";
        }
    }
}
// FUNKTION FÜR GEWINNEN DES SPIELS//
function winGame() {
    progressbar.style.width = "100%"; // Der Fortschrittbalken steht auf 100%
    flashColor(); //Alle Buttons leuchten gemeinsam auf
    let sound = new Audio(buttonsounds[5]); //WinnerSound wird abgespielt; Sound ist im Array buttonsounds abgespeichert: (Zugriff mit Index 5)
    sound.play();
    instructions.innerHTML = "CONGRATS, YOU WON!"; //Feierliche Nachricht wird angezeigt //
    turnCounter.innerHTML = "WIN!"; // es wird eine Gewinner Nachricht im Counter angezeigt
    on = false; //Spiel schaltet sich aus, der Spieler kann also keine Knöpfe mehr drücken
    win = true; // Spiel gewonnen
}
// FUNKTION FÜR VERLIEREN DES SPIELS//
function looseGame() {
    flashColor(); //alle Buttons leuchten auf
    let sound = new Audio(buttonsounds[6]); //verliererSound wird abgespielt
    sound.play();
    instructions.innerHTML = "SORRY, YOU LOST!"; //verlierer Nachricht
    turnCounter.innerHTML = "FAIL!"; // eine verlierer Nachricht leuchtet auch im Counter auf 
    setTimeout(() => {
        clearColor(); //Die Farben werden nach 800ms wieder zu den ausgangsfarben geändert
    }, 800);
    on = false; //Spiel ist aus
    win = false; //Spiel wurde nicht gewonnen
}
// RELOADBUTTON//
reloadbutton.addEventListener("click", function () {
    window.location.reload(); // Methode nachgeschaut bei https://stackoverflow.com/questions/43985752/how-to-reload-page-the-whole-page-in-angular-2//
});
//# sourceMappingURL=endaufgabescript.js.map