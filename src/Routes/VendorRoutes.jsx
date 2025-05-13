import React from 'react'
import { Navigate, Outlet,  } from 'react-router-dom'

const VendorRoutes = () => {
    const auth = localStorage.getItem('Role')
  return auth==="Vendor"?<Outlet/>:<Navigate to={'/home'}/>
}

export default VendorRoutes
