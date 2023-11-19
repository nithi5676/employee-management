const fs = require('fs');
const DEFAULT_ERR_MSG = 'An error occurred.';

function handleError(extMessage) {
  if (process.stdin.isTTY) {
    const errorMessage = new Error(DEFAULT_ERR_MSG + (extMessage ? '\n' + extMessage : ''));
    console.error(errorMessage);
  } else {
    console.error('Error: Interactive input not supported in the current environment.');
    process.exit(1);
  }
}

const FILE_PATH = 'data/employees.json';

function readEmployees() {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    handleError(err.message);
    return [];
  }
}

function writeEmployees(employees) {
  try {
    const data = JSON.stringify(employees, null, 2);
    fs.writeFileSync(FILE_PATH, data, 'utf8');
  } catch (err) {
    handleError(err.message);
  }
}

module.exports = {
  readEmployees,
  writeEmployees,
  handleError, // Exporting the error handling function
};

let employees = readEmployees();

function addEmployee(employee) {
  employees.push(employee);
  writeEmployees(employees);
}

function updateEmployee(updatedEmployee) {
    employees = employees.map(emp =>
        emp.fullName === updatedEmployee.fullName ? updatedEmployee : emp
    );
    writeEmployees(employees);
}

function deleteEmployee(fullName) {
    employees = employees.filter(emp => emp.fullName !== fullName);
    writeEmployees(employees);
}

function getAllEmployees() {
    return employees;
}



function getAverageSalaryByDepartment(department) {
    const departmentEmployees = employees.filter(emp => emp.department === department);
    if (departmentEmployees.length === 0) {
        return 0;
    }
    const totalSalary = departmentEmployees.reduce((sum, emp) => sum + emp.salary, 0);
    return totalSalary / departmentEmployees.length;
}

function getAverageSalaryInCompany() {
    if (employees.length === 0) {
        return 0;
    }
    const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return totalSalary / employees.length;
}

module.exports = {
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getAllEmployees,
    getAverageSalaryByDepartment,
    getAverageSalaryInCompany,
};
