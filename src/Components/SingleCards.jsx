import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// taking props from Myresume componetns 
const SingleCards = ({ Skilldata, image, Workdata, Formdata }) => {
    return (
        <>

            <div className='card single-card check  head  mt-4 mx-4 layout' style={{ backgroundColor: "#d2dae2" }}>

                <section id="about" class="container  ">
                    <div className='d-flex justify-content-center'>
                        {image ? (
                            <img className="card-image  my-2 " src={image} alt="Cardimg" />
                        ) : (
                            <img className="card-image my-2 " src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                alt="default" />
                        )}
                    </div>
                    {/* this is for putting a overlay div .. to make it hover when someone hovers...show button */}
                    <div class="overlay"></div>
                    <div class="button btn btn-primary btn-sm" >Download</div>
                    <h2 class=" text-dark ">{Formdata.Firstname} {Formdata.Lastname}</h2>
                    <hr />
                    <h6 className='text-secondary'>{Formdata.Objective}</h6>
                    <p>
                        <div className=''>
                            <strong>Skills:</strong>
                            {/* if our skilldate items is empty then it throw an errro so we have use question chaining if our skilldate is empty then simpy ignore this other wise it will trhow an error */}
                            {Skilldata?.map((items, index) => {

                                return <div key={index}>
                                    <ul className='text-secondary'>
                                        <li>{items.FirstSkill}</li>
                                        <li>{items.SecondSkill}</li>
                                    </ul>
                                    <hr />
                                </div>

                            })}
                        </div>
                    </p>
                </section>

                {/* <!-- EXPERIENCE ---------------------------------------------> */}
                <section id="experience" class="container">

                    <h3 className='text-primary text-center'>Work Experience</h3>
                    <hr />
                    <div class="">
                        <div class="row">
                            {/* if our Workdata items is empty then it throw an errro so we have use question chaining if our Workdata is empty then simpy ignore this other wise it will trhow an error */}
                            {Workdata?.map((itmes, index) => {
                                return <div key={index}>
                                    <h5 className='text-danger mt-3 '> {itmes.JobTitle}</h5>
                                    <h6 className='text-secondary'> {itmes.OrganizationName} <span> ({itmes.StartYear} {itmes.EndYears})</span></h6>
                                </div>
                            })}
                        </div>
                    </div>
                </section>

                {/* <!-- CONTACT -----------------------------------------------------> */}
                <hr />
                <section class="container" id="contact">
                    <h4 className='text-primary mt-3 text-center'>Contact</h4>
                    <div class="row">
                        <div class="col-md-4">Phone:</div>
                        <div class="col-md-6 text-secondary">{Formdata.Mobile}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">City:</div>
                        <div class="col-md-6 text-secondary">{Formdata.City}</div>
                    </div>  <div class="row">
                        <div class="col-md-4">State:</div>
                        <div class="col-md-6 text-secondary">{Formdata.State}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">PinCode:</div>
                        <div class="col-md-6 text-secondary">{Formdata.PostalCode}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">Email:</div>
                        <div class="col-md-6  text-secondary">{Formdata.Email}</div>
                    </div>
                </section>

            </div>


        </>
    )
};






export default SingleCards