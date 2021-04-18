// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0 License': return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'The MIT License': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Open Database License (ODbL)': return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]';
    case 'WTFPL': return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
    default: return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  switch (license) {
    case 'Apache 2.0 License': return 'https://opensource.org/licenses/Apache-2.0';
    case 'The MIT License': return 'https://opensource.org/licenses/MIT';
    case 'Open Database License (ODbL)': return 'https://opendatacommons.org/licenses/odbl/';
    case 'WTFPL': return 'http://www.wtfpl.net/about/';
    default: return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
