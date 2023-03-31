import React, { useState } from 'react';
import { Form } from 'react-router-dom';

const Educationdetails = ({ Formdata, SetFormdata,error }) => {
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        SetFormdata((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    return (
        <div className='col-md-6 text-center p-4 card bg-light mx-auto'>
            <div className="row">
                <div className='col-md-5 mx-auto'>
                    <label className='my-1 text-secondary' htmlFor="">Qualification</label><br />
                    <input type="text" className='form-control p-2  shadow-none my-1' value={Formdata.Qualification} onChange={handleChange} name="Qualification" id="" />
                  
                </div>
                <div className='col-md-5 mx-auto'>
                    <label className='my-1 text-secondary' htmlFor="">University</label><br />
                    <input type="text" className='form-control my-1 p-2 shadow-none' value={Formdata.University} onChange={handleChange} name="University" id="" />
               
                </div>
            </div>
            <div className="row">
                <div className='col-md-5 mx-auto'>
                    <label className='my-1 text-secondary' htmlFor="">Degree</label><br />
                    <input type="text" className='form-control p-2  shadow-none my-1' name="Degree" onChange={handleChange} value={Formdata.Degree} />
               
                </div>
                <div className='col-md-5 mx-auto'>
                    <label className='my-1 text-secondary' htmlFor="">Start Year</label><br />
                    {/* <input type="date" className='form-control my-1 p-2 shadow-none' name="SelectYear" onChange={handleChange} value={Formdata.SelectYear} /> */}
                    <select
                        // for adding list of year here..
                        className="form-control my-1 shadow-none p-2 "
                        name="StarYear"
                        value={Formdata.StarYear}
                        onChange={(event => handleChange(event))}
                    >
                        <option value="" className='text-center '>Select a year</option>
                        {StartYear.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                
                </div>
            </div>
            <div className='row'>
                <div className="col-md-5 position">
                    <label className='my-1 text-secondary' htmlFor="">End Year</label><br />
                    {/* <input type="date" name="EndYear" className='form-control my-1 p-2 shadow-none'  onChange={handleChange} value={Formdata.EndYear} /> */}
                    <select
                        // for adding list of year here..
                        className="form-control my-1 shadow-none p-2 pp"
                        name="EndYear"
                        value={Formdata.EndYear}
                        onChange={(event => handleChange(event))}
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
        </div>
    );
};

export default Educationdetails;