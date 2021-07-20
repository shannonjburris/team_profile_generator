//require classes
const Manager       = require("./lib/Manager");
const Engineer      = require("./lib/Engineer");
const Intern        = require("./lib/Intern");
//require our packages
const inquirer      = require('inquirer');
const fs            = require('fs');
let team            = [];



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
            team.push(
                    {
                     'title': info.title,
                     'name': info.name,
                     'id': info.id,
                     'email': info.email,
                     'officeNumber': officeNumber.officeNumber
                }
            )
            addEmployee();
            //pass employee information to html
        })
    }

    createEngineer = (info) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is their GitHub?'
            }
        ]).then((github) => {
            team.push(
                {
                    'title': info.title,
                    'name': info.name,
                    'id': info.id,
                    'email': info.email,
                    'gitHub': gitHub.gitHub
               }
            )
            addEmployee();
            //pass employee information to html
        })
    }

    createIntern = (info) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What school do they attend?'
            }
        ]).then((school) => {
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
                console.log(team);
                const htmlPageContent = generateHTML(team);
                fs.writeFile('index.html', htmlPageContent, (err) =>
                      err ? console.log(err) : console.log('Successfully created index.html!')
                    );
            }
        })
    }

    generateHTML = (team) => {
        for (let index = 0; index < team.length; index++) {
            if (team[index].title === 'Manager') {
                //html markup for manager card
            }
            
        }
    }

    init();