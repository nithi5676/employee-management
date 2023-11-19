
const readlineSync = require('readline-sync');
const Employee = require('./src/employee');
const EmployeeManager = require('./src/employeeManager');

function displayMenu() {
    console.log('1. Show all Employees');
    console.log('2. Add an Employee');
    console.log('3. Update an Employee');
    console.log('4. Delete an Employee');
    console.log('5. Filter Employees');
    console.log('6. Search for an Employee');
    console.log('7. Get Average Salary by Department');
    console.log('8. Get Average Salary in Company');
    console.log('9. Exit');
}

async function main() {
    let choice;
    do {
        displayMenu();
        choice = readlineSync.question('Enter your choice: ');

        switch (choice) {
            case '1':
                try {
                    const allEmployees = await EmployeeManager.getAllEmployees();
                    console.log(allEmployees);
                } catch (error) {
                    console.error('Error fetching employees:', error.message);
                }
                break;
            case '2':
                addEmployee();
                break;
            case '3':
                updateEmployee();
                break;
            case '4':
                deleteEmployee();
                break;
            case '5':
                filterEmployees();
                break;
            case '6':
                searchEmployee();
                break;
            case '7':
                getAverageSalaryByDepartment();
                break;
            case '8':
                getAverageSalaryInCompany();
                break;
            case '9':
                console.log('Exiting...');
                break;
            default:
                console.log('Invalid choice. Please try again.');
        }
    } while (choice !== '9');
}

function addEmployee() {
    console.log('Enter employee details:');
    const fullName = readlineSync.question('Full Name: ');
    const age = parseInt(readlineSync.question('Age: '));
    const dob = readlineSync.question('Date of Birth: ');
    const salary = parseFloat(readlineSync.question('Salary: '));
    const department = readlineSync.question('Department: ');

    const newEmployee = new Employee(fullName, age, dob, salary, department);
    EmployeeManager.addEmployee(newEmployee);
    console.log('Employee added successfully!');
}

function updateEmployee() {
    const fullNameToUpdate = readlineSync.question('Enter the Full Name of the employee to update: ');
    const employeeToUpdate = EmployeeManager.getAllEmployees().find(emp => emp.fullName === fullNameToUpdate);

    if (employeeToUpdate) {
        console.log('Enter updated employee details:');
        const updatedFullName = readlineSync.question('Full Name: ') || employeeToUpdate.fullName;
        const updatedAge = parseInt(readlineSync.question('Age: ')) || employeeToUpdate.age;
        const updatedDob = readlineSync.question('Date of Birth: ') || employeeToUpdate.dob;
        const updatedSalary = parseFloat(readlineSync.question('Salary: ')) || employeeToUpdate.salary;
        const updatedDepartment = readlineSync.question('Department: ') || employeeToUpdate.department;

        const updatedEmployee = new Employee(updatedFullName, updatedAge, updatedDob, updatedSalary, updatedDepartment);
        EmployeeManager.updateEmployee(updatedEmployee);
        console.log('Employee updated successfully!');
    } else {
        console.log('Employee not found.');
    }
}

function deleteEmployee() {
    const fullNameToDelete = readlineSync.question('Enter the Full Name of the employee to delete: ');
    EmployeeManager.deleteEmployee(fullNameToDelete);
    console.log('Employee deleted successfully!');
}

function filterEmployees() {
    const departmentToFilter = readlineSync.question('Enter the Department to filter: ');
    const filteredEmployees = EmployeeManager.getAllEmployees().filter(emp => emp.department === departmentToFilter);
    console.log(filteredEmployees.length > 0 ? filteredEmployees : 'No employees found in the specified department.');
}

function searchEmployee() {
    const fullNameToSearch = readlineSync.question('Enter the Full Name of the employee to search: ');
    const foundEmployee = EmployeeManager.getAllEmployees().find(emp => emp.fullName === fullNameToSearch);
    console.log(foundEmployee ? foundEmployee : 'Employee not found.');
}

function getAverageSalaryByDepartment() {
    const departmentForAverage = readlineSync.question('Enter the Department to calculate average salary: ');
    const averageSalary = EmployeeManager.getAverageSalaryByDepartment(departmentForAverage);
    console.log(averageSalary ? `Average Salary in ${departmentForAverage}: ${averageSalary.toFixed(2)}` : 'No employees found in the specified department.');
}

function getAverageSalaryInCompany() {
    const averageSalary = EmployeeManager.getAverageSalaryInCompany();
    console.log(averageSalary ? `Average Salary in the Company: ${averageSalary.toFixed(2)}` : 'No employees found.');
}

main();


