import React,{useState} from 'react'
import './App.css';
import SideBar from './components/SideBar';
import { navData } from './utils/navData';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Account from './pages/Account';
import Files from './pages/Files';
import Chats from './pages/Chats';
import {AiOutlineMenu} from "react-icons/ai"; 

function App() {
  const [isActive, setActive] = useState(false)
  const cName=isActive?'navBar':'disable'
  return (
    <Router>
   
      
        <button className='btn btn-light' onClick={()=>setActive(!isActive)}>
          <AiOutlineMenu/>
        </button>

        <div className='row'>
            <div className={isActive?'col-lg-2':null}>
            <SideBar navList={navData} cName={cName}/>
            </div>
            <div className={isActive?'col-lg-9':'col-lg-12'}>
            <Routes>
            <Route exact path="/"  element={<Home/>}/>
            <Route exact path="/account"  element={<Account/>}/>
            <Route exact path="/files"  element={<Files/>}/>
            <Route exact path="/chats"  element={<Chats/>}/>
            </Routes>
            </div>
        </div>
      


   
    </Router>
   
  
  );
}

export default App;
