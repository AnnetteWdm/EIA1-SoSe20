//Aufgabe 9//

//Array in das die ToDos gepushed werden//
let todoitems: string[] = ["spending my whole time on EIA", "HELVETE JÄVLA SKIT GUBBJÄVEL FITTMÖG KUKAPA FAN  ", "mental breakdown and heavy swearing", "no time for other stuff"];

window.addEventListener("load", function () {

    var todobox: HTMLElement = document.querySelector(".addlist");

    todolist();

    //Bei click auf Button wird der input ins Array gepushed

    var input: HTMLInputElement = document.querySelector("#input");
    console.log(input);
    var button: HTMLElement = document.querySelector("#But1");

    button.addEventListener("click", function () {
        todoitems.push(input.value);
        todolist();
        input.value = "";
        console.log(todoitems);
    });

    //Bei Drücken der Entertaste soll input ins Array gepushed werden// //natüüüürlich funktioniert es ned//
    input.addEventListener("keyup", function(event) { 
        if (event.keyCode == 13) {
            todoitems.push(input.value);
            todolist(); 
            input.value = "";
            console.log(todoitems);
        }
    });

    //DOM Manipulation, damit ToDos auch angezeigt werden//

    
    function todolist(): void {
        todobox.innerHTML = "";
        for (var index = 0; index < todoitems.length; index++) {
            todobox.innerHTML += "<div id='box'>" + "<input type='checkbox' id='checkbox'>"  + todoitems[index] + "<i class='fas fa-trash-alt'></i>" + "</div>";
           
    // Bei click auf Tonne soll das ToDo aus dem Array und dem Dom gelöscht werden// // löschen funktioniert jetzt aber nach dem löschen wird die anzahl nicht erneuert?//          
            var close: HTMLElement = document.getElementsByClassName("fas fa-trash-alt");
            var i;
            for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }

    
    // Totale Anzahl der Todos mit Array Länge//

            var total: HTMLElement = document.querySelector("#total");
            total.innerHTML = todoitems.length;
    }
    }
});

//Mit Hannah und Moritz im Praktikum und ganz viel Prof.Google//