
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/Navbar';
import Adduser from './component/users/Adduser';
import EditUser from './component/users/EditUser';
import User from './component/users/User';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path ="/about" element={ <About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/user/add" element={<Adduser/>}/>
      <Route path="/user/edit/:id" element={<EditUser/>}/>
      <Route path="/user/:id" element={<EditUser/>}/>

     
      
     
      
      </Routes>
      </div>
      </BrowserRouter>
  
  );
}

export default App;
