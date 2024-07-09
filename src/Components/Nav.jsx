import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  return (
    <div className="bg-blue-300 ">
      {auth ? (
        <ul className="text-center flex p-7 gap-5 text-white">
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Product</Link></li>
          <li><Link to="/update">Update Product</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link onClick={Logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
        </ul>
      ) : (
        <ul className="text-center flex p-7 gap-5 text-white flex justify-end">
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Nav;
