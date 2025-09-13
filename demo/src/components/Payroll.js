import React, { useState } from 'react';

function Payroll() {
  const [payroll] = useState([
    { id: 1, employee: 'John Doe', salary: 5000, bonus: 500, deductions: 200, net: 5300 },
    { id: 2, employee: 'Jane Smith', salary: 7000, bonus: 700, deductions: 300, net: 7400 },
    { id: 3, employee: 'Mike Johnson', salary: 4500, bonus: 300, deductions: 150, net: 4650 }
  ]);

  return (
    <div className="payroll">
      <h1>Payroll Management</h1>
      <div className="payroll-controls">
        <select>
          <option>January 2024</option>
          <option>February 2024</option>
        </select>
        <button>Generate Payslips</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Base Salary</th>
            <th>Bonus</th>
            <th>Deductions</th>
            <th>Net Pay</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payroll.map(pay => (
            <tr key={pay.id}>
              <td>{pay.employee}</td>
              <td>${pay.salary}</td>
              <td>${pay.bonus}</td>
              <td>${pay.deductions}</td>
              <td>${pay.net}</td>
              <td>
                <button>View Slip</button>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payroll;