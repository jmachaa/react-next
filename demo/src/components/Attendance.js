import React, { useState } from 'react';

function Attendance() {
  const [attendance] = useState([
    { id: 1, name: 'John Doe', date: '2024-01-15', checkIn: '09:00', checkOut: '17:30', status: 'Present' },
    { id: 2, name: 'Jane Smith', date: '2024-01-15', checkIn: '08:45', checkOut: '17:15', status: 'Present' },
    { id: 3, name: 'Mike Johnson', date: '2024-01-15', checkIn: '-', checkOut: '-', status: 'Absent' }
  ]);

  return (
    <div className="attendance">
      <h1>Attendance Management</h1>
      <div className="attendance-controls">
        <input type="date" />
        <button>Mark Attendance</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map(record => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td>{record.checkIn}</td>
              <td>{record.checkOut}</td>
              <td className={record.status.toLowerCase()}>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;