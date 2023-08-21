import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
// import { ReactComponent as Logo } from './TrenDB.svg';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <h1>TrenDB</h1>
      {/* <img src="./TrenDB.svg" alt="bug" height={100} /> */}
      {/* <img src={logo} /> */}
      {/* <Logo height={100} /> */}
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