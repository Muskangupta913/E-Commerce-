import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth)
      {
        navigate('/')
    }
  })

  const handleLogin= async ()=>{
    console.warn(email,password)
    let result=await fetch('http://localhost:5000/login',{
      method:'post',
      body:JSON.stringify({email,password}),
      header:{
        'Content-Type':'application/Json'
      },
    });
    result=await result.json()
      console.warn(result);
      if(result.name){
      localStorage.setItem("user",JSON.stringify(result));
      navigate("/")
      }
      else{
        alert("please enter correct detail")
      }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">

            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************" onChange={(e)=>setPassword(e.target.value)} value={password}
            />
          </div>
          <div className="flex items-center justify-between">
            <button onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
