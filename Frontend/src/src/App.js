import './App.css';
import Login from "./Components/Signing/Login"
import Signupm from './Components/Signing/Signupm';
import {Timer} from './Components/Timer/Timer'
import Sidebar from "./Components/sidebar/Sidebar"
import { Box, HStack} from '@chakra-ui/react';
import SimpleSidebar from './Components/sidebar/Sidebar';
import { Dashboard } from './Components/Dashboard/DashboardTimer';

function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     {/* <Signupm/> */}
     {/* <TopNav/> */}
  
   <Dashboard/>   
    
     
    </div>
  );
}

export default App;
