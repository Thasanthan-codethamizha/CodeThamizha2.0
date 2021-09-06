import React ,{useRef} from 'react'
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

  
function Hoverbutton1({text,url}) {
    return (
        <div>
            <NavBtnLink to={`${url}`}>{text}</NavBtnLink>
            
        </div>
    )
}

export default Hoverbutton1
