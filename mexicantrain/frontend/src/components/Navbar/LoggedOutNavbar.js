import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Logo from './TrenDB2.png';

const LoggedOutNavbar = () => {
  return (
    <>
    <div className="nav-container"> 
      <div className="triangle"> </div>
      <img src={Logo} className="logo" alt="logo" />
      <Nav>
        {/* <h1>TrenDB</h1> */}
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About the Game
          </NavLink>
          <NavLink to='/games/addGame' activeStyle>
            Score a Game
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
        </NavBtn>
      </Nav>
      </div>
    </>
  );
};

export default LoggedOutNavbar;