import React from 'react'
import {NavLink} from "react-router-dom";
import "./HomeMain.css";

function HomeMain() {
  return (
    <div className="homemain">
      <div className="wrap1">
        <NavLink
              exact
              to="/rider"
              activeClassName="active"
              className="rent"
            >
        <button className="btn">RIDER</button>
            </NavLink>
            <div className="desc">
            Click the above Button to go to Rider Page
          </div>
      </div>
      <div className="wrap2">
          
          <NavLink
              exact
              to="/renter"
              activeClassName="active"
              className="ride"
            >
          <button className="btn">RENTER</button>
            </NavLink>
            <div className="desc">
            Click the above Button to go to Rider Page
          </div>
      </div>
    </div>
  )
}

export default HomeMain