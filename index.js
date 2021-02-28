const inquirer = require("inquirer");
const fs = require("fs")

const promptUser = () =>
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

const genReadme = (answers) =>
`# ${answers.title}
!

## Description

${answers.description}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`

${answers.installation}
\`\`\`

## Usage

${use}

## License

This project is licensed under the ${license} license.

## Contributing

${contribute}
`;


        const init = () => {
            promptUser().then((answers) => {
              try {
                const readme = genReadme(answers);
                fs.writeFileSync("README.md", readme);
                console.log('Generating README...');
              } catch (error) {
                console.log(error);
              }
            });
          };
          
          init();