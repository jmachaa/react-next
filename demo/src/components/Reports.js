import React from 'react';

function Reports() {
  return (
    <div className="reports">
      <h1>Reports & Analytics</h1>
      <div className="report-cards">
        <div className="report-card">
          <h3>Employee Report</h3>
          <p>Generate detailed employee reports</p>
          <button>Generate</button>
        </div>
        <div className="report-card">
          <h3>Attendance Report</h3>
          <p>Monthly attendance summary</p>
          <button>Generate</button>
        </div>
        <div className="report-card">
          <h3>Leave Report</h3>
          <p>Leave balance and usage report</p>
          <button>Generate</button>
        </div>
        <div className="report-card">
          <h3>Payroll Report</h3>
          <p>Salary and payroll analytics</p>
          <button>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default Reports;