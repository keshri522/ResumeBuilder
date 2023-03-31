import React from "react";
import { Route,Routes } from "react-router";
import About from "../pages/about";
import Home from "../pages/home";
import Myresume from "../pages/myresume";
const Routers = () => {
    return (
      
               <div className="container">
                       <Routes>
                         <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/myresume" element={<Myresume></Myresume>}></Route>
                        <Route path="/about" element={<About></About>}></Route>
                       </Routes>
               </div>   
      
    );
};

export default Routers;