// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'} 
  else if (license === 'APACHE 2.0'){return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'} 
  else if (license === 'GPL 3.0'){return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0'} 
  else if (license === 'BSD 3'){return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause'} 
  
  return '';
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){return 'https://opensource.org/licenses/MIT'} 
  else if (license === 'APACHE 2.0'){return 'https://opensource.org/licenses/Apache-2.0'} 
  else if (license === 'GPL 3.0'){return 'https://www.gnu.org/licenses/gpl-3.0'} 
  else if (license === 'BSD 3'){return 'https://opensource.org/licenses/BSD-3-Clause'} 
  
  return '';
}

// Work on getting the technologies and thier links here to be generated for each one selected

// Later add a way to enter ones manually in the app

module.exports = {renderLicenseBadge, renderLicenseLink};
