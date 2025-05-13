
import React, { useState } from 'react'
import { logo } from "../images.js";
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabase.js';
import Mytoast from '../components/Mytoast.jsx';
import { Bounce, toast } from 'react-toastify';
import { NavbarBrand } from '@heroui/navbar';
const Signin = () => {
  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()


  const signup =async (e)=>{
    e.preventDefault()
    console.log(email,password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    console.log(data);

    const { data:userdata, error:usererror } = await supabase
  .from('users')
  .select()
  .eq('uid',data.user.id)
  .single()
  console.log(userdata);
  localStorage.setItem('token',data.session.access_token)  
  localStorage.setItem('Role',userdata.role)
  if(userdata.role === 'Vendor'){
    navigate('/vendor')
    
  }else{
    navigate('/home')
  }
    error?toast.error('Failed', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      }):
      toast.success('Success', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    
    

  }
  return (
    <div className='min-h-screen bg-black flex flex-col md:flex-row '>
        <div className='md:w-[50%] md:h-full h-[400px] w-full'>
            <img className='w-full h-full' src={logo} alt="" />
        </div>
        <div className='md:w-[50%] w-full min-h-screen h-full flex items-center justify-center md:mt-8 mt-0 '>
        <form onSubmit={signup} className='w-[60%] h-full  md:pt-6 pt-0'>
          <h1 className='text-orange-500 text-center font-semibold text-4xl hover:text-orange-500 hover:underline'>CAR DEALERS.</h1>
          <input onChange={(e)=>setEmail(e.target.value)} className='w-full h-[50px] bg-zinc-100 rounded-md p-4 mt-6' type="email" placeholder='Enter Email ' />
          <input onChange={(e)=>setPassword(e.target.value)} className='w-full h-[50px] bg-zinc-100 rounded-md p-4 mt-6' type="password" placeholder='Enter password ' />
          <p className='w-full flex justify-between items-center gap-4 mt-6'>
            <span className='text-xl text-orange-500 hover:text-white hover:underline'>
              <Link to='/Signup'>Don't have an Account</Link>
            </span>
            <span className='text-xl text-white hover:text-orange-500 hover:underline'>
              Need Help?
            </span>
          </p>
          <button type='submit' className='w-full h-[50px] text-center rounded-md bg-orange-500 text-white text-xl mt-6 hover:bg-white hover:text-orange-500'>
            Signin
          </button>
          <Mytoast/>
        </form>
        </div>

    </div>
  )
}

export default Signin
