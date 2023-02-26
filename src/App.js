import './App.css';
import { Route, Routes } from "react-router";
import { faculty,user,Student } from './Routes/route';
import { useState } from 'react';


function App() {
 const [isLogin,setIsLogin]=useState(true);
  return(
  <div className='App'>
    <Routes>  
      {isLogin ===  false && faculty.map((faculty)=>{
    
        return(
        <Route path={faculty.path} element={faculty.element}></Route>
        )
      })}
      {isLogin === true && Student.map((Student)=>{
        return(
        <Route path={Student.path} element={Student.element}></Route>
        )
      })}
      {isLogin === false && user.map((user)=>{
        return(
        <Route path={user.path} element={user.element}></Route>
        )
      })}
    </Routes>
  </div>
  )
 }

export default App;
