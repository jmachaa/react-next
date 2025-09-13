import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>HRMS Dashboard</h1>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Employees</h3>
          <p>150</p>
        </div>
        <div className="stat-card">
          <h3>Present Today</h3>
          <p>142</p>
        </div>
        <div className="stat-card">
          <h3>On Leave</h3>
          <p>8</p>
        </div>
        <div className="stat-card">
          <h3>Pending Requests</h3>
          <p>5</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;