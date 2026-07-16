function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();
  if (task) {
    let li = document.createElement("li");
    li.textContent = task;

    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = function() {
      li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
}
