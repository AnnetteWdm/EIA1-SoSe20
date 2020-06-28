//Aufgabe 9//
//Array in das die ToDos gepushed werden//
let todoitems = ["spending my whole time on EIA", "HELVETE JÄVLA SKIT GUBBJÄVEL FITTMÖG KUKAPA FAN  ", "mental breakdown and heavy swearing", "no time for other stuff", "I dont want anymore"];
window.addEventListener("load", function () {
    var todobox = document.querySelector(".addlist");
    todolist();
    //Bei click auf Button wird der input ins Array gepushed
    var input = document.querySelector("#input");
    console.log(input);
    var button = document.querySelector("#But1");
    button.addEventListener("click", function () {
        todoitems.push(input.value);
        todolist();
        input.value = "";
        console.log(todoitems);
    });
    //Bei Drücken der Entertaste soll input ins Array gepushed werden// //natüüüürlich funktioniert es ned//
    input.addEventListener("keyup", function (even) {
        if (event.keyCode == 13) {
            todoitems.push(input.value);
            todolist();
            input.value = "";
        }
    });
    //DOM Manipulation, damit ToDos auch angezeigt werden//
    function todolist() {
        todobox.innerHTML = "";
        for (var index = 0; index < todoitems.length; index++) {
            todobox.innerHTML += "<div>" + "<input type='checkbox'>" + todoitems[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
            // Bei click auf Tonne soll das ToDo aus dem Array und dem Dom gelöscht werden// // funktioniert ned//          
            var close = document.getElementsByClassName("far fa-trash-alt");
            var i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                };
            }
            // Totale Anzahl der Todos mit Array Länge//
            var total = document.querySelector("#total");
            total.innerHTML = todoitems.length;
        }
    }
});
//Mit Hannah und Moritz im Praktikum und ganz viel Prof.Google//
//# sourceMappingURL=script.js.map