import React from 'react';
// here we are using Regax Expresstion for the Validations of each input fileds
function Formmdatavalidation({ Formdata }) {
    const email_pattern=/^\w+([\.-]?\w+)*@gmail\.com$/
 
    const mobile_pattern = /^\+?[1-9][0-9]{7,10}$/;
    const postal_pattern = /^[1-9][0-9]{5}$/;
    const name_pattern=/^[a-zA-Z]{3,20}$/;

    let error = {};
    // this is for First name validations
    if (Formdata.Firstname == "") {
        error.Firstname = " Required!"
    }
    else if (!name_pattern.test(Formdata.Firstname)) {
        error.Firstname = "Name must be between 3 and 20 characters!"
    }
    // For Last Name validations
    if (Formdata.Lastname == "") {
        error.Lastname = " Required!"
    }
    else if (!name_pattern.test(Formdata.Lastname)) {
        error.Lastname = "Name must be between 3 and 20 characters!"
    }
   
    // This is for email Validations
    if(Formdata.Email===""){
        error.Email="Required!"
     }
     else if(!email_pattern.test(Formdata.Email)){
        error.Email="email must contain aphanumber & special Characters! "
     }

    //  This is for Mobile Validations
    if (Formdata.Mobile === "") {
        error.Mobile = "Required!"
    }
    else if (!mobile_pattern.test(Formdata.Mobile)) {
        error.Mobile = "Enter valid Mobile Number!"
    }

    //  here this is for Postal Code Validations
    if (Formdata.PostalCode === "") {
        error.PostalCode = "Required!"
    }
    // else if (!postal_pattern.test(Formdata.PostalCode)) {
    //     error.PostalCode = "Incorrect Postal Code"
    // }
    else if(!postal_pattern.test(Formdata.PostalCode)){
        error.PostalCode="Must be in Six Numbers!"
    }

    //  this is for Objective validations
    if (Formdata.Objective === "") {
        error.Objective = "Required!"
    }
    else if(Formdata.Objective.length>400){
        error.Objective="Cannot exceed more than 400 words"
    }
   
    if(Formdata.City===""){
        error.City="Required!"
    }

    if(Formdata.State===""){
        error.State="Required!"
    }

    if(Formdata.Address===""){
        error.Address="Required!"
    }

    
    return error;

}
export default Formmdatavalidation