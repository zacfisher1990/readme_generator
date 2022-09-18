
function renderLicenseBadge(license) {
  if (!license) {
    return ``; 
  } else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'GNU GPL v3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
}

function renderLicenseLink(license) {
  if (!license) {
    return ``;
  } else if (license === 'ISC') {
    return `https://choosealicense.com/licenses/isc/`
  } else if (license === 'MIT') {
    return `https://choosealicense.com/licenses/mit/`
  } else if (license === 'GNU GPL v3') {
    return `https://choosealicense.com/licenses/gpl-3.0/`
  }
}


function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `This project is under the ${license} license.`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Content
   - [Project Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [Questions](#questions)
  
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
 

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions

  If you have questions about this project contact me at ${data.email}. My GitHub is at http://github.com/users/${data.username}

`;

}

module.exports = generateMarkdown;

