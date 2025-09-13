import React, { useState } from 'react';

function Employees() {
  const [employees] = useState([
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT', email: 'john@company.com' },
    { id: 2, name: 'Jane Smith', position: 'Manager', department: 'HR', email: 'jane@company.com' },
    { id: 3, name: 'Mike Johnson', position: 'Designer', department: 'Design', email: 'mike@company.com' }
  ]);

  return (
    <div className="employees">
      <h1>Employee Management</h1>
      <button className="add-btn">Add Employee</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.department}</td>
              <td>{emp.email}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;