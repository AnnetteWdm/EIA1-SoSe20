let todoitems = ["spending my whole time on EIA", "HELVETE JÄVLA SKIT GUBBJÄVEL FITTMÖG KUKAPA FAN  ", "mental breakdown and heavy swearing", "no time for other stuff"];
window.addEventListener("load", function () {
    var trash = document.querySelector(".fa-trash-alt");
    var todobox = document.querySelector(".addlist");
    todolist();
    var input = document.querySelector("#input");
    console.log(input);
    var button = document.querySelector("#But1");
    button.addEventListener("click", function () {
        todoitems.push(input.value);
        todolist();
        input.value = "";
        console.log(todoitems);
    });
    function todolist() {
        todobox.innerHTML = "";
        for (var index = 0; index < todoitems.length; index++) {
            todobox.innerHTML += "<div>" + "<input type='checkbox'>" + todoitems[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
        }
        var total = document.querySelector("#total");
        total.innerHTML = todoitems.length;
    }
});
//Mit Hannah und Moritz im Praktikum und ganz viel Prof. Google//
//# sourceMappingURL=script.js.map