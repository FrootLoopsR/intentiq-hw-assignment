import {configureStore} from "@reduxjs/toolkit";
import customersSlice from "./Slices/customersSlice";

const store = configureStore({
    reducer: customersSlice,
});

type RootState = ReturnType<typeof store.getState>;

export const customers = (state: RootState) => state.customerDataList;

const dataFromLocalStorage = JSON.parse(localStorage.getItem("customerData") || "[]");
store.dispatch({type: "customerData/addMultipleCustomers", payload: dataFromLocalStorage});
export default store;
