package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private boolean status;

    @Column(updatable = false)
    private LocalDateTime createdAt;

    // Constructors
    public Task() {
        this.createdAt = LocalDateTime.now(); // Set creation time
    }

    public Task(String title, String description, boolean status) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public boolean getStatus() { return status; } // Corrected boolean getter
    public void setStatus(boolean status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
}
