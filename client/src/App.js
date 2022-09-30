
import './App.css';
// import Navroutes from "./Mainroutes/Navroutes";
import { Homepage } from './Components/Homepage/Homepage';
// import Navbar from './Components/NavComponents/Navbar';

 import Navroutes from './Mainroutes/Navroutes';
// import { Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Navroutes/>
      {/* <Navbar/> */}
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
