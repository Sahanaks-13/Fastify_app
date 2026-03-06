# Fastify Application
This project is a RESTful API built using Fastify and PostgreSQL.  
It supports user management with CRUD operations and JWT-based authentication.

The application is fully containerized using Docker and includes PostgreSQL as a service.

## Project Structure

fastify-app
│
|-- app.js
|-- Dockerfile
|-- docker-compose.yml
|--.env
|-- plugins
│   |-- db.js
|-- routes
│   |-- router.js
|-- controllers
│   |-- controller.js
|-- services
│   |-- service.js
|-- middleware
│   |-- authenticate.js

## Running with Docker

Build and start containers:

docker compose up --build

The application will run on:

http://localhost:3000