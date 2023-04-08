import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// this the function for dowloading the  resume into pdf


const SingleCards = ({ Skilldata, image, Workdata, Formdata, handleDownload }) => {

    function downloadPDF(id) {
        const filename =Formdata.Firstname;
        //   code for donwloading the pdf of the resumes that we build in resume sections.
        // this is normal  code for downloding the pdf
        html2canvas(id).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("portrait", "pt", "a4");
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.save(filename);
        });
    }

    // this is the function that apply on button that is passesd as props in SingleCards components
    function handleDownload(id) {
        // here we bascially getting the resume basesd on the id that we create in SingleCards it donwload the only resmues that we clicked that id is passed here
        const Resumes = document.getElementById(id);
        downloadPDF(Resumes);
    }
    // creating a unique id here for each resumes according to that they downloads
    const id = uuidv4();
    return (
        <>
            <div id={`Resumes-${id}`} className='card single-card check  head  mt-4 mx-4 layout' style={{ backgroundColor: "#d2dae2" }}>

                <section id="about" className="container">
                    <div className='d-flex justify-content-center'>
                        {image ? (
                            <img className="card-image  my-2 " src={image} alt="Cardimg" />
                        ) : (
                            <img className="card-image my-2 " src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                alt="default" />
                        )}
                    </div>
                    {/* this is for putting a overlay div .. to make it hover when someone hovers...show button */}
                    <div className="overlay"></div>
                    <div className="button btn btn-primary btn-sm" onClick={() => {
                        // here we sending the particular id of all the Resumes when user click on a particular resume then the clicked resumes id will go to handleDownload based on this we are downloading the pdf
                        handleDownload(`Resumes-${id}`)
                        console.log(id)
                    }}  >Download</div>

                    <h2 className=" text-dark ">{Formdata.Firstname} {Formdata.Lastname}</h2>
                    <hr />
                    <h6 className='text-secondary'>{Formdata.Objective}</h6>
                    <p>
                        <div className=''>
                            <strong>Skills:</strong>
                            {/* if our skilldate items is empty then it throw an errro so we have use question chaining if our skilldate is empty then simpy ignore this other wise it will trhow an error */}
                            {Skilldata.map((items, index) => {
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
                <section id="experience" className="container">

                    <h3 className='text-primary text-center'>Work Experience</h3>
                    <hr />
                    <div class="">
                        <div className="row">
                            {/* if our Workdata items is empty then it throw an errro so we have use question chaining if our Workdata is empty then simpy ignore this other wise it will trhow an error */}
                            {Workdata.map((itmes, index) => {
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
                <section className="container" id="contact">
                    <h4 className='text-primary mt-3 text-center'>Contact</h4>
                    <div className="row">
                        <div className="col-md-4">Phone:</div>
                        <div className="col-md-6 text-secondary">{Formdata.Mobile}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">City:</div>
                        <div className="col-md-6 text-secondary">{Formdata.City}</div>
                    </div>  <div className="row">
                        <div className="col-md-4">State:</div>
                        <div className="col-md-6 text-secondary">{Formdata.State}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">PinCode:</div>
                        <div className="col-md-6 text-secondary">{Formdata.PostalCode}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">Email:</div>
                        <div className="col-md-6  text-secondary">{Formdata.Email}</div>
                    </div>
                </section>

            </div>


        </>
    )
};






export default SingleCards;