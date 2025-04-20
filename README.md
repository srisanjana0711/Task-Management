


# **📌 Task Management Application**  
A **simple Task Management Application** built using **Spring Boot, PostgreSQL, Docker, and deployed on Render**. This application allows users to **add, update, view, and delete tasks** with a minimal frontend.

---

## **🚀 Live Demo**  
🔗 **[Click here to access the deployed app](https://task-management-tbz6.onrender.com)**  

---

## **📌 Features**  
✅ Add New Tasks  
✅ View All Tasks  
✅ Update Task Details  
✅ Delete Tasks  
✅ Status Tracking (Completed/Pending)  

---

## **🛠️ Tech Stack**  
- **Backend:** Spring Boot (Java), Spring Data JPA  
- **Frontend:** HTML, CSS, JavaScript  
- **Database:** PostgreSQL (Previously MySQL, now switched to PostgreSQL)  
- **Deployment:** Docker & Render  

---

## **📂 Project Structure**  
```
├── src/main/java/com/example/demo
│   ├── controller/TaskController.java  # REST API Endpoints
│   ├── service/TaskService.java        # Business Logic
│   ├── repository/TaskRepository.java  # Database Access Layer
│   ├── model/Task.java                 # Task Entity Model
│   ├── TodoAppApplication.java         # Main Spring Boot Entry
│
├── src/main/resources
│   ├── static/index.html  # Frontend UI
│   ├── static/styles.css  # CSS Styles
│   ├── static/script.js   # JavaScript for API Calls
│   ├── application.properties  # Database Configuration
│
├── Dockerfile              # Docker Image Configuration
├── docker-compose.yml      # Multi-container Setup (App + PostgreSQL)
├── pom.xml                 # Maven Dependencies
├── README.md               # Documentation
```

---

## **🔧 Setup & Run Locally**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### **2️⃣ Run with Docker**
```sh
docker-compose up --build -d
```
- This will start the **Spring Boot app** and **PostgreSQL database** together.

### **3️⃣ Access the App**
- Open **http://localhost:8080** in your browser.

---

## **📡 API Endpoints**
| Method | Endpoint        | Description       |
|--------|---------------|------------------|
| GET    | `/tasks`       | Get all tasks   |
| POST   | `/tasks`       | Add new task    |
| PUT    | `/tasks/{id}`  | Update task     |
| DELETE | `/tasks/{id}`  | Delete task     |

---

## **🌍 Deployment on Render**
This project is deployed on Render using **Docker & PostgreSQL**.  

### **Steps to Deploy on Render:**
1️⃣ Push your **Dockerized** project to GitHub.  
2️⃣ Connect GitHub repo to Render.  
3️⃣ Deploy using **Dockerfile & docker-compose.yml**.  
4️⃣ Add **PostgreSQL Database** via Render.  
5️⃣ Set **Environment Variables** (Database URL, User, Password).  

---

## **💡 Future Improvements**
- Add **User Authentication**  
- Implement **Task Filtering & Sorting**  
- UI Enhancements  

---

### **📜 License**  
This project is **open-source** under the **MIT License**.

---

### **🧑‍💻 Author**
👤 **Srisanjana Karunamoorthy**  
🔗 GitHub: [srisanjana0711](https://github.com/srisanjana0711)  
🔗 Deployed App: **[Live Demo](https://task-management-tbz6.onrender.com)**  

---

