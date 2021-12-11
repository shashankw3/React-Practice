import 
{AiFillHome,
AiFillFile,
AiFillProfile,
AiFillWechat,
AiOutlineLogout


}  from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";


export const navData=[
    {   cName:'navItem text-white',
        label:'Home',
        icon:<AiFillHome/>,
        linkTo:'/'
    },
    {   cName:'navItem text-white',
        label:'Account',
        icon:<AiFillProfile/>,
        linkTo:'/account'
    },
    {   cName:'navItem text-white',
        label:'File Manager',
        icon:<AiFillFile/>,
        linkTo:'/files'
    },
    {   cName:'navItem text-white',
        label:'Chats',
        icon:<AiFillWechat/>,
        linkTo:'/chats'
    },
    
    {   cName:'navItem text-white end',
        label:'logout',
        icon:<IoLogOut/>,
        linkTo:'/'
    }
]