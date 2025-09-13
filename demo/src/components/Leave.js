import React, { useState } from 'react';

function Leave() {
  const [leaves] = useState([
    { id: 1, employee: 'John Doe', type: 'Sick Leave', from: '2024-01-20', to: '2024-01-22', status: 'Pending' },
    { id: 2, employee: 'Jane Smith', type: 'Vacation', from: '2024-02-01', to: '2024-02-05', status: 'Approved' },
    { id: 3, employee: 'Mike Johnson', type: 'Personal', from: '2024-01-25', to: '2024-01-25', status: 'Rejected' }
  ]);

  return (
    <div className="leave">
      <h1>Leave Management</h1>
      <button className="add-btn">Apply Leave</button>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map(leave => (
            <tr key={leave.id}>
              <td>{leave.employee}</td>
              <td>{leave.type}</td>
              <td>{leave.from}</td>
              <td>{leave.to}</td>
              <td className={leave.status.toLowerCase()}>{leave.status}</td>
              <td>
                <button>Approve</button>
                <button>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leave;