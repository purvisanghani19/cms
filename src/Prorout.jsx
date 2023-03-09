import React from 'react';
import { Navigate, Outlet } from 'react-router';


{ auth: true/false , role: "ADMIN"}



const useAuth = () => {


 
    const _user = localStorage.getItem('user')
    if(_user){
        user = JSON.parse(_user)
        console.log("user",user)
    }

    if (user) {
        return {
            auth: true,
            role: user.role,
        }
    } else {
        return {
            auth: false,
            role: null,
        }
    }
}

const Prorout = () => {

    const { auth, role } = useAuth()
    return auth ? <Outlet /> : <Navigate to="/login" />
}

export default Prorout;     