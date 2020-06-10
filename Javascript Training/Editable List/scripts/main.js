unorderedList = document.getElementById("checklist");
listItems = unorderedList.querySelectorAll("li");

for(let i=0; i<listItems.length; i++){
    listItems[i].querySelector("span").addEventListener("click",editSpan);
    listItems[i].querySelector("span").addEventListener("click",editSpan);
    listItems[i].querySelector("input").addEventListener("blur",editInput);
    listItems[i].querySelector("input").addEventListener("keypress",keypressInput);
}

function editSpan(){
    this.className = "edit";
    let input = this.nextElementSibling;
    input.className = "edit";
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function editInput(){
    this.className = "";
    let span = this.previousElementSibling;
    span.className = "";
    span.innerHTML = this.value;
}

function keypressInput(event){
    if (event.which === 13){
        editInput.call(this);
    }
}