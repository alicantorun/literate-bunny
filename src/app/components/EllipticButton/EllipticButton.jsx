import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const EllipticButton = props => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      className={classes.button}
      {...props}
      color="inherit"
    >
      {props.text}
    </Button>
  );
};

export default EllipticButton;

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.54)"
  }
}));
