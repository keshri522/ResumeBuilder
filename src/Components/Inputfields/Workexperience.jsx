import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
const Workexperience = ({ inputFields, setInputFields }) => {
    const focusRef = useRef('');
    // this is the year which will add on the select option to choose a particular years.
    const StartYear = [
        "2025",
        "2024",
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
        "2007",
        "2006",
        "2005",
        "2004",
        "2003",
        "2002",
        "2001",
        "2000",
        "1999",
        "1998",
        "1997",
        "1996",
        "1995",
        "1994",
        "1993",
        "1992",

    ];
    const EndYear = [
        "2027",
        "2026",
        "2025",
        "2024",
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
        "2007",
        "2006",
        "2005",
        "2004",
        "2003",
        "2002",
        "2001",
        "2000",
        "1999",
        "1998",
        "1997",
        "1996",
    ];

    const handleChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);



    }
    // this a function to add the inputs dynamicaly when user clicks on Add new button.
    const AddItems = () => {
        const Newfields = {
            JobTitle: "",
            OrganizationName: "",
            StartYear: "",
            EndYears: ""
        }
        //  this will increase the value  of experience with index.
        // SetIndex((prev)=>prev+1);
        // this is for adding dynamic input fields when user click on addnew
        setInputFields([...inputFields, Newfields]);
        console.log("find data is ", inputFields);

    }
    //  useEffect(() => {
    //         console.log("inputFields:", inputFields);
    //       }, [inputFields]);


    const Delete = (id) => {
        let data = [...inputFields];
        data = data.filter((item, index) => {
            if (id !== index)
                return item;

        })
        setInputFields(data);
        console.log("deleted data is", data);
    }

    return (

        <div className='col-md-6  text-center p-4 card bg-light mx-5 mx-auto' >
            {inputFields.map((input, index) => {
                {/* console.log("items is ", input); */ }

                return (
                    <>
                        <div key={index} >
                            <label className='font-weight flex3 ' htmlFor="">Experience {index + 1}</label>
                            <hr />
                        </div>
                        <div className='row  '>
                            <div className='col-md-5 p-1  mx-auto'>
                                <label className='my-1 text-secondary ' htmlFor="">Job Title</label> <br />
                                <input className='form-control my-1 shadow-none p-2' type="text" name="JobTitle" onChange={(event) => { handleChange(index, event) }} value={input.JobTitle} placeholder='Enter job title' />
                               
                            </div>
                            <div className='col-md-5 p-1 mx-auto'>
                                <label className='my-1 text-secondary ' htmlFor="">Organization Name</label>   <br />
                                <input className='form-control my-1 shadow-none p-2' type="text" name="OrganizationName" onChange={(event => handleChange(index, event))} value={input.OrganizationName} placeholder='Enter organization name' />

                            </div>

                        </div>
                        <div className='row  '>
                            <div className='col-md-5  p-1 mx-auto'>
                                <label className='my-1 text-secondary' htmlFor="date1">Start Year</label> <br />
                                {/* <input className='form-control my-1 shadow-none p-2' type="date" id="date1" name="StartYear" onChange={(event=>handleChange(index,event))}  value={inputFields.StartYear} /> */}
                                {/* this just for adding list of year in the select option using map function. */}
                                <select
                                    className="form-control my-1 shadow-none p-2"
                                    name="StartYear"
                                    value={input.StartYear}
                                    onChange={(event => handleChange(index, event))}
                                >
                                    <option value="" className='text-center'>Select a year</option>
                                    {StartYear.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            


                            </div>
                            <div className='col-md-5 p-1 mx-auto'>
                                <label className='my-1 text-secondary ' htmlFor="date2">End Year</label>   <br />
                                {/* <input className='form-control my-1 shadow-none p-2' type="date" id="date2" name="EndYears" value={inputFields.EndYears} onChange={(event => handleChange(index, event))} /> */}
                                {/* this just for adding list of year in the select option using map function. */}
                                <select
                                    className="form-control my-1 shadow-none p-2"
                                    name="EndYears"
                                    value={input.EndYears}
                                    onChange={(event => handleChange(index, event))}
                                >
                                    <option value="" className='text-center'>Select a year</option>
                                    {EndYear.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            
                            </div>
                        </div>
                        <div>
                            {/* adding dynamic conditional delete buttons here */}
                            {inputFields.length && inputFields.length > 1 ? (
                                <div>
                                    <span typeof='button' 
                                        onClick={() => Delete(index)}  >                                  
                                        <FontAwesomeIcon className='text-danger' icon={faTrash}></FontAwesomeIcon>
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    </>
                )
            })}
            <div>
                {/* this is for changing the dynamic value of Experience index..when user click on add new */}
                <span onClick={AddItems}
                    type="button" className='text-primary text-hover my-2 flex3'>Add New</span>
            </div>
        </div>
    );
}
export default Workexperience;


