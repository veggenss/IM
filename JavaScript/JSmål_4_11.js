/*Java Script med bent*/


//JS underside - Task list
document.getElementById("addTaskButton").addEventListener("click", addTask);
document.getElementById("removeTaskButton").addEventListener("click", removeTask);


function addTask(){

    let task = document.getElementById("taskInput").value;
    let listItem = document.createElement("li");
    listItem.textContent = task;
    if (task === ""){
        return;
    }
    document.getElementById("taskList").appendChild(listItem);
    document.getElementById("taskInput").value = "";

}



function removeTask(){

    let task = document.getElementById("taskInput").value;
    let taskList = document.getElementById("taskList");
    let listItems = taskList.getElementsByTagName("li");

    for (let i = 0; i < listItems.length; i++){
        if (listItems[i].textContent === task){
            taskList.removeChild(listItems[i]);
            document.getElementById("taskInput").value = "";
            return
        }
    }
}


//JS underside - Reverse input
document.getElementById("revButton").addEventListener("click", reverseInput);
    
function reverseInput() {

    let inputBox = document.getElementById("inputRev");

    let inputValue = inputBox.value;
    let reversedText = strFlip(inputValue);
    
    inputBox.value = reversedText;
}


// JS underside (IKKE LAGT TIL ENDÅ) - RPS kode duh


function RPC(value){
    const choices = ["Rock", "Paper", "Scissors"] //Liste med valgene
    let bot = Math.floor(Math.random[choices]*3) // Vi lar AIen velge en av de 3 elementene i listen over
    if (!choices.includes[value]){ //Sjekker at user inputer en rikig value
        console.log("wtf nigga")
    }

    // If loopen som beregner hva resultate er. Bruker || operator for å ungå mange if else loops
    if (value === bot){
        console.log("You suck");
    } else if (
        //Sjekker alle mulige kombinasjoner for å se om man vinner eller taper
        (value === "Rock" && bot === "Rock") ||
        (value === "Paper" && bot === "Rock") ||
        (value === "Scissors" && bot === "Paper")
    ) {
        console.log("You Won")
    } else {
        console.log("You suck even harder")
    }

}





