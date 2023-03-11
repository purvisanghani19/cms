import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import { faculty, user, Student } from './Routes/route';
// import { useState } from 'react';

import Login from './Pages/User/Home/Login';
import Public from './Public';
import Proroute from "./Proroute";



function App() {

  // const [isLogin, setIsLogin] = useState(true);

  return (

    <div className='App'>
      <Routes>
        {user.map((user) => {
          return (
            <Route path={user.path} element={user.element}></Route>
          )
        })}
        <Route path="/" element={< Proroute/>}>
          {<Outlet /> && faculty.map((faculty) => {
            return (
              <Route path={faculty.path} element={faculty.element}></Route>
            )
          })}
          {<Outlet /> && Student.map((Student) => {
            return (
              <Route path={Student.path} element={Student.element}></Route>
            )
          })}
        </Route>
        <Route path="/login" element={<Login />}></Route>
        
      </Routes>
    </div>
  )
}

export default App;
