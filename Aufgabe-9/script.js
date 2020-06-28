//Aufgabe 9//
//Array in das die ToDos gepushed werden//
let todoitems = ["spending my whole time on EIA", "HELVETE JÄVLA SKIT GUBBJÄVEL FITTMÖG KUKAPA FAN  ", "mental breakdown and heavy swearing", "no time for other stuff"];
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
    input.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) {
            todoitems.push(input.value);
            todolist();
            input.value = "";
            console.log(todoitems);
        }
    });
    //DOM Manipulation, damit ToDos auch angezeigt werden//
    function todolist() {
        todobox.innerHTML = "";
        for (var index = 0; index < todoitems.length; index++) {
            todobox.innerHTML += "<li id='liste'>" + "<input type='checkbox' id= 'done'>" + todoitems[index] + "<i class='fas fa-trash-alt'>" + "</i> " + "</li>";
            // Bei click auf Tonne soll das ToDo aus dem Array und dem Dom gelöscht werden// // funktioniert ned, nur der erste listenpunkt kann gelöscht werden???//          
            todobox.querySelector(".fa-trash-alt").addEventListener("click", function () {
                console.log("delete");
                todoitems.splice(index);
                var element = document.getElementById("liste");
                element.parentNode.removeChild(element);
            });
            // Totale Anzahl der Todos mit Array Länge//
            var total = document.querySelector("#total");
            total.innerHTML = todoitems.length;
        }
    }
});
//Mit Hannah und Moritz im Praktikum und ganz viel Prof.Google//
//# sourceMappingURL=script.js.map