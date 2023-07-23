import React from "react";
import TextField from "@mui/material/TextField";
import StepperStep from "./StepperStep";
import {Details, NewCustomerData} from "../types/globalTypes";
import {Control, Controller} from "react-hook-form";


interface DetailsStepProps {
    details: Details;
    control: Control<NewCustomerData>
}

const DetailsStep: React.FC<DetailsStepProps> = ({details, control}) => {
    return (
        <StepperStep title="Details">
            <Controller name='details.startDate' control={control} render={({field}) => (
                <TextField
                    sx={{width: '100%'}}
                    label="Start Date"
                    value={details.startDate}
                    onChange={(date) => field.onChange(date)}
                    type='date'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                />)}/>

            <Controller name='details.endDate' control={control} render={({field}) => (
                <TextField
                    sx={{width: '100%'}}
                    label="End Date"
                    onChange={(date) => field.onChange(date)}
                    type='date'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                />)}/>

            <Controller
                name="details.customerName"
                control={control}
                defaultValue=""
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Customer Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="text"
                        required
                    />)}/>
        </StepperStep>
    );
};

export default DetailsStep;
