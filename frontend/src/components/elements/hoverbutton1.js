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
        <div style={{marginLeft:10,marginTop:15}}>
            <NavBtnLink to={`${url}`}>{text}</NavBtnLink>
            
        </div>
    )
}

export default Hoverbutton1
