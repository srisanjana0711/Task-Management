# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the application JAR file into the container
COPY target/todo-app.jar todo-app.jar

# Expose the application port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "todo-app.jar"]
