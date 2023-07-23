import React from "react";
import TextField from "@mui/material/TextField";
import StepperStep from "./StepperStep";
import {Configurations, NewCustomerData} from "../types/globalTypes";
import {Control, Controller} from "react-hook-form";

interface ConfigurationsStepProps {
    configurations: Configurations;
    control: Control<NewCustomerData>
}

const ConfigurationsStep: React.FC<ConfigurationsStepProps> = ({configurations, control}) => {

    return (
        <StepperStep title="Configurations">
            <Controller
                name="config.impression"
                control={control}
                defaultValue={configurations.impression}
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Impression"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        required
                        type="number"
                    />
                )}
            />
            <Controller
                name="config.conversion"
                control={control}
                defaultValue={configurations.conversion}
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Conversion"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="number"
                        required
                    />
                )}
            />
            <Controller
                name="config.conversionRate"
                control={control}
                defaultValue={configurations.conversionRate}
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Conversion Rate"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="number"
                        required
                    />
                )}
            />
        </StepperStep>
    );
};

export default ConfigurationsStep;
