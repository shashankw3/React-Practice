import React from 'react'
import NavItem from './NavItem'

import { IoLogOut } from "react-icons/io5";

export default function SideBar(props) {
    const {navList,cName}=props
    return (
      <div className={cName}>
          <h3 className='text-white'>DashBoard</h3>
            <div className='navItems'>
               {navList.map(
                   nav=><NavItem label={nav.label} icon={nav.icon} cName={nav.cName} linkTo={nav.linkTo}/>
               )}
              
             </div>
          
      </div>
    )
}
