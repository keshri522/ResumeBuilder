
import React from 'react'


 const Pamplet2 = () => {
  return (
    <div style={{width:"500px"}}>
         <div className='card'>
       
       

        <div className="row" style={{height:"200px",backgroundColor:"#800000",}}>
           <div className="col-3 border-primary">
               <div className="container-fluid">
               </div>
           </div>
           <div className="col-6">
               <h2 className='text-white'>NAME</h2>
               <h6 className='text-bold text-white'>Role</h6>
           </div>
           <div className="col-3">
               <h3 className="text-white">Address</h3>
           </div>
          
       </div>
       <div className='row'>
           <p className="fs-6 text-white" style={{backgroundColor:"#800000"}}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eos quia odio sequi impedit non voluptatibus alias distinctio recusandae velit molestiae adipisci qui numquam, quisquam, soluta id, neque eveniet voluptatem!

           </p>

      

           <br></br>
           <h6 className='text-warning text-bold'>Professional Experience</h6>
           <br></br>
           <br></br>
           <hr></hr>
           
               <ul>
                   <li  className=' ms-5'>
                       <span className="fw-bold">Role1</span>
                       <span className="ms-4"></span>
                       <span className="fst-italic">Role1</span>
                       

                   </li>
                   <li  className=' ms-5'>
                       <span className="fw-bold">Role2</span>
                       <span className="ms-4"></span>
                       <span className="fst-italic">Role2</span>

                   </li>
               </ul>
               <div className="row" style={{height:"30px"}}></div>
               <h6 className="text-bold text-warning">Education</h6>
               <hr></hr>
               <span className="fw-bolder" style={{display:"inline"}}>POST</span>
               
               <span className="fst-italic" style={{display:"inline"}}>College</span>
               <span className="ms-4" ></span>
               <span className='fst-italic' style={{display:"inline"}}>(Date)</span>
               <h6 className="text-bold text-warning">Education</h6>
               <hr></hr>
               <ul>
                   <li className="text-bold   ms-5">skill1</li>
                   <li className="text-bold   ms-5">skill2</li>
                   <li className="text-bold   ms-5">skill3</li>
                   <li className="text-bold   ms-5">skill4</li>
                   <li className="text-bold   ms-5">skill5</li>
               </ul>



           
       </div>
   
</div>
    </div>
   
  )
}
export default Pamplet2;
