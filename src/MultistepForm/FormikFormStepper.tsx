import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  Stepper,
  StepContent,
} from "@material-ui/core";
import { Form, Formik, FormikConfig, FormikValues } from "formik";
import React, { useState } from "react";
import { FormikStepProps, FORM_VALUES_TYPE } from "./Multistep.interface";
import ShowDataSnackbar from "./ShowData";

import useStyles from "./styles";

const FormikStepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
  const classes = useStyles();
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);
  const [showDataOpen, setShowDataOpen] = useState<boolean>(false);
  const [showValues, setShowValues] = useState<
    FORM_VALUES_TYPE | null | FormikValues
  >(null);
  const handleClick = () => {
    setShowDataOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setShowDataOpen(false);
  };

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setShowValues(values);
          console.log(values);
          setCompleted(true);
          setStep(0);
          handleClick();
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form autoComplete="off" className={classes.formWrapper}>
          <Stepper
            alternativeLabel={false}
            activeStep={step}
            orientation="vertical"
            className={classes.stepperLabelWrapper}
          >
            {childrenArray.map((child, index) => {
              return (
                <Step
                  key={`${child.props.label}-${index}`}
                  completed={!!(step > index) || !!completed}
                >
                  <StepLabel className={classes.stepLabelSpan}>
                    {child.props.label}
                  </StepLabel>
                  <StepContent>
                    <Box className={classes.stepperContent}>{currentChild}</Box>
                  </StepContent>
                </Step>
              );
            })}

            <Box className={classes.stepperContentWrapper}>
              {/* <Box my={2}>
                {Object.entries(errors).map((arr, i) => {
                  return (
                    <Alert
                      key={i}
                      severity="error"
                      style={{ marginTop: "4px" }}
                    >
                      {`${arr[1]}`}
                    </Alert>
                  );
                })}
              </Box> */}
              <Grid container spacing={2}>
                {step > 0 ? (
                  <Grid item>
                    <Button
                      disabled={isSubmitting}
                      variant="contained"
                      color="primary"
                      onClick={() => setStep((s) => s - 1)}
                    >
                      Back
                    </Button>
                  </Grid>
                ) : null}
                <Grid item>
                  <Button
                    startIcon={
                      isSubmitting ? <CircularProgress size="1rem" /> : null
                    }
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    {isSubmitting
                      ? "Submitting"
                      : isLastStep()
                      ? "Submit"
                      : "Next"}
                  </Button>
                </Grid>
              </Grid>
              <ShowDataSnackbar
                open={showDataOpen}
                handleClick={handleClick}
                handleClose={handleClose}
                values={showValues}
              />
            </Box>
          </Stepper>
        </Form>
      )}
    </Formik>
  );
};
export default FormikStepper;
