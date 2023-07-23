import React from "react";
import TextField from "@mui/material/TextField";
import StepperStep from "./StepperStep";
import {NewCustomerData, Tags} from "../types/globalTypes";
import {Control, Controller} from "react-hook-form";


interface TagsStepProps {
    tags: Tags;
    control: Control<NewCustomerData>
}

const TagsStep: React.FC<TagsStepProps> = ({tags, control}) => {
    return (
        <StepperStep title="Tags">
            <Controller
                name="tags.attributeMatches"
                control={control}
                defaultValue={tags.attributeMatches}
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Attribute Matches"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="number"
                    />
                )}
            />
        </StepperStep>
    );
};

export default TagsStep;
