# Project Name

This project contains code snippets for various functionalities related to user and merchant management.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Description

This project includes code snippets for user and merchant management functionalities, such as registration, login, logout, and retrieving user and merchant details. It utilizes technologies like Express.js, MongoDB, and JWT for authentication.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`

## Usage

1. Set up the required environment variables by creating a `.env` file and providing necessary values.
2. Run the application: `npm start`
3. The server will start running on the specified port, and you can access the routes as described in the next section.

## Routes

The following routes are available in this project:

- `/api/v1/register` (POST): Register a new merchant.
- `/api/v1/merchant` (GET): Get merchant details.
- `/api/v1/signup` (POST): Register a new user.
- `/api/v1/login` (POST): User login.
- `/api/v1/logout` (GET): User logout.
- `/api/v1/me` (GET): Get user details.

## Dependencies

This project has the following dependencies:

- express
- mongoose
- bcrypt
- jsonwebtoken
- cors
- cookie-parser

You can install the dependencies by running `npm install`.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
