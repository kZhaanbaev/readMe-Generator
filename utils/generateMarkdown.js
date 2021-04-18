// function returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0 License': return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'The MIT License': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Open Database License (ODbL)': return '![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)';
    case 'WTFPL': return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
    default: return '';
  }
}

//Not used at this moment, might be referenced in future
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0 License': return 'https://opensource.org/licenses/Apache-2.0';
    case 'The MIT License': return 'https://opensource.org/licenses/MIT';
    case 'Open Database License (ODbL)': return 'https://opendatacommons.org/licenses/odbl/';
    case 'WTFPL': return 'http://www.wtfpl.net/about/';
    default: return '';
  }
}

//Generates a String
const generateFileContent = function (answers, licenseBadge, addMainScreenshot, addTestScreenshot) {

  return `# ${answers.title}
  ${licenseBadge}
  <br />
  ## Table of Contents:
  <hr />

  * Description
  * Installation instructions
  * Usage
  * Contributors
  * Tests
  * License
  * Questions

  <br /><br />
  ${addMainScreenshot}
  <br /><br />
  ## Description
  <hr />

  ${answers.description}
  <br /><br />
  ## Installation instructions
  <hr />

  ${answers.installation}
  <br /><br />
  ## Usage
  <hr />

  ${answers.usage}
  <br /><br />
  ## Contributors
  <hr />

  ${answers.contributors}
  <br /><br />
  ## Tests
  <hr />

  ${answers.tests}
  <br />
  ${addTestScreenshot}
  <br /><br />
  ## License
  <hr />

  Copyright (c) Kuba Z Production. All rights reserved.
	Licensed under the ${answers.license}.
  <br /><br />
  ## Questions
  <hr />

  If any questions dont hesitate to reach out. <br />
  Github username: ${answers.gitHubUsername} <br />
  email: ${answers.email}
`};

// Function generates markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const addMainScreenshot = answers.addMainScreenshot ? '![image of application](./utils/image/mainScreenshot.png)' : '';
  const addTestScreenshot = answers.addTestScreenshot ? '![image of application](./utils/image/testScreenshot.png)' : '';

  return generateFileContent(answers, licenseBadge, addMainScreenshot, addTestScreenshot);
}

module.exports = generateMarkdown;
