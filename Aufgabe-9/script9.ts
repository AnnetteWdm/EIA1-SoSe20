// Aufgabe 9//

//Array für die ToDos//

let todoitems: string[] = ["spending my whole time on EIA", "having no time for other stuff", "mental breakdown"];

window.addEventListener("load", function () {

    // To Do wird der Liste hinzugefügt (pushen ins Array)//

    var todobox: HTMLElement = document.querySelector(".addlist"); //für DOM manipulation//
    todolist();

    var input: HTMLInputElement = document.querySelector("#input");
    console.log(input);

    var button: HTMLElement = document.querySelector("#But1"); //Addbutton

    button.addEventListener("click", function () {
        todoitems.push(input.value); //bei click auf add button wird value ins array gepushed//
        todolist();
        input.value = ""; //damit value wieder leer wird//
        console.log(todoitems);

        input.addEventListener("keydown", function(e) { // pushen mit enter taste//
        if (e.keyCode === 13) {
            todoitems.push(input.value);
            todolist();
            input.value = "";
            console.log("input"); }
});

        function todolist(): void {
        todobox.innerHTML = "";
        for (var index = 0; index < todoitems.length; index++) {
            todobox.innerHTML += "<p>" +  "<i class = 'far fa-circle'></i>" + "<label class='container'><input type='checkbox'><span class='checkmark'></span></label>" + "<span class='todotask'>" + todoitems[index] + "</span>" + "<i class = 'far fa-trash-alt' ></i>" + "</p>";
        } 
    // Bei click auf Mülltonne wird To Do gelöscht//
        todobox.querySelector(".fa-trash-alt").addEventListener("click", function(): void {
            console.log("delete");
            todoitems.splice(index, 1);
            todolist();

    });
     //Anzeigen der Anzahl der ToDos (über Arraylänge)//
        
        var total: HTMLElement = document.querySelector("#total");
        total.innerHTML = todoitems.length;
    }
    

//mit Hannah und Moritz beim Praktikum und ganz viel Prof. Google//