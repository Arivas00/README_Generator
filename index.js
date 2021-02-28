const inquirer = require("inquirer");
const fs = require("fs")

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your project's title?",
            name: "title",
        },
        {
            type: "input",
            message: "Give a short description of your project.",
            name: "description",
        },
        {
            type: "list",
            message: "What kind of license should your project have?",
            name: "license",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "installation",
            default: "npm i",
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "usage",
            default: "npm test",
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "use",
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contribute",
        },
    ])
    .then((response) => {
        fs.writeFile("README.md", JSON.stringify(response), (err) =>
        err ? console.error(err) : console.log("Generating README...")
        )
    });