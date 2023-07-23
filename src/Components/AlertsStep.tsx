import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import StepperStep from "./StepperStep";
import {FormControl, FormGroup, Switch} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Alerts, NewCustomerData} from "../types/globalTypes";
import {Control, Controller} from "react-hook-form";


interface AlertsStepProps {
    alerts: Alerts;
    control: Control<NewCustomerData>
}

const AlertsStep: React.FC<AlertsStepProps> = ({alerts, control}) => {
    return (
        <StepperStep title="Alerts">
            <Controller
                name="alerts.lowConversionRate"
                control={control}
                defaultValue={alerts.lowConversionRate}
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Low Conversion Rate"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        required
                    />
                )}
            />
            <Controller
                name="alerts.averageTimeToConvert"
                control={control}
                defaultValue={alerts.averageTimeToConvert}
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Average Time To Convert"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        required
                    />
                )}
            />
            <Controller
                name="alerts.averageImpression"
                control={control}
                defaultValue={alerts.averageImpression}
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Average Impression"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        required
                    />
                )}
            />
            <FormControl component='fieldset' style={{marginBottom: '10px'}}>
                <Typography variant="h6" gutterBottom>
                    No Data
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Controller
                                name="alerts.noDataImpressions"
                                control={control}
                                defaultValue={alerts.noDataImpressions}
                                render={({field}) => (
                                    <Switch
                                        {...field}
                                        checked={field.value}
                                    />
                                )}
                            />
                        }
                        label="Impressions"
                    />
                    <FormControlLabel
                        control={
                            <Controller
                                name="alerts.noDataConversions"
                                control={control}
                                defaultValue={alerts.noDataConversions}
                                render={({field}) => (
                                    <Switch
                                        {...field}
                                        checked={field.value}
                                    />
                                )}
                            />
                        }
                        label="Conversions"
                    />
                </FormGroup>
            </FormControl>

        </StepperStep>
    );
};

export default AlertsStep;
