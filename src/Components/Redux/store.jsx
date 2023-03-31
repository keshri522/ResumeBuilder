import { configureStore } from "@reduxjs/toolkit";

import rootreducer from "./combinereducers";

const store=configureStore({
    reducer:{
        rootreducer
    }
})
export default store;


