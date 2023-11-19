# Employee Management Console Application

This console application allows you to manage employee information, including adding, updating, and deleting employees, as well as performing various operations such as filtering, searching, and calculating average salaries. The data is stored in a JSON file.

# Installation
1. Clone the repository to your local machine:
   bash -> `git clone https://github.com/your-username/employee-management-console.git`
   
3. Navigate to the project directory:
   `cd employee-management`
   
3.Install dependencies:
  `npm install`

# Usage
Running the Application

To run the application, use the following command:
`node index.js`

This will start the console application and display the main menu.

# Main Menu Options

   1. Show all Employees: Display a list of all employees.
   2. Add an Employee: Add a new employee to the system.
   3. Update an Employee: Modify details of an existing employee.
   4. Delete an Employee: Remove an employee from the system.
   5. Filter Employees: Display employees based on a specified department.
   6. Search for an Employee: Search for an employee by their full name.
   7. Get Average Salary by Department: Calculate the average salary in a specified department.
   8. Get Average Salary in Company: Calculate the overall average salary in the company.
   9. Exit: Quit the application.

       
# Adding an Employee
When choosing option 2, you will be prompted to enter details for the new employee:

    Full Name
    Age
    Date of Birth
    Salary
    Department

# Updating an Employee
When choosing option 3, you will be prompted to enter the full name of the employee you want to update. Then, you can provide updated information for the selected employee.

# Deleting an Employee
When choosing option 4, you will be prompted to enter the full name of the employee you want to delete.

# Filtering Employees
When choosing option 5, enter the department name to display a list of employees in that department.

# Searching for an Employee
When choosing option 6, enter the full name to search for a specific employee.

# Calculating Average Salaries
Options 7 and 8 allow you to calculate the average salary based on the specified department or for the entire company.

# Data Storage
Employee data is stored in the `data/employees.json` file. This file is automatically created and updated as you add, update, or delete employees.
