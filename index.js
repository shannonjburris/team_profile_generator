//require classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./lib/htmlTemplate");
//require our packages
const inquirer = require('inquirer');
const fs = require('fs');
let team = [];



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

createManager = (info) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their office number?'
        }
    ]).then((officeNumber) => {
        const manager = new Manager(info.name, info.id, info.email, officeNumber.officeNumber);
        team.push(manager);
        addEmployee();
        //pass employee information to html
    })
}

createEngineer = (info) => {
    // create constructor
    inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub?'
        }
    ]).then((github) => {
        const engineer = new Engineer(info.name, info.id, info.email, github.github);
        team.push(engineer);
        addEmployee();
        //pass employee information to html
    })
}

createIntern = (info) => {// create constructor
    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?'
        }
    ]).then((school) => {
        const intern = new Intern(info.name, info.id, info.email, school.school);
        team.push(intern);
        addEmployee();
        //pass employee information to html
    })
}

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
        else {
            // console.log(team);
            const htmlPageContent = generateHTML(team);
            fs.writeFile('index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
            );
        }
    });
}

init();