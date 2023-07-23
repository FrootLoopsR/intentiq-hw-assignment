import React from "react";
import Typography from "@mui/material/Typography";
import {createTheme, ThemeProvider} from "@mui/material";

interface StepperStepProps {
    title: string;
    children: React.ReactNode;
}

const theme = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                style: {margin: "10px"},
            },
        },
    },
});

const StepperStep: React.FC<StepperStepProps> = ({title, children}) => {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </div>
    );
};

export default StepperStep;
