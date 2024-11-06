/*Java Script med bent*/

document.getElementById("addTaskButton").addEventListener("click", addTask)

function addTask(){
    let task = document.getElementById("taskInput").value;
    let listenItem = document.createElement("li");
    listenItem.textContent = task

    document.getElementById("taskList").appendChild(listItem)
}