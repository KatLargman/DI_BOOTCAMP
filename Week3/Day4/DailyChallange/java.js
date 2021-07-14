let listTasks = [];
let task = document.getElementById("task");
let submit = document.getElementById("submit");
let tasks = document.getElementById("listTasks");

function addTask(e) {
  e.preventDefault();
  if (task.value === "") {
    return;
  }
  listTasks.push(task.value);
  let new_div = document.createElement("div");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let new_task = document.createTextNode(task.value);
  new_div.appendChild(checkbox);
  new_div.appendChild(new_task);
  tasks.appendChild(new_div);
}

submit.addEventListener("click", addTask);
