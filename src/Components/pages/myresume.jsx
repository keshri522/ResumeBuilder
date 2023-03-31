import React from 'react';
import SingleCards from '../SingleCards'
import { useSelector } from 'react-redux';
const  Myresume = () => {
    const Skilldata=useSelector((state)=>state.rootreducer.Skill.data);
   const Workdata=useSelector((state)=>state.rootreducer.Work.data);
   const image=useSelector((state)=>state.rootreducer.Image.data);
   const Formdata =useSelector((state)=>state.rootreducer.Form.data);
    
    

  return (

  <>
 <div className='dflex container'>


    {Formdata.map((obj,index)=>{
        return <SingleCards  image={image[index]} Workdata={Workdata[index]} Formdata={Formdata[index]} Skilldata={Skilldata[index]} key={index} ></SingleCards>
      })}
      </div>
  </>
   
  )
}



        // <div >
        //     {Skilldata.map((Skilldata,index)=>{
        //         return <SingleCards Skilldata={Skilldata} key={index}  Workdata={Workdata}  ></SingleCards>
        //     })}
        //     {Workdata.map((Workdata,index)=>{
        //         return <SingleCard2 Workdata={Workdata} key={index} ></SingleCard2>
        //     })}
        // </div>

export default  Myresume;