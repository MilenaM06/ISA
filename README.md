# ISA Project – Team 35

As part of the course Internet Software Architectures, we implemented a web application that serves as a centralized information system for companies supplying medical equipment. Through this system, private hospitals can reserve and collect medical equipment. The main purpose of the application is to manage records of employees, registered companies, equipment reservations, and pickup schedules.

## Medical Equipment Reservation Application – Setup Guide

This guide explains how to run the medical equipment reservation project on your machine. The project consists of a Spring Boot backend, an Angular frontend, and two external Python scripts for simulating locations and contracts. It uses PostgreSQL as the database and RabbitMQ for inter-application communication.

### Required Tools

1. **IntelliJ IDEA (Backend)**

   - Download and install IntelliJ IDEA Community Edition: https://www.jetbrains.com/idea/download.

2. **Visual Studio Code (Frontend)**

   - Download and install Visual Studio Code: https://code.visualstudio.com/download.

3. **Node.js and npm (Frontend)**

   - Download and install the LTS version of Node.js: https://nodejs.org/.

4. **Angular CLI (Frontend)**

   - Open a terminal and run: `npm install -g @angular/cli`.

5. **PostgreSQL (Database)**

   - Download and install PostgreSQL: https://www.postgresql.org/download/.
   - Create a database named isa. It will run locally on the default port 5432.

6. **RabbitMQ (Message Broker)**

   - Download and install RabbitMQ: https://www.rabbitmq.com/download.html.
   - Install Erlang first, then start RabbitMQ (management UI - http://localhost:15672/ and default port - 5672).

7. **Python (Location and Contract Simulation)**

   - Download and install Python 3.x: https://www.python.org/downloads/.

## Running the Application

### Backend (Spring Boot)

1. Open IntelliJ IDEA and import the project.
2. In application.properties, configure PostgreSQL database credentials.
3. Run the Application class in src/main/java.

### Frontend (Angular)

1. Open the med-equip-system-front folder in Visual Studio Code.
2. Open a terminal and run: `npm install`.
3. Then run: `ng serve`.
4. The application will be available at: http://localhost:4200/.

### Python Scripts (Location and Contract Simulation)

1. Navigate to the folders med-equip-system-contract-sim and med-equip-system-location-simulator.
2. Install dependencies: `pip install -r requirements.txt`.
3. Run the simulation scripts: `python main.py`.
