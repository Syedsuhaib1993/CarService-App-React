import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Mynavbar from '../components/Mynavbar';

const PrivateRoutes = () => {
    const Auth = !!localStorage.getItem('token')
    console.log(Auth);
    
  return Auth?<><Mynavbar/><Outlet/></>:<Navigate to='/signin'/>
}

export default PrivateRoutes
