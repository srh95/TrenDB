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
          <img style={{ width: 170, height: 120, left: 100, marginTop: -20 }} src={Logo} alt="logo" />
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
          <NavLink to='/games' activeStyle>
            Games
          </NavLink>
          <NavLink to='/stats' activeStyle>
            Stats
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