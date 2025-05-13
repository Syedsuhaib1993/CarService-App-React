
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import {  Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import PrivateRoutes from './Routes/PrivateRoutes'
import PublicRoutes from './Routes/PublicRoutes'
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Choose one of the themes
import 'primereact/resources/primereact.min.css';                // Core CSS
import 'primeicons/primeicons.css';                              // Icons
import Vendor from './pages/Vendor'
import VendorRoutes from './Routes/VendorRoutes'
import Buyer from './pages/Buyer'
import BuyerRoutes from './Routes/BuyerRoutes'



function App() {
  

  return (
  <Routes>
      <Route element={<PrivateRoutes/>}>
      <Route path={'/home'} element={<Home/>}/>
      <Route element={<VendorRoutes/>}>
      <Route path={'/vendor'} element={<Vendor/>}/>
      </Route>
      <Route path={'/about'} element={<About/>}/>
      <Route element={<BuyerRoutes/>}>
      <Route path={'/buyer'} element={<Buyer/>}/>
      </Route>
      </Route>
      
   <Route element={<PublicRoutes/>}>
   <Route path={'/signup'} element={<Signup/>}/>
   <Route path={'/signin'} element={<Signin/>}/>
   </Route>
  </Routes>
  )
}

export default App
