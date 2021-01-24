import React, { FC } from "react";
import * as yup from "yup";
import { object } from "yup";
import FormikStep from "../FormikStep";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { Box } from "@material-ui/core";

type Props = {
  isActiveStepper?: boolean;
};

const Index: FC<Props> = () => {
  //   const classes = useStyles();
  return (
    <Box paddingBottom={2} paddingTop={2}>
      <Field
        fullWidth
        name="password"
        type="password"
        component={TextField}
        label="Password"
      />
    </Box>
  );
};

export default Index;
