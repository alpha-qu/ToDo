window.onload = function(){
    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let input = document.getElementById('inp');
    btn.onclick = function() {
        var li = document.createElement("li");
        var container = document.createElement("div");
        container.id = "container";
        var div1 = document.createElement("div");
        div1.id = "content";
        var div2 = document.createElement("div");
        div2.id = "buttons";
        li.type="square";
        var span = document.createElement("span");
        var text = document.createTextNode(input.value);
        input.value = "";
        span.appendChild(text);
        div1.appendChild(span);


        var updButt = document.createElement("button");
        updButt.innerHTML = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"pen\" class=\"svg-inline--fa fa-pen fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z\"></path></svg>"
        updButt.classList.add("update");
        updButt.title = "Edit";
        div2.appendChild(updButt);
        updButt.onclick = updateNode;


        var delButt = document.createElement("button");
        delButt.innerHTML = "<svg aria-hidden=\"true\" data-prefix=\"far\" data-icon=\"trash-alt\" class=\"svg-inline--fa fa-trash-alt fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M192 188v216c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V188c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12zm100-12h-24c-6.627 0-12 5.373-12 12v216c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V188c0-6.627-5.373-12-12-12zm132-96c13.255 0 24 10.745 24 24v12c0 6.627-5.373 12-12 12h-20v336c0 26.51-21.49 48-48 48H80c-26.51 0-48-21.49-48-48V128H12c-6.627 0-12-5.373-12-12v-12c0-13.255 10.745-24 24-24h74.411l34.018-56.696A48 48 0 0 1 173.589 0h100.823a48 48 0 0 1 41.16 23.304L349.589 80H424zm-269.611 0h139.223L276.16 50.913A6 6 0 0 0 271.015 48h-94.028a6 6 0 0 0-5.145 2.913L154.389 80zM368 128H80v330a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6V128z\"></path></svg>"
        delButt.classList.add("delete");
        delButt.title = "Delete";
        div2.appendChild(delButt);
        delButt.onclick = deleteNode;

        container.appendChild(div1);
        container.appendChild(div2);
        li.appendChild(container);
        result.appendChild(li);
    }
};
function deleteNode() {
    this.parentNode.parentNode.parentNode.remove();
}
function updateNode() {
    var div1 = this.parentNode.previousElementSibling;
    var div2 = this.parentNode;
    var content = div1.firstChild;
    var upd1 = this;
    var del1 = this.nextElementSibling;
    content.innerHTML = "";
    upd1.classList.add("hide");
    del1.classList.add("hide");
    var span = document.createElement("span");
    span.innerHTML = "<input type = 'text' placeholder='Enter the task to update...'>";
    div1.appendChild(span);
    var donespan = document.createElement("span");
    donespan.innerHTML =  "<button title = 'Done' type = 'button' onclick = 'func1(this)' class = 'done'>" +
        "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"thumbs-up\" class=\"svg-inline--fa fa-thumbs-up fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z\"></path></svg>" +
        "</button> ";
    div2.appendChild(donespan);
}
function func1(element){
    var donespan = element.parentNode;
    var del1 = donespan.previousElementSibling;
    var upd1 = del1.previousElementSibling;
    var buttons = donespan.parentNode;
    var contentdiv = buttons.previousElementSibling;
    var contentspan = contentdiv.firstChild;
    var spaninput = contentspan.nextElementSibling;
    var input = spaninput.firstChild;
    contentspan.innerHTML = input.value;
    spaninput.remove();
    del1.classList.remove("hide");
    upd1.classList.remove("hide");
    donespan.remove();
}
