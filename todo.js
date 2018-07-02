window.onload = function(){
    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let input = document.getElementById('inp');
    btn.onclick = function() {
        // value += '<li>' + input.value + '</li>';
        // value += `<li> ${input.value} </li>`
        // result.innerHTML = value;
        var li = document.createElement("li");
        li.type="square";
        var span = document.createElement("span");
        var text = document.createTextNode(`${input.value}`);
        input.value = "";
        span.appendChild(text);
        li.appendChild(span);


        var updButt = document.createElement("button");
        var updimg = document.createElement("img");
        updimg.src = "edit.png";
        updimg.height = 25;
        updimg.width = 25;
        updButt.appendChild(updimg);
        updButt.classList.add("update");
        updButt.title = "Edit";
        li.appendChild(updButt);
        updButt.onclick = updateNode;


        var delButt = document.createElement("button");
        var delimg = document.createElement("img");
        delimg.src = "delete.png";
        delimg.height = 25;
        delimg.width = 25;
        delButt.appendChild(delimg);
        delButt.classList.add("delete");
        delButt.title = "Delete";
        li.appendChild(delButt);
        delButt.onclick = deleteNode;


        result.appendChild(li);
    }
};
function deleteNode() {
    this.parentNode.remove();
}
function updateNode() {
    this.parentNode.innerHTML =
        "<input type = 'text' placeholder = 'Enter the task to update...'> " +
        "<button title = 'Done' type = 'button' onclick = 'func1(this)' class = 'done'>" +
        "<img src = 'done.png' height = '25' width = '25' " +
        "</button> ";
}
function func1(element){

    var litem = element.parentNode;
    var spanitem = document.createElement("span");
    var textitem = document.createTextNode(element.previousElementSibling.value);
    litem.innerHTML = "";
    spanitem.appendChild(textitem);
    litem.appendChild(spanitem);

    var updButt = document.createElement("button");
    var updimg = document.createElement("img");
    updimg.src = "edit.png";
    updimg.height = 25;
    updimg.width = 25;
    updButt.appendChild(updimg);
    updButt.classList.add("update");
    updButt.title = "Edit";
    litem.appendChild(updButt);
    updButt.onclick = updateNode;

    var delButt = document.createElement("button");
    var delimg = document.createElement("img");
    delimg.src = "delete.png";
    delimg.height = 25;
    delimg.width = 25;
    delButt.appendChild(delimg);
    delButt.classList.add("delete");
    delButt.title = "Delete";
    litem.appendChild(delButt);
    delButt.onclick = deleteNode;
}
//Function Update
//Function Delete
//Optimise this method using CreateNode
