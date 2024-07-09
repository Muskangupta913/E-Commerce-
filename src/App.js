import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import PrivateComp from "./Components/PrivateComp";
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Routes>

            <Route element={<PrivateComp/>}>
            <Route path="/" element={<ProductList/>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/update" element={<h1> Update Product component</h1>}/>
            <Route path="/logout" element={<h1> Logout component</h1>} />
            <Route path="/profile" element={<h1> Profile component</h1>} />
            </Route>
            
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>

          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
