import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useUserContext } from "../UserProvider/UserProvider";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../appRoutes";
import EllipticButton from "../EllipticButton/EllipticButton";

export default function FormDialog() {
  const history = useHistory();
  const { login } = useUserContext();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName("");
  };

  const handleLogin = () => {
    login(name);
    if (name)
      history.push({
        pathname: `${ROUTES.HOME}`
      });
    setOpen(false);
  };

  return (
    <div>
      <EllipticButton text={"Start"} onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText color="textPrimary">
            Please enter your name to login
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            onChange={handleNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
