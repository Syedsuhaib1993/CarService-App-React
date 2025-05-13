import React, { useState } from "react";
import { logo } from "../images.js";
import { Link } from "react-router-dom";
import { supabase } from "../config/supabase.js";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const signup = async (e) => {
    e.preventDefault();
    console.log(name, email, password ,role);

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
   if(error){
    alert('error')
   }else{
    const { error:usererror } = await supabase
  .from('users')
  .insert({ name: name, email: email, role:role ,uid: data.user.id})
     if(usererror){
    alert('fertchdata error')
     } else{
      alert('success')
      setName('')
      setEmail('')
      setPassword('')
      setRole('')
     }
   }
  };
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row ">
      <div className="md:w-[50%] md:h-full h-[300px] w-full">
        <img className="w-full h-full" src={logo} alt="" />
      </div>
      <div className="md:w-[50%] w-full min-h-screen h-full flex items-center justify-center md:mt-4  ">
        <form onSubmit={signup} className="w-[60%] h-full  md:pt-6 pt-0">
          <h1 className="text-orange-500 text-center font-semibold text-4xl hover:text-orange-500 hover:underline">
            Create an Account .
          </h1>
          <input
            onChange={(e) => setName(e.target.value)}
            className="w-full h-[50px] bg-zinc-100 rounded-md p-4 mt-6"
            type="text"
            placeholder="Enter Name "
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[50px] bg-zinc-100 rounded-md p-4 mt-6"
            type="email"
            placeholder="Enter Email "
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[50px] bg-zinc-100 rounded-md p-4 mt-6"
            type="password"
            placeholder="Enter password "
          />
          <div className="text-white mt-3 ">
            <p>Select your Role</p>

            <label>
              <input
                className="m-2"
                type="radio"
                value="Vendor"
                checked={role === "Vendor"}
                onChange={(e) => setRole(e.target.value)}
              />
              Vendor
            </label>
            <br />

            <label>
              <input
                className="m-2"
                type="radio"
                value="Buyer"
                checked={role === "Buyer"}
                onChange={(e) => setRole(e.target.value)}
              />
              Buyer
            </label>
            <br />
          </div>
          <p className="w-full flex justify-between items-center gap-4 mt-6">
            <span className="text-xl text-orange-500 hover:text-white hover:underline">
              <Link to="/Signin">Already have an Account</Link>
            </span>
            <span className="text-xl text-white hover:text-orange-500 hover:underline">
              Forget Password?
            </span>
          </p>
          <button
            type="submit"
            className="w-full h-[50px] text-center rounded-md bg-orange-500 text-white text-xl mt-6 hover:bg-white hover:text-orange-500"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
