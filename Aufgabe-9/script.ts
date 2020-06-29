//Aufgabe 9//

//Array in das die ToDos gepushed werden//
let todoitems: string[] = ["spending my whole time on EIA", "mental breakdown and heavy swearing", "no time for other stuff"];

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

            var todoContainer: HTMLElement = document.createElement("div");
            todoContainer.classList.add("todo");
            todoContainer.innerHTML +=  "<p>" + "<label class='container'><input type='checkbox'><span class='checkmark'></span></label>" + "<span class='todotask'>" + todoitems[index] + "</span>" + "<i class = 'far fa-trash-alt' ></i>" + "</p>";

            todoContainer.querySelector(".fa-trash-alt").addEventListener("click", function(): void {
                console.log("delete"); //wird angezeigt//
                todoitems.splice(index);
                todolist();
    
        });

            todobox.appendChild(todoContainer);
    }
    
            // Totale Anzahl der Todos mit Array Länge//   
        var total: HTMLElement = document.querySelector("#total");
        total.innerHTML = todoitems.length;
            
});



//Mit Hannah und Moritz im Praktikum und ganz viel Prof.Google//