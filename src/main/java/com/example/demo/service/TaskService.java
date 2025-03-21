package com.example.demo.service;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class TaskService {

    private static final Logger logger = Logger.getLogger(TaskService.class.getName());

    @Autowired
    private TaskRepository taskRepository;

    // Create a new task
    public Task createTask(Task task) {
        Task savedTask = taskRepository.save(task);
        logger.info("Task saved: " + savedTask);
        return savedTask;
    }

    // Get all tasks
    public List<Task> getAllTasks() {
        List<Task> tasks = taskRepository.findAll();
        logger.info("Fetching all tasks. Total: " + tasks.size());
        return tasks;
    }

    // Get a task by ID
    public Optional<Task> getTaskById(Long id) {
        Optional<Task> task = taskRepository.findById(id);
        if (task.isPresent()) {
            logger.info("Task found: " + task.get());
        } else {
            logger.warning("Task not found with ID: " + id);
        }
        return task;
    }

    // Update a task
    public Task updateTask(Long id, Task updatedTask) {
        return taskRepository.findById(id).map(task -> {
            task.setTitle(updatedTask.getTitle());
            task.setDescription(updatedTask.getDescription());
            task.setStatus(updatedTask.getStatus());
            Task updated = taskRepository.save(task);
            logger.info("Task updated: " + updated);
            return updated;
        }).orElseThrow(() -> {
            logger.warning("Task not found with ID: " + id);
            return new RuntimeException("Task not found");
        });
    }

    // Delete a task
    public void deleteTask(Long id) {
        if (taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
            logger.info("Task deleted with ID: " + id);
        } else {
            logger.warning("Task not found with ID: " + id);
        }
    }
}
