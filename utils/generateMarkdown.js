// TODO: Create a function that returns a license badge based on which license is passed in
// If none is selected for license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'None':
      return '';
    case 'MIT':
      return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'APACHE 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/license/gpl-3.0)';
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';       
  }
}

//add license to table of contents, if none selected return empty string
function tableOfContentLicense(license) {
    return license !== 'None' ? `\n > * [License](#license)\n` : "";
  }

// function tableOfContentLicense(license) {
//   return license ? ` * [License](#license)\n` : "";
// }

// function tableOfContentLicense(license) {
//   if (license !== 'None') {
//     return "";
//   } else {
//     return license ? `> * [License](#license)` : "";
//   }
// }

// TODO: Create a function that returns the license link
// if license is none, return and empty string
function renderLicenseLink(license) {
  switch (license) {
      case 'None':
          return '';
      case 'MIT':
          return "https://opensource.org/licenses/MIT";
      case 'APACHE 2.0':
          return "https://opensource.org/licenses/Apache-2.0";
      case 'GPL 3.0':
          return "https://www.gnu.org/licenses/gpl-3.0";
      case 'BSD 3':
          return "https://opensource.org/licenses/BSD-3-Clause";
      default:
          return '';    
  }
}
// TODO: Create a function that returns the license section of README
// return an empty string if there none is selected for license
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License ~
Application License Badge is below, click on License Badge or link to navigate to License webpage.  
${renderLicenseBadge(license)}

${renderLicenseLink(license)}`
  }
  return '';
}

// TODO: Create a function to generate markdown for proREADME
//Titles and bullet points for proREADME
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description ~
  ${data.description}

  ## Screenshot ~
  
  ![screenshot](**(APP/SITE:)**)

  ## Table of Contents ~

  > * [Installation](#installation)

  > * [Usage](#usage)
  
  ${tableOfContentLicense(data.license)}


  > * [Contributing](#contributing)

  > * [Test](#test)

  > * [Questions](#questions)

 ## Installation ~
  ${data.installation}

 ## Usage ~
  ${data.usage}


  ${renderLicenseSection(data.license)}


 ## Contributing ~
  ${data.contributing}

 ## Test ~
  ${data.test}

 ## Questions ~

  If you have any additional questions, concerns, or would like to view more of my work, my email and GitHub is below:

  Email:
  ${data.email}

  GitHub:
  [https://github.com/${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
