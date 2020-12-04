const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const engineeringTeam = [];

const memberQuestions = () =>
    inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name of the employee?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee\'s id?',
    },
    {
      type: 'input',
      name: 'contact',
      message: 'Employee\'s email address?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Employee\'s role on team?',
      },
    
  ])
  .then((info) => {
      
  };
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

//There are also unit tests to help you build the classes necessary.

// It is recommended that you follow this workflow:

// 1. Run tests
// 2. Create or update classes to pass a single test case
// 3. Repeat

// 🎗 Remember, you can run the tests at any time with `npm run test`

// It is recommended that you start with a directory structure that looks like this:

// ```
// lib/           // classes and helper code
// output/        // rendered output
// templates/     // HTML template(s)
// test/          // jest tests
//   Employee.test.js
//   Engineer.test.js
//   Intern.test.js
//   Manager.test.js
// app.js         // Runs the application