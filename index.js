const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/templateHTML');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team manager name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter manager email:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter office number:'
        }
    ])
    .then (managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager)
    })
}

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Choose employee role:',
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter employee\'s GitHub username:',
            when: (input) => input.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern\'s school',
            when: (input) => input.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you have more team members?',
            default: false
        }
    ])
    .then (employeeData => {
        const { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;
        
        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
        }
        console.log(employee);
        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team Profile Created!");
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generatePage(teamArray);
    })
    .then(page => {
        return writeFile(page);
    })
    .catch(err => {
        console.log(err);
    });