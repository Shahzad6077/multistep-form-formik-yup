import React, { FC, Fragment } from "react";
import * as yup from "yup";
import { mixed, number, object } from "yup";
import FormikStep from "../FormikStep";
import { Field, useField, useFormikContext } from "formik";
import { TextField, RadioGroup } from "formik-material-ui";
import { FormControlLabel, Radio, Box } from "@material-ui/core";
type Props = {
  isActiveStepper?: boolean;
};

const Index: FC<Props> = () => {
  //   const classes = useStyles();
  const { isSubmitting } = useFormikContext();
  const [field, meta] = useField({ name: "role", type: "radio" });
  return (
    <Fragment>
      <Box paddingBottom={2} paddingTop={2}>
        <Field
          fullWidth
          name="description"
          component={TextField}
          label="Description"
        />
      </Box>
      <Box paddingBottom={2} paddingTop={2}>
        <Field component={RadioGroup} name="role">
          <FormControlLabel
            value="developer"
            control={<Radio color="primary" />}
            label="Developer"
          />
          <FormControlLabel
            value="designer"
            control={<Radio color="primary" />}
            label="Designer"
          />
          <FormControlLabel
            value="cloud-developer"
            control={<Radio color="primary" />}
            label="Cloud Developer"
          />
        </Field>
      </Box>
    </Fragment>
  );
};

export default Index;
