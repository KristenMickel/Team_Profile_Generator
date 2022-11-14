const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./src/profile-generator.js');
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office number');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select the option you would like to continue with:',
            choices: ['Add engineer', 'Add intern', 'Build my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Add engineer":
                    promptEngineer();
                    break;
                case "Add intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`
    =============
    Add Engineer
    =============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of your engineer',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of your engineer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the employee ID of your engineer',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID of your engineer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address of your engineer',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the email address of your engineer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'Enter the Github username of your engineer',
            validate: githubUser => {
                if (githubUser) {
                    return true;
                } else {
                    console.log('Please enter the Github username of your engineer');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUser);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    ===========
    Add Intern
    ===========
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of your intern',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the name of your intern');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the employee ID of your intern',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID of your intern');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address of your intern',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the email address of your intern');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the school name that your intern is attending',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter the school name that your intern is attending');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    ==============
    Build my team
    ==============
    `);

    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

promptManager();