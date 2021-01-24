import { Box, Card, CardContent } from "@material-ui/core";
import { Field } from "formik";
import { CheckboxWithLabel, TextField } from "formik-material-ui";
import React, { useState } from "react";
import * as yup from "yup";
import { object } from "yup";
import FormikStep from "./FormikStep";
import FormikStepper from "./FormikFormStepper";
import { FC } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";

const INITIAL_VALUES = {
  email: "",
  promoemail: false,
  password: "",
  description: "",
  role: "",
};
const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));
const MultiStepForm: FC = () => {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={INITIAL_VALUES}
          onSubmit={async (values, { resetForm }) => {
            await sleep(1000);
            console.log("values", values);
            resetForm({ values: INITIAL_VALUES });
          }}
        >
          <FormikStep
            label="Enter your Email"
            validationSchema={object({
              email: yup.string().email().required(),
              promoemail: yup.boolean().isTrue().required(),
            })}
          >
            <StepOne />
          </FormikStep>
          <FormikStep
            label="Set Password"
            validationSchema={object({
              password: yup.string().min(8).required(),
            })}
          >
            <StepTwo />
          </FormikStep>
          <FormikStep
            label="More info"
            validationSchema={object({
              description: yup.string().min(8).required(),
              role: yup.string().required(),
            })}
          >
            <StepThree />
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );
};

export default MultiStepForm;
