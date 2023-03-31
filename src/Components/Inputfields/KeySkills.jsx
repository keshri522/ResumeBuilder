import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useState } from 'react';
const KeySkills = ({ SkillInfo, SetSkillInfo }) => {
    const handleChange = (index, event) => {
        // here we  basically pass the index when user click on add according to index value its uppdated..
        let data = [...SkillInfo];
        data[index][event.target.name] = event.target.value;
        SetSkillInfo(data);

    }

    const addSkill = () => {
        const addfields = {
            FirstSkill: "",
            SecondSkill: ""
        }
        SetSkillInfo([...SkillInfo, addfields])
    }
// this is the delete function takes a id and filter the data and return items
    const Delete = (id) => {
        let data = [...SkillInfo];
        data = data.filter((item, index) => {
            if (id !== index)
                return item;
        })
        // setting all the data back to SkillInfo
        SetSkillInfo(data);

    }
    return (
        <>
            <div className='col-md-7 card text-center bg-light mx-auto p-4'>
                <div>
                    <label className='font-weight flex3 ' htmlFor="">Key Skills</label>
                    <hr />

                </div>

                {SkillInfo.map((input, index) => {

                    return (
                        <div className='row ' key={index}>
                            <div className='col-md-5 p-1  mx-auto'>
                                <label className='my-1 text-secondary ' htmlFor="">Enter Skills</label> <br />
                                <input className='form-control my-1 shadow-none p-2' type="text" name="FirstSkill" onChange={(event) => { handleChange(index, event) }} value={input.FirstSkill} placeholder='Add your Skill' />
                            </div>
                            <div className='col-md-5 p-1 mx-auto'>
                                <label className='my-1 text-secondary ' htmlFor="">Enter Skills</label>   <br />
                                <input className='form-control my-1 shadow-none p-2' type="text" name="SecondSkill" onChange={(event => handleChange(index, event))} value={input.SecondSkill} placeholder='Add your  Skill' />
                            </div>


                            {SkillInfo.length && SkillInfo.length > 1 ? (
                                <div>
                                    <span                   
                                        onClick={() => Delete(index)}
                                    >
                                        <FontAwesomeIcon className='text-danger' icon={faTrash}></FontAwesomeIcon>
                                    </span>
                                </div>
                            ) : null}

                        </div>
                    )
                })}
                <div className=''>
                    {/* this is for changing the dynamic value of Experience index..when user click on add new */}
                    <span onClick={addSkill}
                        type="button" className='text-primary my-2 flex3  text '>Add New</span>
                </div>
            </div>
        </>
    );
};

export default KeySkills;