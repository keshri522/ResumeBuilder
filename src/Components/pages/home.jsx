import React, { useState, } from 'react';
import PersonalInfo from '../Inputfields/PersonalInfo';
import Workexperience from '../Inputfields/Workexperience';
import Educationdetails from '../Inputfields/Educationdetails';
import KeySkills from '../Inputfields/KeySkills';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SendFormdataToStore } from '../Redux/Formdatslice';
import { SendSkillInfoToStore } from '../Redux/skilldataslice';
import { SendinputFieldsToStore } from '../Redux/workdataslice';
import { SendImagetoStore } from '../Redux/ImageSlice';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleCheck, faMarker } from '@fortawesome/free-solid-svg-icons';
import Formmdatavalidation from "../Validation/Formmdatavalidation"

const Home = () => {
    //  this is a state for the Validations of a Form Data page
    const [error, Seterror] = useState({})

    // this function is used to add a blur effect it will add a class once user clicked on a button then all the  css to the class will apply
    function toggle() {
        const blur = document.getElementById("blur")
        blur.classList.toggle("active");
    }
    // here we show the message on clicking on a submit button that your resume is created successfully intially i make it flase when user click on submit it become true.
    const [ShowMessage, setShowMessage] = useState(false);

    const navigate = useNavigate();
    // for dispatch a action to the store 
    const dispatch = useDispatch();
    // just for once user submit the buttom it will redirect to page===0;

    // for the image in resume
    const [titleimg, Settitleimg] = useState("");
    // for getting all the data from diffrent pages
    const [Formdata, SetFormdata] = useState({

        Firstname: '',
        Lastname: '',
        Email: '',
        Mobile: '',
        Address: '',
        City: '',
        State: '',
        PostalCode: '',
        Objective: '',
        Qualification: "",
        University: "",
        Degree: "",
        StarYear: "",
        EndYear: "",
      
    })
    // this is just a props passing to Workexperience components to get all the data into home compoents ..
    const [inputFields, setInputFields] = useState([{
        JobTitle: "",
        OrganizationName: "",
        StartYear: "",
        EndYears: ""
    }])
    // this is just a props passing to Skill  components to get all the data into home compoents ..
    const [SkillInfo, SetSkillInfo] = useState([{
        FirstSkill: "",
        SecondSkill: ""
    }])
    // console.log("the initial data is",inputFields);

    const [Page, SetPage] = useState(0);
    // this is for just heading of our form which whill dynamically change ...
    const FormHeader = ["Personal Info", "Work Experience", "Education Details", "Skills"]
    const DisplayPage = useCallback(() => {
        if (Page == 0) {
            return <PersonalInfo titleimg={titleimg} Settitleimg={Settitleimg} error={error} Formdata={Formdata} SetFormdata={SetFormdata}></PersonalInfo>
        }
        else if (Page == 1) {
            return <Workexperience inputFields={inputFields} setInputFields={setInputFields}></Workexperience>
        }
        else if (Page == 2) {
            return <Educationdetails Formdata={Formdata}   SetFormdata={SetFormdata}></Educationdetails>
        }
        else {
            return <KeySkills SkillInfo={SkillInfo} SetSkillInfo={SetSkillInfo} ></KeySkills>
        }
    })
    return (
        <>
       
            {/* here we  basically write a condition showMessagebased  on click of a button... */}
            <div className={ShowMessage ? "blurs" : ""}>
                {ShowMessage && <div className='message'><FontAwesomeIcon className='mx-2 fs-5 text-primary' icon={faCircleCheck}></FontAwesomeIcon>Created Successfully redirecting to MyResumes </div>}
            </div>
            <div className=' container text-center   my-4 ' id="blur">
                <div className='form-container   '>
                    <div className='header my-3  '>
                        {/* here we rendering the h2 tage based on page number  */}
                        <h2 style={{ color: "#B53471" }}>{FormHeader[Page]}</h2>
                    </div>
                    <div className='body'>
                        {DisplayPage()}
                    </div>
                    <div className='footer my-3   '>
                        {/* if page is  less less than zero then not show prev buttons it show only if page>0. */}
                        {Page > 0 && (
                            <button onClick={() => {
                                SetPage((prev) => prev - 1);
                            }}
                                className='prevbtn mx-2 px-4' >Prev</button>
                        )}
                        {Page < FormHeader.length && (
                            <button type="submit" onClick={(() => {
                                // here if page==lastpage.length-1 the it shows a submit buttons
                                if (Page === FormHeader.length - 1) {
                                    setShowMessage(true);
                                    setTimeout(() => {
                                        setShowMessage(false);
                                        navigate('/myresume')
                                    }, 2000)
                                    // when we click on a submit the toggle function will execute and add a class
                                    toggle();

                                    // here we dispatching the action to the Global store of the applications which is store..
                                    dispatch(SendFormdataToStore(Formdata));
                                    dispatch(SendSkillInfoToStore(SkillInfo));
                                    dispatch(SendinputFieldsToStore(inputFields));
                                    dispatch(SendImagetoStore(titleimg));
                                    // now clearing all the input fields while clicking on submit and also redircet to Home.page
                                    SetFormdata({
                                        titleimg: "",
                                        Firstname: '',
                                        Lastname: '',
                                        Email: '',
                                        Mobile: '',
                                        Address: '',
                                        City: '',
                                        State: '',
                                        PostalCode: '',
                                        Objective: '',
                                        Qualification: "",
                                        University: "",
                                        Degree: "",
                                        SelectYear: "",
                                        EndYear: ""
                                        ,
                                    })
                                    setInputFields([{
                                        JobTitle: "",
                                        OrganizationName: "",
                                        StartYear: "",
                                        EndYears: ""
                                    }])
                                    SetSkillInfo([{
                                        FirstSkill: "",
                                        SecondSkill: ""
                                    }])
                                    // alert("Created Successfuly go to Myresume");

                                }
                                else {
                                    // here it shows a next buttons

                                    // The Object.keys(faults).length === 0 condition checks if there are no faults by checking the length of the keys in the faults object. If there are no faults, the code sets the page state using the SetPage function and clears any previous errors by setting the Seterror state to an empty string.
                                    const faults = Formmdatavalidation({ Formdata })
                                    if (Object.keys(faults).length === 0) {
                                        SetPage((prev) => prev + 1)
                                        Seterror("");
                                       
                                     
                                    }

                                    // if all the above condtions matches then simply return and  call a Formmdatavalidation function to check validation if not matches then return next button will not work

                                    else {
                                        // Object.keys(error).length>0
                                        // SetPage((prev) => prev + 1)
                                        // Seterror("");
                                        Seterror(faults);
                                    }
                                }
                            })}

                                className='nextbtn mx-2 px-4'>
                                {Page === FormHeader.length - 1 ? "Submit" : "Next"}
                            </button>
                        )}
                        <div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Home;