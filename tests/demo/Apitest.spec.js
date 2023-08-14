import { test, expect } from '@playwright/test';

test('Verify employee salary', async ({ page }) => {
  // Navigate to the API endpoint
  await page.goto('http://dummy.restapiexample.com/api/v1/employees');

  // Get the response text
  const responseText = await page.textContent('pre');

  // Parse the JSON response
  const responseData = JSON.parse(responseText);
  
  // Find the employee with the name "Michael Silva"
  const michaelSilva = responseData.data.find(employee => employee.employee_name === 'Michael Silva');
  const receivedSalary = michaelSilva.employee_salary.toString();
  expect(receivedSalary).toBe('198500');

  // Verify the salary
  const expectedSalary = parseInt('198500');
  expect(michaelSilva.employee_salary).toBe(expectedSalary);
});
