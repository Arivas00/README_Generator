const inquirer = require("inquirer");
const fs = require("fs")

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your title?",
            name: "title",
        },
        {
            type: "input",
            message: "Give a description.",
            name: "description",
        },
        {
            type: "input",
            message: "How is it installed",
            name: "installation",
        },
        {
            type: "input",
            message: ""
        }
    ])
    .then((response) => {
        fs.writeFile("README.md", JSON.stringify(response), (err) =>
        err ? console.error(err) : console.log("Success!")
        )
    });