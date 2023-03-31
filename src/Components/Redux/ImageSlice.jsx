import { createSlice } from "@reduxjs/toolkit";


const getDataFromLocalStroage = () => {
    let localData = localStorage.getItem("Image");
    if (localData) {
        return JSON.parse(localData)
    }
    else {
        return []
    }
}
const ImageSlice=createSlice({
    initialState:{
        data:getDataFromLocalStroage()
    },
    name:"Imagedata",
    reducers:({
        SendImagetoStore:(state,action)=>{
         
            if(state.data!==null){
                state.data.push(action.payload)
            }
           else{
            state.data=[action.payload]
           }   
            localStorage.setItem("Image",JSON.stringify(state.data));
        }
    })

})
export const {SendImagetoStore}=ImageSlice.actions;
export default ImageSlice.reducer;