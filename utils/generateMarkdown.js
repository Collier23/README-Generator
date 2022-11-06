// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''
  } else if (license === 'MIT License') {
    return '<img src="https://img.shields.io/badge/licence-MIT-green">'
  } else if (license === 'Apache License 2.0') {
    return '<img src="https://img.shields.io/badge/licence-Apache%20License%202.0-blue">'
  } else if (license === 'Mozilla Public License 2.0') {
    return '<img src="https://img.shields.io/badge/licence-Mozilla%20Public%20License%202.0-orange">' 
  } else {
    return 'Whoops! Something went wrong!'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  } else if (license === 'MIT License') {
    return 'https://spdx.org/licenses/MIT.html'
  } else if (license === 'Apache License 2.0') {
    return 'https://spdx.org/licenses/Apache-2.0.html'
  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://spdx.org/licenses/MPL-2.0.html' 
  } else {
    return 'Whoops! Something went wrong!'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '' 
  } else if (license === 'MIT License') {
    return 'The MIT License allows anyone to make a copy of this software. With all copies or substantial portions of the software they copyright notice shall be included. Ensuring those who created the intellectual property are appropriately acknowledged. Finally these authors are not liable and is provided without warranty. Read the full license with the link above.'
  } else if (license === 'Apache License 2.0') {
    return 'The Apache License 2.0 authors who created the copyright and/or patent/s grant those who wish to use it their license. Those that use this software must adhere to license\'s redistribution causes and may add their own copyright statement to modifications and may provide additional or different license terms and conditions. Trademarks are not granted permission through this license. Finally these authors are not liable and is provided "AS IS". Read the full license with the link above.'
  } else if (license === 'Mozilla Public License 2.0') {
    return 'Notable copyleft Mozilla Public License 2.0 is conditioned on making available source code of licensed files and modifications of those files under the same license. Considered protective or reciprocal with the aim of keeping the source code open and to acknowledge the authors of the code. Finally authors are not liable and is provided on an "as is" basis, without warranty of any kind. Read the full license with the link above.' 
  } else {
    return 'Whoops! Something went wrong!'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Tests

${data.tests}

## License

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
