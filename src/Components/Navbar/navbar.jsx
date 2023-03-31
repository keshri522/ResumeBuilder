import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    // const Formdata=useSelector((state)=>state.rootreducer.Form.data);

    // const data1=useSelector((state)=>state.rootreducer.Work.data);


    // console.log("my data inside is at 0" , data[0].Firstname);
    // console.log("my data inside is at 1 " , data[1].Lastname);
    // console.log("my data inside is at 2 " , data[2])

    // console.log("the work is ", data1);

    // {data.map((item,index)=>{
    //     console.log(item);
    //      <ul key={index}>
    //         {item.map((skill)=>{
    //           console.log(skill.FirstSkill)
    //           console.log(skill.SecondSkill);

    //            {/* console.log("My ist arry skills at",skill.FirstSkill,skill.SecondSkill); */}
    //            {/* console.log("My 2nd arry skills at", skill.SecondSkill); */}

    //         })}
    //      </ul>
    // })}
    {/* {data.map((item,index)=>{

         return    <img src={item} alt="" height="100px" width="100px" />
            
        })} */}



    // {data.map((item,index)=>{
    //     return <p>{item.Firstname}</p>



    //   })}

    return (
        <>
<nav class="navbar navbar-expand-lg navbar-light  shadow-sm">
<div className='col-md-8 mx-3 center '>
                        <h2 className='my-2 text-dark'><span className='text-danger'>Resume</span>Builder</h2>
                    </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto nav ">
      <li class="nav-item active " >
      <NavLink className="" to="/">Home</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="" to="myresume">My Resume</NavLink>
      </li>
      <li class="nav-item dropdown">
      <NavLink className="" to="/about">About</NavLink>
      
      </li>
      
    </ul>
   
  </div>
</nav>
        
      

        </>
    );
};

export default Navbar;