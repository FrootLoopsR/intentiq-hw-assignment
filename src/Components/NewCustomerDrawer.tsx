import React, {useState} from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import DetailsStep from "./DetailsStep";
import ConfigurationsStep from "./ConfigurationsStep";
import TagsStep from "./TagsStep";
import AlertsStep from "./AlertsStep";
import {Paper, PaperProps} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {NewCustomerData} from "../types/globalTypes";
import {useDispatch} from "react-redux";
import {createCustomerData} from "../utils/utils";
import {useForm} from 'react-hook-form';
import {addCustomerData} from "../Store/Slices";

interface DrawerWithStepperProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}

const initialDataState: NewCustomerData = {
    details: {
        startDate: "",
        endDate: "",
        customerName: "",
    },
    config: {
        impression: 0,
        conversion: 0,
        conversionRate: 0,
    },
    tags: {
        attributeMatches: 0,
    },
    alerts: {
        lowConversionRate: 0,
        averageTimeToConvert: 0,
        averageImpression: 0,
        noDataImpressions: false,
        noDataConversions: false,
    },
};

const NewCustomerDrawer: React.FC<DrawerWithStepperProps> = ({
                                                                 isOpen,
                                                                 toggleDrawer,
                                                             }) => {

    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(0);
    const {control, handleSubmit, watch, reset} = useForm<NewCustomerData>({
        defaultValues: initialDataState,
    });

    const steps = [
        {
            title: "Details",
            component: (
                <DetailsStep
                    details={watch("details")}
                    control={control}
                />
            ),
        },
        {
            title: "Configurations",
            component: (
                <ConfigurationsStep
                    configurations={watch("config")}
                    control={control}
                />
            ),
        },
        {
            title: "Tags",
            component: (
                <TagsStep
                    tags={watch("tags")}
                    control={control}
                />
            ),
        },
        {
            title: "Alerts",
            component: (
                <AlertsStep
                    alerts={watch("alerts")}
                    control={control}
                />
            ),
        },
    ];

    const handleNextStep = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const onSubmit = (data: NewCustomerData) => {
        const convertedToCustomerData = createCustomerData(data);
        dispatch(addCustomerData(convertedToCustomerData));
        toggleDrawer();
        reset(initialDataState);
        setActiveStep(0);
    };

    const drawerWidthStyle: PaperProps = {
        style: {
            width: "550px",
        },
    };

    return (
        <>
            <Drawer anchor="right" open={isOpen} onClose={() => {
                toggleDrawer();
                setActiveStep(0)
            }}>
                <Paper {...drawerWidthStyle}>
                    <Stepper style={{margin: "20px"}} activeStep={activeStep}>
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <StepLabel>{step.title}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Card sx={{margin: "5px", maxWidth: "400px", boxShadow: '0'}}>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {steps[activeStep].component}

                                {activeStep > 0 && (
                                    <Button
                                        style={{margin: '5px'}}
                                        onClick={handlePrevStep}
                                        variant="outlined"
                                        color="primary"
                                    >
                                        Back
                                    </Button>
                                )}
                                {activeStep < steps.length - 1 && (
                                    <Button
                                        style={{margin: '5px'}}
                                        onClick={handleNextStep}
                                        variant="contained"
                                        color="primary"
                                    >
                                        Next
                                    </Button>
                                )}
                                {activeStep === steps.length - 1 && (
                                    <Button
                                        style={{margin: '5px'}}
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Create New Customer
                                    </Button>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </Paper>
            </Drawer>
        </>
    );
};

export default NewCustomerDrawer;
