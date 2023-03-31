import React from 'react';
import {createSlice} from '@reduxjs/toolkit'

// here first it will check if any dat is available  then show the card otherwise it simply return a empty string..
const getDataFromLocalStroage = () => {
    let localData = localStorage.getItem("WorkExperience");
    if (localData) {
        return JSON.parse(localData)
    }
    else {
        return []
    }
}

const Myslice2=createSlice({
    initialState:{
        data:getDataFromLocalStroage()
        
    },
    name:"WorkExperience",
    reducers:({
        SendinputFieldsToStore:(state,action)=>{
        
            if(state.data!==null){
                state.data.push(action.payload)
            }
            else{
                state.data=[action.payload]
            }
            localStorage.setItem("WorkExperience",JSON.stringify(state.data));
        },
    })
})
export const{SendinputFieldsToStore}=Myslice2.actions;
export default Myslice2.reducer;