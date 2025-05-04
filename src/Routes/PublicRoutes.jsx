import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
   
    const Auth = !!localStorage.getItem('sb-ypzjiqjrqsagqkvkczow-auth-token')
    return Auth? <Navigate to="/home"/>:<Outlet/>
}

export default PublicRoutes
