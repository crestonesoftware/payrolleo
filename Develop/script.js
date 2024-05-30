const employeeData = new Array();

// Displays the average salary of employees in employeesArray, rounded to the nearest unit
// Uses simple sum-and-divide algorithm to calculate the average
const displayAverageSalary = function(employeesArray) {  
  let sum = 0;
  for (const employee of employeesArray) {
    sum += employee.salary;
    // console.log(`adding salary ${employee.salary}. Total is ${sum}`);
  }
  const averageSalary = Math.round(sum/employeesArray.length);
  console.log(`The average employee salary between our ${employeesArray.length} employees is
  ${averageSalary}`);
}

// selects an employee, from employeesArray, by using a random number to 
// compute an index for employeesArray
const getRandomEmployee = function(employeesArray) {
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  const selectedEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${selectedEmployee.firstName} ${selectedEmployee.lastName}, our randomly selected employee. Woohoo!`);
  console.log(`${selectedEmployee.firstName}, our evil director of HR has selected you, but isn't revealing what you've been selected for. BWA-HAH-HAH-HAHAAAH!`)
}

const displaySeparatorLine = function() {
  console.log("===============================");
}

// Test data - delete this section when no longer needed
const employeeMing = {
  firstName: "Lety",
  lastName: "Ramirez",
  salary: 145000
}

const employeeBob = {
  firstName: "Bob",
  lastName: "Skrewt",
  salary: 125000
}

const employeeSammy = {
  firstName: "Sammy",
  lastName: "The Penguin",
  salary: 155702
}

function initTestData() {
  employeeData.push(employeeSammy);
  employeeData.push(employeeMing);
  employeeData.push(employeeBob);
}

/* *************** */
// Start real code
// Select a random employee

function main() {
  initTestData();
  displayAverageSalary(employeeData);
  displaySeparatorLine();
  getRandomEmployee(employeeData);
}

main();
// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
}





/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);




