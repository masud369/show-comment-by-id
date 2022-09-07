import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Nomatch from './Components/Nomatch/Nomatch';
import Userdetails from './Components/Userdetails/Userdetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Link style={{padding:'10px'}} to="/home">Home</Link> 
        <Link to="/others">Others</Link>
      
      
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home/user/:userId" element={<Userdetails />} />
            <Route path="*" element={<Nomatch />} />
            
        </Routes>
  </Router>
    </div>
  );
}

export default App;
