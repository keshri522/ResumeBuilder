import React from 'react';

const SingleCards = ({ Skilldata, image, Workdata, Formdata }) => {
    //   console.log(Skilldata)
    //   console.log("data is", Formdata)

    // console.log("The Skilldata is",Skilldata);
    // console.log("The Imagedata is",image);
    // console.log("The Workdata is",Workdata);

    // console.log("The Formdata is",Formdata);
    return (
        <div className='resume m-3 bg-light ' >

            <div className='row' >
                <div className='single-card'>
                    {image ? (
                        <div className="col-md-2" >
                            <img className="card-image  " src={image} alt="Cardimg" />
                        </div>
                    ) : (
                        <div className="col-md-2">
                            <img className="card-image my-2" src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
                                alt="default" />
                        </div>
                    )}
                    <div className='col-md-3'>
                        <h2>{Formdata.Firstname}{Formdata.Lastname}</h2>
                    </div>
                    <div className='col-md-3' >
                       <p>{Formdata.Address}</p>
                       <p>{Formdata.City}</p>
                       <p>{Formdata.City} {Formdata.PostalCode} </p>
                       <p>{Formdata.Mobile}</p>
                    </div>
                    </div>
                 <p>{Formdata.Objective}</p>
                </div>
                
               <div className='row'>
                 <h2>Professional Experience</h2>
               </div>

           

            <h3>Name:{Formdata.Firstname}</h3>


            {Workdata.map((itmes, index) => {
                return <ul>
                    <li>
                        {itmes.JobTitle}
                    </li>
                    <li>
                        {itmes.OrganizationName}
                    </li>
                    <li>
                        {itmes.StartYear}
                    </li>
                    <li>
                        {itmes.EndYears}
                    </li>
                </ul>
            })}

            {Skilldata.map((itmes, index) => {
                return <ul>
                    <li>
                        {itmes.FirstSkill}
                    </li>
                    <li>
                        {itmes.SecondSkill}
                    </li>
                </ul>
            })}
        </div>


    );
};






export default SingleCards