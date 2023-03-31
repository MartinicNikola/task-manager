import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login';
import Register from './components/Register';
import UserPage from './components/UserPage';
import { useState, useEffect } from 'react';


function App() {

  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    console.log(currentUser)
  },[currentUser])

  return (
    <div className="App">
      <Header />
      <Routes className="routes">
        <Route path="/" element={<Home />} />
        <Route path="/userpage" element={<UserPage email = {currentUser}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login userEmail = {setCurrentUser}/>} /> 
        <Route path="/register" element={<Register />} />  
        <Route path="*" element={<h1>Sorry,not found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
