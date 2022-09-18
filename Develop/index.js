// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fileName = "README.md";


var questions = [
        {
            type: "input",
            message: "Enter project title:",
            name: "title"
        },
        {
            type: "input",
            message: "Enter project description:",
            name: "description"
        },
        {
            type: "input",
            message: "Enter installation instructions:",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter usage information:",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter contribution guidelines:",
            name: "contributing"
        },
        {
            type: "input",
            message: "Enter test instructions:",
            name: "test"
        },
        {
            type: "list",
            message: "Enter type of license: ",
            name: "license",
            choices: ['MIT', 'ISC', 'GNU'],

        },
        {
            type: "input",
            message: "Enter GitHub username:",
            name: "username"
        },
        {
            type: "input",
            message: "Enter email address:",
            name: "email"
        },

];


function writeToFile(fileName, data) {
    const markDown = generateMarkdown(data);
    fs.writeFile(fileName, markDown, function (err) {
        if (err) throw err;
        console.log("Success");
    })
}



// TODO: Create a function to initialize app
function init () {
      inquirer.prompt(questions)
      .then(function(data) {writeToFile(fileName, data)})
    } 


init();

