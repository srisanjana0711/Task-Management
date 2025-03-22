document.addEventListener("DOMContentLoaded", function () {
    renderTasks(); // Load tasks on page load

    document.getElementById("taskForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const status = document.getElementById("status").checked;

        if (document.getElementById("taskId").value === "") {
            addTask(title, description, status);
        } else {
            updateTask(
                document.getElementById("taskId").value,
                title,
                description,
                status
            );
        }
    });
});

// ✅ Fetch and Display All Tasks
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear previous tasks

    fetch("http://localhost:8080/tasks")
        .then(response => response.json())
        .then(tasks => {
            tasks.forEach(task => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <strong>${task.title}</strong> : ${task.description} - 
                    ${task.status 
                        ? '<span style="color:green;">✅ Completed</span>' 
                        : '<span style="color:red;">❌ Pending</span>'}
                    
                    <button onclick="deleteTask(${task.id})" 
                        style="margin-left: 10px; color: white; background-color: red; border: none; padding: 5px;">
                        Delete
                    </button>

                    <button onclick="editTask(${task.id}, '${task.title}', '${task.description}', ${task.status})" 
                        style="margin-left: 5px; color: white; background-color: blue; border: none; padding: 5px;">
                        Edit
                    </button>
                `;
                taskList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching tasks:", error));
}

// ✅ Add a New Task
function addTask(title, description, status) {
    fetch("http://localhost:8080/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, status }),
    })
    .then(response => {
        if (response.ok) {
            alert("Task added successfully!");
            document.getElementById("taskForm").reset(); // Clear form
            renderTasks(); // Refresh task list
        } else {
            alert("Failed to add task.");
        }
    })
    .catch(error => console.error("Error adding task:", error));
}

// ✅ Delete a Task
function deleteTask(taskId) {
    fetch(`http://localhost:8080/tasks/${taskId}`, {
        method: "DELETE",
    })
    .then(response => {
        if (response.ok) {
            alert("Task deleted successfully!");
            renderTasks(); // Refresh task list
        } else {
            alert("Failed to delete task.");
        }
    })
    .catch(error => console.error("Error deleting task:", error));
}

// ✅ Edit a Task (Prefill Form)
function editTask(taskId, title, description, status) {
    document.getElementById("title").value = title;
    document.getElementById("description").value = description;
    document.getElementById("status").checked = status;
    document.getElementById("taskId").value = taskId; // Store task ID for updating
}

// ✅ Update an Existing Task
function updateTask(taskId, title, description, status) {
    fetch(`http://localhost:8080/tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, status }),
    })
    .then(response => {
        if (response.ok) {
            alert("Task updated successfully!");
            document.getElementById("taskForm").reset(); // Clear form
            document.getElementById("taskId").value = ""; // Reset task ID
            renderTasks(); // Refresh task list
        } else {
            alert("Failed to update task.");
        }
    })
    .catch(error => console.error("Error updating task:", error));
}
