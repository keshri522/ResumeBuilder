import React from 'react';
import { createSlice } from '@reduxjs/toolkit'
// here first it will check if any dat is available  then show the card otherwise it simply return a empty string..
const getDataFromLocalStroage = () => {
    let localData = localStorage.getItem("Skills");
    if (localData) {
        return JSON.parse(localData)
    }
    else {
        return []
    }
}
const Myslice3 = createSlice({
    initialState: {
        data: getDataFromLocalStroage()
    },
    name: "SkillsInfo",
    reducers: ({
        SendSkillInfoToStore: (state, action) => {
          
            if (state.data !== null) {
                state.data.push(action.payload)
            }
            else {
                state.data = [action.payload]
            }
            localStorage.setItem("Skills", JSON.stringify(state.data));
        }
    })
})
export const { SendSkillInfoToStore } = Myslice3.actions;
export default Myslice3.reducer;

// const x={
//     name:"rahul",
//     age:"22",
//     gender:"male",
//     professional:"Working"
// }
// // converting thos into array..
// let change=Object.keys(x);
// let find=Object.values(x);
// console.log(find);
// change.forEach((i)=>{
//     console.log(i,x[i]);
// })
// const abc=Object.entries(x);
// console.log(abc[0][1]);



