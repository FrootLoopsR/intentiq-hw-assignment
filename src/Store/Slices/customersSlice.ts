import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CustomerData} from "../../types/globalTypes";

interface CustomerDataState {
    customerDataList: CustomerData[];
}

const dataFromLocalStorage = JSON.parse(localStorage.getItem("customerData") || "[]");
const initialState: CustomerDataState = {
    customerDataList: dataFromLocalStorage,
};

export const updateLocalStorage = (state: CustomerDataState): void => {
    localStorage.setItem("customerData", JSON.stringify(state.customerDataList));
};

const customerDataSlice = createSlice({
    name: "customerData",
    initialState,
    reducers: {
        addCustomerData: (state, action: PayloadAction<CustomerData>) => {
            state.customerDataList.push(action.payload);
            updateLocalStorage(state)
        },
        addMultipleCustomers: (state, action: PayloadAction<CustomerData[]>) => {
            if (!state.customerDataList.length)
                state.customerDataList = action.payload;
        },
    },
});

export const {addCustomerData, addMultipleCustomers} = customerDataSlice.actions;
export default customerDataSlice.reducer;
