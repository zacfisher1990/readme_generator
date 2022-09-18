// TODO: Include packages needed for this application

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
var questions = [
        {
            type: "input",
            message: "Enter project title:",
            name: "title"
        },
        {
            message: "Enter project description:",
            name: "description"
        },
        {
            message: "Enter installation instructions:",
            name: "installation"
        },
        {
            message: "Enter usage information:",
            name: "information"
        },
        {
            message: "Enter contribution guidelines:",
            name: "guidelines"
        },
        {
            message: "Enter test instructions:",
            name: "test"
        },
        {
            message: "Enter type of license",
            name: "license",
            choices: ['MIT'],

        },
        {
            message: "Enter GitHub username:",
            name: "username"
        },
        {
            message: "Enter email address:",
            name: "email"
        },

];

// questions =[{}]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        fs.writeFile("ReadMe.md", JSON.stringify(inquirerResponse, data), (err) => 
        err ? console.log(err) : console.log("Success"));
    })
}

// TODO: Create a function to initialize app
function init () {
    writeToFile();
}

init();

