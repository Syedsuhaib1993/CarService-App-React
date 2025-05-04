
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import { Outlet, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import PrivateRoutes from './Routes/PrivateRoutes'
import PublicRoutes from './Routes/PublicRoutes'


function App() {
  

  return (
  <Routes>
      <Route element={<PrivateRoutes/>}>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={'/about'} element={<About/>}/>
      </Route>
      
   <Route element={<PublicRoutes/>}>
   <Route path={'/signup'} element={<Signup/>}/>
   <Route path={'/signin'} element={<Signin/>}/>
   </Route>
  </Routes>
  )
}

export default App
