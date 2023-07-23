import React, {useState} from "react";
import CustomerConversionDataTable from "../Components/CustomerConversionDataTable";
import CreateNewCustomerDrawer from "../Components/NewCustomerDrawer";

const CustomerDataTable = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const toggleDrawer = () => {
        setIsDrawerOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <>
            <CustomerConversionDataTable toggleDrawer={toggleDrawer}/>
            <CreateNewCustomerDrawer
                isOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
            />
        </>
    );
};

export default CustomerDataTable;
