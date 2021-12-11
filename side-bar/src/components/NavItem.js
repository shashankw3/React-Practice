import React from 'react'
import  {Link} from "react-router-dom";

export default function NavItem(props) {
    const {icon,label,cName,linkTo}=props

    return (
        <Link className='navText' to={linkTo}>
        <li className={cName}>
            {icon}
            <a className='navText'>
                {label}
            </a>
        </li>
        </Link>
       
  
    )
}
