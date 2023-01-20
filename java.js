// Javascript code for the extension

let tasks = []; // array to store the tasks

function addTask() {
    let task = document.getElementById("task").value; // get the task from the input field
    tasks.push(task); // add the task to the array
    document.getElementById("task").value = ""; // clear the input field
    displayTasks(); // call the function to display the tasks
}

function displayTasks() {
    let list = "";
    for (let i = 0; i < tasks.length; i++) {
        list += "<div class='task'>" + tasks[i] + "<input type='checkbox' onclick='crossOff(" + i + ")'> <button onclick='deleteTask(" + i + ")'>Delete</button> <button onclick='editTask(" + i + ")'>Edit</button></div>";
    }
    document.getElementById("task-list").innerHTML = list;
}

function crossOff(index) {
    let task = document.getElementsByClassName("task")[index];
    task.style.textDecoration = "line-through";
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function editTask(index) {
    let task = tasks[index];
    let newTask = prompt("Edit task:", task);
    tasks[index] = newTask;
    displayTasks();
}

