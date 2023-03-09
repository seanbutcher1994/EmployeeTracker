const inquirer = require("inquirer");
const {getDepartment, createDepartment} = require("./utils/department");
const { getRoles, createRoles } = require("./utils/roles");

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
        },
        {
            message: 'what is the roles title',
            name: 'role_title',
            type: 'input',
            when: function (ans){
                return ans.operation === 'create a role';
            }
        },
        {
            messahe: 'what is the roles salary',
            name: 'role_salary',
            type: 'input',
            when: function (ans){
                return ans.role_title;
            }
        }
    ]).then(async (res) => {

        if(res.operation === 'view all departments'){
           const departments = await getDepartment();
           console.table(departments);
        } else if (res.operation === 'create a department'){
            await createDepartment(res.department_name)
        } else if (res.operation === 'view all roles'){

        } else if (res.operation === 'create a role'){
            await createRoles(res.role_title, res.role_salary)


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