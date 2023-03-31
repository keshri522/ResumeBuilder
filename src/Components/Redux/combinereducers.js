import { combineReducers } from '@reduxjs/toolkit';
import MySlice1 from './Formdatslice'
import Myslice2 from  './workdataslice'
import Myslice3 from './skilldataslice'
import ImageSlice from './ImageSlice';
 const rootreducer= combineReducers({
    // here from ,work,Skill,Image all are the name of state which will take care of all the ruducers belongs to that
    Form:MySlice1,
    Work:Myslice2,
    Skill:Myslice3,
    Image:ImageSlice
})

export default rootreducer;