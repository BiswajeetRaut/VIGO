import React from 'react'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
const Renter = () => {

  return (
    <div>
      <div className="wrapper" style={{zIndex:10}}>
    <div className="title-text">
      <div className="title login">CYCLE AND RENTER DETAILS</div>
      <div className="title signup">CYCLE DETAILS</div>
    </div>

    <div className="form-container">
      <div className="form-inner" >
        <form action="#" className="login">
          <div className="field">
            <input type="text" placeholder="Registration Number" className='reg'/>
          </div>
          <div className="field">
            <input type="number" placeholder="Available Phone Number" className='room'/>
          </div>
          <div className="field">
          
          <label for="signup" className="signup">FROM</label>
            <input type="time" className='room'/>
          </div>
          <br />
          <div className="field">
          <label for="signup" className="signup">TO</label>
            <input type="time" className='room'/>
          </div>
          <br />
          <div className="field">
            <input type="date" placeholder="Available Phone Number" className='room'/>
          </div>
          <div className="field">
            <input type="number" placeholder="Price" className='room'/>
          </div>
          <div className="field">
          <NavLink
              exact
              to="/rented"
              activeClassName="active"
              className="nav-links"
            >
            <input type="button" value="Rent Now" />
              
            </NavLink>
          </div>
          <div className="field">
          <NavLink
              exact
              to="/main"
              activeClassName="active"
              className="nav-links"
            >
            <input type="button" value="Go Back" />
              
            </NavLink>
          </div>
        </form>

        <form action="#" className="signup">
          <div className="field">
            <input type="text" placeholder="Email Address"/>
          </div>
          <div className="field">
            <input type="password" placeholder="Password"/>
          </div>
          <div className="field">
            <input type="password" placeholder="Confirm password"/>
          </div>

          <div className="field">
            <input type="button" value="RENT CYCLE"/>
          </div>

        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Renter
