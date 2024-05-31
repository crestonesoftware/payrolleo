// GLOBAL DATA
let employees = new Array();

// Get references to button elements
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const resetEmployeesBtn = document.querySelector('#reset-employees-btn');

/* ****************************************************************** */
/*  displayAverageSalary()                                            */
/*                                                                    */
/*  Displays the average salary of employees in employeesArray, rounded
/*    to the nearest unit Uses simple sum-and-divide algorithm to 
/*    calculate the average                                           */
const displayAverageSalary = function(employeesArray) {  
  let sum = 0;
  for (const employee of employeesArray) {
    //?console.log(`salary for ${employee.firstName} is ${employee.salary}`);
    sum += employee.salary;
    //?console.log(`adding salary ${employee.salary}. Total is ${sum}`);
  }
  const averageSalary = Math.round(sum/employeesArray.length);
  console.log(`The average employee salary between our ${employeesArray.length} employees is
  ${averageSalary}`);
}

/* ****************************************************************** */
/*  getRandomEmployee()                                               */
/*                                                                    */
/*  selects an employee, from the global employees Array, by using a  */
/*  random number to compute an index for the Array                   */
const getRandomEmployee = function(employeesArray) {
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  const selectedEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${selectedEmployee.firstName} ${selectedEmployee.lastName}, our randomly selected employee. Woohoo!`);
  console.log(`${selectedEmployee.firstName}, our evil director of HR has selected you, but isn't revealing what you've been selected for. BWA-HAH-HAH-HAHAAAH!`)
}

/* ****************************************************************** */
/*  displaySeparatorLine()                                            */
/*                                                                    */
/*  log a line of '=' as a visual separator in the console            */
const displaySeparatorLine = function() {
  console.log("===============================");
}

/* ****************************************************************** */
/*  collectEmployees()                                                */
/*                                                                    */
/*  populate the global employees Array with data from the user       */
const collectEmployees = function() {
let continueAddingEmployees = true;
  while(continueAddingEmployees) {
    const newEmployee = {
      firstName: prompt("Employee's First Name"),
      lastName: prompt("Employee's Last Name"),
      salary: Number(prompt("Employee's Salary"))
    }
    employees.push(newEmployee);
    continueAddingEmployees = confirm("Continue adding Employees, or Cancel?");
  }
  return employees;
}

/* ****************************************************************** */
/*  resetEmployeeData()                                               */
/*                                                                    */
/*  clears the global array of employees then starts data entry       */
const resetEmployeeData = function() {
  employees = new Array();
  trackEmployeeData();
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

// Add event listener to buttons
addEmployeesBtn.addEventListener('click', trackEmployeeData);
resetEmployeesBtn.addEventListener('click', resetEmployeeData);