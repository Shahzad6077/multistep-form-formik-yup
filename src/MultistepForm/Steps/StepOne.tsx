import React, { FC } from "react";
import * as yup from "yup";
import { object } from "yup";
import FormikStep from "../FormikStep";
import { Field } from "formik";
import { CheckboxWithLabel, TextField } from "formik-material-ui";
import { Box } from "@material-ui/core";

type Props = {
  isActiveStepper?: boolean;
};

const Index: FC<Props> = () => {
  //   const classes = useStyles();
  return (
    <FormikStep
      label="Enter your Email"
      validationSchema={object({
        email: yup.string().email().required(),
        promoEmail: yup.boolean().required(),
      })}
    >
      <Box paddingBottom={2}>
        <Field fullWidth name="email" component={TextField} label="Email" />
      </Box>
      <Box paddingBottom={2}>
        <Field
          name="promoemail"
          type="checkbox"
          component={CheckboxWithLabel}
          Label={{ label: "I want to recieve promo emails" }}
          color="primary"
        />
      </Box>
    </FormikStep>
  );
};

export default Index;
