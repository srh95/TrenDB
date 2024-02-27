import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Logo from './TrenDB.png';

const LoggedOutNavbar = () => {
  return (
    <>
      <Nav>
          <img style={{ width: 170, height: 120, left: 100, marginTop: -20 }} src={Logo} alt="logo" />
        {/* <h1>TrenDB</h1> */}
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About the Game
          </NavLink>
          <NavLink to='/about' activeStyle>
            Score a Game
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default LoggedOutNavbar;