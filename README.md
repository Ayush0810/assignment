# Project Name

This project consists of both frontend and backend code for user with merchant management.

## Table of Contents

- [Description](#description)
- [frontendui](#UI_Images)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Routes](#backend-routes)
- [Frontend Routes](#frontend-routes)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Description

This project includes both frontend and backend code snippets for managing user and merchant functionalities. The frontend is built using React.js and the backend is developed using Express.js ,Node.js and MongoDB. The frontend communicates with the backend through RESTful API endpoints.

## UI_Images

![mobile (2)](https://github.com/Ayush0810/assignment/assets/123540324/2ceb9a01-eb82-40fa-8e7f-54d79b216732)
![mobile (4)](https://github.com/Ayush0810/assignment/assets/123540324/e19dd3ef-e05b-4009-b53e-d1e857fdc984)
![mobile (5)](https://github.com/Ayush0810/assignment/assets/123540324/2ec368df-610f-4d42-8af1-292b1f298762)


The UI is completely responsive and user-friendly

## Installation

### Backend

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the backend directory: `cd <project-directory>/backend`
3. Install the dependencies: `npm install`

### Frontend

1. Navigate to the frontend directory: `cd <project-directory>/frontend`
2. Install the dependencies: `npm install`

## Usage

### Backend

1. Set up the required environment variables by creating a `.env` file in the backend directory and providing necessary values.
2. Run the backend server: `npm start`

### Frontend

1. Run the frontend development server: `npm start`
2. The frontend application will open in your default browser.

## Backend Routes

The following backend routes are available in this project:

- `/api/v1/register` (POST): Register a new merchant.
- `/api/v1/merchant` (GET): Get merchant details.
- `/api/v1/signup` (POST): Register a new user.
- `/api/v1/login` (POST): User login.
- `/api/v1/logout` (GET): User logout.
- `/api/v1/me` (GET): Get user details.

## Frontend Routes

The frontend application includes the following routes:

- `/register`: Register a new merchant.
- `/merchant`: View merchant details.
- `/signup`: Register a new user.
- `/login`: User login.
- `/logout`: User logout.
- `/me`: View user details.

## Dependencies

### Backend

The backend has the following dependencies:

- express
- mongoose
- bcrypt
- jsonwebtoken
- cors
- cookie-parser

You can install the dependencies by running `npm install` in the backend directory.

### Frontend

The frontend has the following dependencies:

- react
- react-dom
- react-router-dom
- react-hot-toast

You can install the dependencies by running `npm install` in the frontend directory.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). 
