import { FormikConfig, FormikValues } from "formik";
export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}
export interface FORM_VALUES_TYPE {
  email: string;
  promoemail: boolean;
  password: string;
  description: string;
  role: string;
}
