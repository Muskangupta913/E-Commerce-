import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate();

  
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth)
      {
        navigate('/')
    }
  })

  const collectData = async () => {
    console.log("Name:", name, "Email:", email, "Password:", password);
    let result=await fetch('http://localhost:5000/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      header:{
        'Content-Type':'application/Json'
      },
    });
    result=await result.json()
      console.warn(result);
      localStorage.setItem("user",JSON.stringify(result));
      if(result){
        navigate('/')
      }

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Registration</h1>
      <div className="bg-white p-8 rounded shadow-md w-80">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-4 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={collectData}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
