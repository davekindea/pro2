function addTask() {
    var inputBox = document.getElementById("input-box");
    var task = inputBox.value;
    if (task.trim() !== "") {
        var ul = document.getElementById("list-container");
        var li = document.createElement("li");
        li.textContent = task;
        ul.appendChild(li);
        inputBox.value = "";
        addEditButton(li); // Add edit button for the new task
        addDeleteButton(li); // Add delete button for the new task
    }
}

function editTask(element) {
    var li = element.parentNode;
    var taskText = li.textContent.trim();
    var newText = prompt("Edit task:", taskText);
    if (newText !== null && newText.trim() !== "") {
        li.textContent = newText;
        addEditButton(li); // Re-add edit button after editing
        addDeleteButton(li); // Re-add delete button after editing
    }
}

function deleteTask(element) {
    element.parentNode.remove();
}

// Add edit button for each task
function addEditButton(taskElement) {
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = function() {
        editTask(editBtn);
    };
    taskElement.appendChild(editBtn);
}

// Add delete button for each task
function addDeleteButton(taskElement) {
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        deleteTask(deleteBtn);
    };
    taskElement.appendChild(deleteBtn);
}
