# Full-Stack-MERN

## Overview

The **Full-Stack MERN Project** is a web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a comprehensive solution for creating, managing, and displaying exercises, demonstrating the capabilities of a modern web application.

## Features

- Track Exercises
- Manage Exercise Details
- View and Edit Exercise Entries
- Responsive UI and RESTful API

## Installation

### Prerequisites

- Node.js
- npm
- MongoDB

### Steps

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```bash
    cd Full-Stack-MERN-main
    ```

3. Install backend dependencies:
    ```bash
    cd exercise-rest
    npm install
    ```

4. Install frontend dependencies:
    ```bash
    cd ../exercise-ui
    npm install
    ```

## Usage

1. Start the backend server:
    ```bash
    cd exercise-rest
    npm start
    ```

2. Start the frontend server:
    ```bash
    cd ../exercise-ui
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

### Exercises

- **GET** `/api/exercises`: Get all exercises
- **POST** `/api/exercises`: Add a new exercise
- **GET** `/api/exercises/:id`: Get a specific exercise by ID
- **PUT** `/api/exercises/:id`: Update a specific exercise by ID
- **DELETE** `/api/exercises/:id`: Delete a specific exercise by ID

## Database Schema

### Exercises
  - `exerciseID`: int, auto_increment, unique, PK
  - `name`: varchar, not NULL
  - `description`: text, not NULL
  - `duration`: int, not NULL
  - `date`: date, not NULL

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Postman for API testing, npm for package management

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries, please contact:
- [Matthew Paccione](mailto:matthew.j.paccione@gmail.com)
