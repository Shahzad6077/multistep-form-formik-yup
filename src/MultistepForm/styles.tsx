import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  formWrapper: {
    // display: "flex",
  },

  stepperLabelWrapper: {},
  stepperContentWrapper: {
    // flexBasis: "70%",
  },
  stepperContent: {
    // border: "1px solid",
  },

  stepLabelSpan: {
    "& span": {
      fontWeight: 700,
    },
  },
}));

export default useStyles;
