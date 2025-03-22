# Use an official OpenJDK runtime as a parent image
#FROM openjdk:17-jdk-slim

# Set the working directory inside the container
#WORKDIR /app

# Copy the application JAR file into the container
#COPY target/todo-app.jar todo-app.jar

# Expose the application port
#EXPOSE 10000
# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the application JAR file into the container
COPY target/todo-app.jar app.jar

# Expose the application port (Render assigns a dynamic port)
EXPOSE 10000

# Run the application with the correct port
CMD ["java", "-jar", "app.jar", "--server.port=10000"]
