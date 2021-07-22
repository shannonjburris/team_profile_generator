//require classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/htmlTemplate");
//require our packages
const inquirer = require('inquirer');
const fs = require('fs');
// empty array to push emplyees to
let team = [];


// function that holds questions 
init = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'title',
                message: 'What is the title of the employee?',
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is their name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?'
            }
            // create emplyee depending on what they answered on the first question
        ]).then((answers) => {
            switch (answers.title) {
                case 'Manager':
                    createManager(answers);
                    break;
                case 'Engineer':
                    createEngineer(answers);
                    break;
                case 'Intern':
                    createIntern(answers);
                    break;
                default:
                    break;
            }
        });
}

// create manager with info passed in
createManager = (info) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their office number?'
        }
        // create object "manager" based on user input
    ]).then((officeNumber) => {
        const manager = new Manager(info.name, info.id, info.email, officeNumber.officeNumber);
        team.push(manager);
        addEmployee();
    })
}

// create engineer with info passed in
createEngineer = (info) => {
    
    inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub?'
        }
        // create object "engineer" based on user input
    ]).then((github) => {
        const engineer = new Engineer(info.name, info.id, info.email, github.github);
        team.push(engineer);
        addEmployee();

    })
}

// create intern with info passed in
createIntern = (info) => {// create constructor
    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?'
        }
        // create object "intern" based on user input
    ]).then((school) => {
        const intern = new Intern(info.name, info.id, info.email, school.school);
        team.push(intern);
        addEmployee();
        //pass employee information to html
    })
}

// if they want to add another run the init function again
addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No']
        }
    ]).then((answer) => {
        console.log(answer.addEmployee);
        if (answer.addEmployee === "Yes") {
            init();
        }
// if they dont add any other employees then write from team array
        else {
            const htmlPageContent = generateHTML(team);
            fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
            );
        }
    });
}

init();