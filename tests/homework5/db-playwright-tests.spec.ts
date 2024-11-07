import { test, expect } from '@playwright/test';
import { queryDatabase, getPropertyListFromResult } from './db-connection';


test.describe('DB Tests', () => {

  test('Check if employee with ID 100 exists', async () => {
    const query = 'SELECT * FROM employees WHERE employee_id = 100';
    const result = await queryDatabase(query);
    
    expect(result.length).toBeGreaterThan(0); 
    const employee = result[0];
    expect(employee.employee_id).toBe(100);
  });


  test('Retrieve list of employee first names', async () => {
    const query = 'SELECT first_name FROM employees';
    const result = await queryDatabase(query);

    expect(result.length).toBeGreaterThan(0); 
    const firstNames = getPropertyListFromResult(result, 'first_name');
    expect(firstNames.length).toBeGreaterThan(0); 
    firstNames.forEach(name => {
      expect(typeof name).toBe('string'); 
    });
  });


  test('Count number of employees in department 50', async () => {
    const query = 'SELECT COUNT(*) AS employee_count FROM employees WHERE department_id = 50';
    const result = await queryDatabase(query);
    
    expect(result.length).toBe(1);  
    const employeeCount = result[0].employee_count;
    expect(employeeCount).toBeGreaterThan(0); 
  });

  
  test('Retrieve maximum salary from employees', async () => {
    const query = 'SELECT MAX(salary) AS max_salary FROM employees';
    const result = await queryDatabase(query);
    
    expect(result.length).toBe(1);  
    expect(result[0]).toHaveProperty('max_salary'); 

    const maxSalary = result[0].max_salary;
    expect(maxSalary).toBeGreaterThan(0);
  });
});


test.describe('DB Tests with Stored Results', () => {

    let departmentId: number;
    let employeeCount: number;
    let maxSalary: number;

    
    test('Retrieve department ID and employee count', async () => {
      const query = 'SELECT department_id, COUNT(*) AS employee_count FROM employees GROUP BY department_id LIMIT 1';
      const result = await queryDatabase(query);

      expect(result.length).toBeGreaterThan(0);

      const department = result[0];
      departmentId = department.department_id; 
      employeeCount = department.employee_count; 
      
      expect(departmentId).toBeDefined();
      expect(employeeCount).toBeGreaterThan(0);
    });

    
    test('Retrieve employees from the same department', async () => {
      expect(departmentId).toBeDefined(); 

      const query = `SELECT first_name, last_name FROM employees WHERE department_id = ${departmentId}`;
      const result = await queryDatabase(query);

      expect(result.length).toBeGreaterThan(0); 

      const employees = getPropertyListFromResult(result, 'first_name');
      expect(employees.length).toBeGreaterThan(0); 
    });


    test('Retrieve highest salary', async () => {
      const query = 'SELECT MAX(salary) AS max_salary FROM employees';
      const result = await queryDatabase(query);

      expect(result.length).toBe(1); 
      maxSalary = result[0].max_salary; 

      expect(maxSalary).toBeGreaterThan(0); 
    });

   
    test('Check employees with salary greater than maxSalary', async () => {
      expect(maxSalary).toBeDefined();

      const query = `SELECT first_name, last_name, salary FROM employees WHERE salary > ${maxSalary}`;
      const result = await queryDatabase(query);

      expect(result.length).toBe(0);
    });
    

});