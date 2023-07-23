import React from 'react';
import CustomerDataTable from "./Pages/CustomerDataTable";
import {addMultipleCustomers} from "./Store/Slices";
import {mockTableData} from "./types/globalTypes";
import store from "./Store/store";

store.dispatch(addMultipleCustomers(mockTableData))

const App = () => {
    return (
        <>
            <CustomerDataTable/>
        </>
    );
}

export default App;
