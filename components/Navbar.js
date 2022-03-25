import React from "react";

function Navbar() {
  return (
    <navbar>
      <div className="left">
        <div className="days">Remaining Days to my Trip</div>
        <div className="time">
          <div className="time-count">
            <h2>10</h2>
            <span>weeks</span>
          </div>
          <div className="time-count">
            <h2>06</h2>
            <span>DAYS</span>
          </div>
          <div className="time-count">
            <h2>45</h2>
            <span>HOURS</span>
          </div>
          <div className="time-count">
            <h2>25</h2>
            <span>MINUTES</span>
          </div>
          <div className="time-count">
            <h2>06</h2>
            <span>SECONDS</span>
          </div>
        </div>
      </div>
      <div className="right">
        <span className="trips">My Trips</span>
        <span>
          <i className="bi bi-globe"></i>En ($)
        </span>
      </div>
    </navbar>
  );
}

export default Navbar;
