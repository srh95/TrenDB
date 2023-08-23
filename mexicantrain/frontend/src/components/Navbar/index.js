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
  
const Navbar = () => {
  return (
    <>
      <Nav>
      <img style={{ width: 100, height: 100, left: 100, top: 0 }} src={Logo} alt="bug"/> 
        {/* <h1>TrenDB</h1> */}
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/players' activeStyle>
            Players
          </NavLink>
          <NavLink to='/games/addGame' activeStyle>
            Add a Game
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
  
export default Navbar;