// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeString = '';
    
  license.forEach(license => {
      switch (license) {
          case 'MIT':
              badgeString += '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n';
              break;
          case 'APACHE 2.0':
              badgeString += '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n';
              break;
          case 'GPL 3.0':
              badgeString += '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n';
              break;
          case 'BSD 3':
              badgeString += '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n';
              break;
      }
  });
  
  return badgeString;
}

const license = ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'];
const licenseBadge = renderLicenseBadge(license);
console.log(licenseBadge);

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return license !== 'None' ? `\n* [License](#license)\n` : '';
}

switch (license) {
  case 'MIT':
      return "https://opensource.org/licenses/MIT";
  case 'APACHE 2.0':
      return "https://opensource.org/licenses/Apache-2.0";
  case 'GPL 3.0':
      return "https://www.gnu.org/licenses/gpl-3.0";
  case 'BSD 3':
      return "https://opensource.org/licenses/BSD-3-Clause";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

Application will use ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 
  [Installation](#installation)

  [Usage](#usage)
  ${renderLicenseLink(data.license)}
  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions

  If you have any additional questions, concerns, or would like to view more of my work, my email and GitHub is below:

  Email:
  ${date.email}

  GH:
  [https://github.com/${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
