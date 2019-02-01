//---Add new task to list
//Get input from textbox
var input = document.getElementById("newitem");
//Trigger function when pressing enter key
input.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
        addTask();
    }
})

//Change state of checkbox 
var ul = document.getElementById("tasks");
ul.addEventListener("click",function(ev){
    var element = ev.target;
    if(element.type === "checkbox"){
        element.nextSibling.classList.toggle("done");
    } else{
        return;
    }
})

function addTask(){
    //Create list element
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    var span = document.createElement("span");
    //Set attributes 
    checkbox.type = "checkbox";
    checkbox.checked = false;
    //Append
    li.appendChild(checkbox);
    var span = li.appendChild(span);

    //Get text for element
    var text = document.getElementById("newitem").value;
    var task = document.createTextNode(text);
    span.appendChild(task);

    //Add task to list
    if(text === ''){
        alert("Do something!");
    } else {
        document.getElementById("tasks").appendChild(li);
    }
    //Clear textbox
    document.getElementById("newitem").value = "";
}
