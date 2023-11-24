# Sweet Bee Cakes (CS 6314)

Web Programming Languages FullStack Project

To view more project details and meeting notes, please visit the [Wiki](https://github.com/junaidh1/CS6314/wiki).

## Requirements

For development, you will need Node.js and a package manager, npm, installed on your system.

### Installation

We will need to install `nvm`, which is a Node Version Manager. It allows you to have different Node versions and switch between them easily. It also automatically installs npm for you, too.

-   [Windows (WSL)](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)
-   [Mac/Linux](https://github.com/nvm-sh/nvm)

Make sure you verify Node and npm are correctly installed on your system with the following commands:

```
node --version
npm --version
```

_If you are on Windows and don't have WSL installed, I would recommend doing that, since it will give you a Linux-flavor (ex: Ubuntu) development environment, and it will make developing and collaborating on the project easier (i.e. everyone will use the same terminal commands to setup/run the project). Here are instructions on how to install [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)._

## Project Setup

1. Clone this repo to your system.
2. `cd CS6314`.
3. `npm install`.

## Project Structure

All code is listed in the `src/` folder. Here's an explanation of each folder does inside the `src/` folder:

-   `config/`: This directory holds configuration files for your backend, such as database connection settings, environment variables, and middleware configurations.
    -   Store environment-specific configurations (e.g., database credentials, API keys) in a .env file and use the `dotenv` package to load them into your application.
-   `controllers/`: Each route or resource in your application can have its own controller file. These files contain the logic for handling requests, processing data, and generating responses (*in other words, the implementation of routes go here, to abstract the logic from the `routes/` files*).
-   `public/`: This directory holds static assets like images, icons, scripts, and stylesheets.
-   `routes/`: The client-side and server-side (API) routes for your application reside in this directory. Each route file is responsible for defining the endpoints, mapping them to the appropriate controller functions, and handling request validation and authentication.
-   `views/`: This is where the frontend will reside, using EJS for the template engine.
-   `app.js`: This file is the entry point to our application. It sets up the Express server, establishes database connections, defines middleware configurations, sets up the routes, and launches the application.
-   `util.js`: Helper functions.

## Branching Method

We will adopt a simiplistic branching method to allow some organization, while not restricting development time.

-   `main` branch: This branch is the stable production-ready branch. It should always contain working code that can be deployed.
    -   **YOU SHOULD NEVER COMMIT/PUSH CHANGES TO THE MAIN BRANCH. THE ONLY WAY THIS BRANCH GETS UPDATED IS THROUGH PULL REQUESTS, AS THIS IS THE STABLE, WORKING VERSION OF THE OUR PROJECT. UNTIL OUR APPLICATION IS FULLY FUNCTIONAL, CHANGES WILL NOT BE MADE TO THE MAIN BRANCH.**
    -   There is a pre-commit hook installed in the repo that prevents you from locally committing changes to the `main` branch.
-   `dev` branch: This branch serves as the integration branch for ongoing development. Features and bug fixes are merged into this branch. **MAJORITY OF CODE DEVELOPMENT WILL BE COMING FROM THIS BRANCH**.
    -   `feat` branches: For each feature or task, create a feature branch from `dev`. The branch name should be descriptive, like `feat/frontend/auth` or `feat/backend/cart`. Develop the feature in this branch and submit a pull request (PR) back to the `dev` branch when it's ready for review.
        -   To create a new branch from `dev`, make sure you are in the `dev` branch. If you are not, use the following command: `git checkout dev`
        -   Once you are in the `dev` branch, create a new branch from it, using the following command: `git checkout -b <branch_name>`.
    -   By using `feat` branches, it helps ensure we don't have overlapping commit changes, as everyone will work on different aspects of the project. Even if there are merge conflicts, there are much easier to handle when incoming from 2 seperate branches than dealing merge conflicts in a single branch.

## Run The Project

-   **Development**: `npm run dev`
-   **Deployment**: `npm start`

## Additional Notes

-   Make it a habit to `git pull` everytime you work on the project. This helps bring in new changes constantly to your local repo, and ensures you are not working on something someone else has already implemented.
