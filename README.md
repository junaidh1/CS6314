# CS6314
Web Programming Languages FullStack Project

To view more project details and meeting notes, please visit the [Wiki](https://github.com/junaidh1/CS6314/wiki).


## Requirements

For development, you will need Node.js and a package manager, npm, installed on your system.

### Installation

We will need to install `nvm`, which is a Node Version Manager. It allows you to have different Node versions and switch between them easily. It also automatically installs npm for you, too.

- [Windows (WSL)](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Mac/Linux](https://github.com/nvm-sh/nvm)

Make sure you verify Node and npm are correctly installed on your system with the following commands:

```
node --version
npm --version
```

*If you are on Windows and don't have WSL installed, I would recommend doing that, since it will give you a Linux-flavor (ex: Ubuntu) development environment, and it will make developing and collaborating on the project easier (i.e. everyone will use the same terminal commands to setup/run the project). Here are instructions on how to install [WSL](https://learn.microsoft.com/en-us/windows/wsl/install).*


## Project Setup

After cloning this project to your filesystem, you need to install the pre-existing dependencies located in the `package.json` files. There are a total of 3 of them: `project folder, frontend folder, and backend folder`. Project folder packages apply to the entire project (*any packages frontend and backend will use*), while frontend and backend have their own package files, so that we don't mix the dependencies between each other.

To install a single `package.json` file's packages, make sure you are in the folder it is located in, and type:

`npm install`


## Project Structure

The project is split into two main folders: `frontend` and `backend`. Here's an explanation of each folder:

- `frontend/`
    - `public/`: This directory holds static assets like HTML files, images, and fonts. The entry point, usually `index.html`, resides here.
    - `src/`: This directory contains the main source code for your frontend application (CSS and JS files).
- `backend/`
    - `config/`: This directory holds configuration files for your backend, such as database connection settings, environment variables, and middleware configurations.
        - Store environment-specific configurations (e.g., database credentials, API keys) in a .env file and use the `dotenv` package to load them into your application.
    - `controllers/`: Each route or resource in your application can have its own controller file. These files contain the logic for handling requests, processing data, and generating responses.
    - `models/`: This directory contains the database models or schemas for your application. Each model represents a specific data structure and handles interactions with the database.
    - `routes/`: The API routes for your application reside in this directory. Each route file is responsible for defining the endpoints, mapping them to the appropriate controller functions, and handling request validation and authentication.
    - `server.js`: This file acts as the entry point for your backend application. It sets up the Express server, establishes database connections, and defines middleware configurations.


## Branching Method

We will adopt a simiplistic branching method to allow some organization, while not restricting development time.

- `main` branch: This branch is the stable production-ready branch. It should always contain working code that can be deployed.
- `dev` branch: Create a develop branch that serves as the integration branch for ongoing development. Features and bug fixes are merged into this branch.
    - `feat` branches: For each feature or task, create a feature branch from `dev`. The branch name should be descriptive, like `feat/user-signup` or `feat/cart-functionality`. Develop the feature in this branch and submit a pull request (PR) back to the `dev` branch when it's ready for review.
    - `bugfix` branches: Similar to feature branches, create branches for bug fixes from `dev`. Use branch names like `bugfix/login-issue`.


## Run The Project

Make sure you are in the project folder.

- To run the frontend code only: `npm run client`
- To run the backend code only: `npm run server`
- To run both: `npm start`
