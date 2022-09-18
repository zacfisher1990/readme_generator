// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  return `![Github licence](http://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Content
   - [project description](#Description)
   - [installation](#installation)
   - [Usage](#Usage)
   - [License](#license)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [Questions](#questions)
  
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions

  If you have questions about this project contact me at ${data.email}.

`;

}

module.exports = generateMarkdown;

