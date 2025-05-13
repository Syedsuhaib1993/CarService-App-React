import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const BuyerRoutes = () => {
    const auth = localStorage.getItem('Role')
  return auth==='Buyer'?<Outlet/>:<Navigate to={'/home'}/>
}

export default BuyerRoutes
