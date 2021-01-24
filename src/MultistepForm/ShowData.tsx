import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { FormikValues, useFormikContext } from "formik";
import { FORM_VALUES_TYPE } from "./Multistep.interface";
type Props = {
  open: boolean;
  handleClick: () => void;
  handleClose: (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => void;
  values: FORM_VALUES_TYPE | null | FormikValues;
};
const ShowDataSnackbar: FC<Props> = ({
  open,
  handleClick,
  handleClose,
  values,
}) => {
  const msg = values
    ? Object.entries(values).map((arr) => <p>{`${arr[0]}: ${arr[1]}`}</p>)
    : "No values";
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={8000}
        onClose={handleClose}
        message={msg}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default ShowDataSnackbar;
