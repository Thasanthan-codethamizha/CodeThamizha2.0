import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { useCookies } from 'react-cookie';
function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [token,setToken]=useCookies(['mytoken'])
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
          </Link>
            <NavLink to='/'>
          </NavLink>
          <Nav>
            <NavMenu className="navmenu"> 
              <NavLink to='/' activeStyle>
                Home
              </NavLink>
              <NavLink to='/about' activeStyle>
                About
              </NavLink>
              <NavLink to='/people' activeStyle>
                People
              </NavLink>
              
              <NavLink to='/sign-up' activeStyle>
                Sign Up
              </NavLink>
              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
          </Nav>
          <NavBtn>
            {token['mytoken'] ? <NavBtnLink to='/profile'>Profile</NavBtnLink>  : <NavBtnLink to='/signin'>SignIn</NavBtnLink>}
           
          </NavBtn>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Header;
