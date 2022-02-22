let button = document.querySelector("button[type=submit]");
button.addEventListener("click", () => {
    let text = document.getElementById("text");
    let list = document.getElementById("list");
    if (text.value != "") {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const checkbox = document.createElement("input");
        const deleteBtn = document.createElement("button");
        checkbox.type = "checkbox";
        deleteBtn.type = "delete";
        deleteBtn.className = "delete";
        deleteBtn.innerHTML = '<i class="fa fa-trash-o"></i>';
        p.innerHTML = text.value;
        div.appendChild(checkbox);
        div.appendChild(p);
        div.appendChild(deleteBtn);
        div.id = "div";
        list.appendChild(div);
    };
    text.value = "";
    var deletee = document.querySelectorAll(".delete");
    for (var i = 0; i < deletee.length; i++){
        deletee[i].onclick = function(){
            this.parentNode.remove();
        }
    };
});

