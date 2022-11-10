const inquirer = require("inquirer");
const {getDepartment, createDepartment} = require("./utils/department");

function askQuestion(){

   return inquirer.prompt([
        {
            message: 'What would you like to do?',
            name: 'operation',
            type: 'list',
            choices: [
                'view all departments',
                'create a department',
                'view all roles',
                'create a role',
                'view all employees',
                'add an employee',
                'update an employee role',
                'exit'
            ]
        },
        {
            message: 'what is the department?',
            name: 'department_name',
            type: 'input',
            when: function (ans){
                return ans.operation === 'create a department';
            }
        }
    ]).then( async (res) => {

        if(res.operation === 'view all departments'){
           await getDepartments()
        } else if (res.operation === 'create a department'){
            await createDepartment(res.department_name)
        } else if (res.operation === 'view all roles'){

        } else if (res.operation === 'create a role'){

        } else if (res.operation === 'view all employees'){

        } else if (res.operation === 'add an employee') {

        } else if (res.operation === 'update an employee role'){

        } else if (res.operation === 'exit'){
            console.log('done!');
            process.exit(0);
        } else {
            throw new Error('Something went wrong!')
        }

        return askQuestion()
    })
};

askQuestion();
// View All departments

// Create a department

// View All roles

// View all employees

// Add a role

// Add an employee

// update an employee role

// exit function