import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
const PersonalInfo = ({ Formdata, SetFormdata, titleimg, Settitleimg, error }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        SetFormdata((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        })
    }
    // just for storing the image ...

    const ImageRef = useRef('');
    return (
        <div className='col-md-6  text-center p-4 ok mx-5 mx-auto  '>
            <div className=''>
                {titleimg ? (
                    <div >
                        <img className='image-display' src={titleimg} alt="titleimg" />
                        <span onClick={() => { Settitleimg("") }}>
                            <FontAwesomeIcon className=' text-danger' icon={faXmark}></FontAwesomeIcon>
                        </span>
                    </div>

                ) : (
                    <div>
                        <button
                            className=' btn  '
                            type="button"
                            onClick={() => ImageRef.current.click()}
                        >
                            <span className='text-primary font-weight-bold'>Select Photo</span>
                            <input type="file"
                                name="titleimg"
                                // here "image/* means accept all type of images"
                                accept="image/*,.pdf,.doc,.docs"
                                ref={ImageRef}
                                style={{ display: "none" }}
                                value={titleimg}
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    const reader = new FileReader();
                                    reader.readAsDataURL(file)
                                    reader.onload = () => {
                                        Settitleimg(reader.result);
                                    };
                                }}
                            />
                        </button>
                    </div>
                )}
            </div>
            <div className='row  '>
                <div className='col-md-5  mx-auto'>
                    <label className='my-1 text-secondary' htmlFor="">First name<span className='text-dark  ' >*</span></label> <br />
                    <input className='form-control my-1 shadow-none p-2' type="text" name="Firstname" value={Formdata.Firstname} onChange={handleChange} />
                    {error.Firstname && <small className='text-danger'>{error.Firstname}</small>}
                </div>
                <div className='col-md-5 mx-auto'>
                    <label className='my-1 text-secondary ' htmlFor="">Last name<span className='text-dark ' >*</span></label>   <br />
                    <input className='form-control my-1 shadow-none p-2' type="text" name="Lastname" value={Formdata.Lastname} onChange={handleChange} />
                    {error.Lastname && <small className='text-danger'>{error.Lastname}</small>}
                </div>
            </div>
            <div className='row '>
                <div className='col-md-5 mx-auto'>
                    <label className='my-1 text-secondary' htmlFor="">Email<span className='text-dark ' >*</span></label>   <br />
                    <input className='form-control my-1  shadow-none p-2' type="email" name="Email" value={Formdata.Email} onChange={handleChange} />
                    {error.Email && <small className='text-danger'>{error.Email}</small>}
                </div>
                <div className='col-md-5 mx-auto'>
                    <label className='my-1 text-secondary' htmlFor="">Mobile<span className='text-dark ' >*</span></label>   <br />
                    <input className='form-control my-1  shadow-none p-2' type="text" name="Mobile" value={Formdata.Mobile} onChange={handleChange} />
                    {error.Mobile && <small className='text-danger'>{error.Mobile}</small>}
                </div>
            </div>
            <div className="row">
                <div className='col-md-11 mx-auto '>
                    <label className='my-1 text-secondary' htmlFor="">Address<span className='text-dark ' >*</span></label><br />
                    <input type="text" className='form-control my-1 p-2 shadow-none' name="Address" value={Formdata.Address} onChange={handleChange} />
                    {error.Address && <small className='text-danger'>{error.Address}</small>}
                </div>
            </div>
            <div className="row">
                <div className='col-md-5 mx-auto'>
                    <label className='my-1 text-secondary' htmlFor="">City<span className='text-dark ' >*</span></label><br />
                    <input type="text" className='form-control p-2  shadow-none my-1' name="City" value={Formdata.City} onChange={handleChange} />
                    {error.City && <small className='text-danger'>{error.City}</small>}
                </div>
                <div className='col-md-5 mx-auto'>
                    <label className='my-1 text-secondary' htmlFor=""  >State<span className='text-dark ' >*</span></label><br />
                    <input type="text" className='form-control my-1 p-2 shadow-none' name="State" value={Formdata.State} onChange={handleChange} />
                    {error.State && <small className='text-danger'>{error.State}</small>}
                </div>
            </div>
            <div className='row'>
                <div className="col-md-5 position">
                    <label className='my-1 text-secondary pp' htmlFor="">Postal Code<span className='text-dark ' >*</span></label><br />
                    <input type="text" name="PostalCode" className='form-control my-1 p-2 shadow-none pp' value={Formdata.PostalCode} onChange={handleChange} />
                    {error.PostalCode && <small className='text-danger'>{error.PostalCode}</small>}
                </div>
            </div>
            <div className='row'>
                <div className="col-md-11 mx-auto">
                    <label className='my-1 text-secondary' htmlFor="">Objective<span className='text-dark ' >*</span></label><br />
                    <textarea style={{ resize: "none" }} name="Objective" value={Formdata.Objective} onChange={handleChange} cols="3" rows="5" className='form-control my-1 p-2  shadow-none'></textarea>
                    {error.Objective && <small className='text-danger'>{error.Objective}</small>}
                </div>
            </div>

        </div>
    );
};

export default PersonalInfo;