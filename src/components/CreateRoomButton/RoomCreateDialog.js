import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CreateRoom from "./CreateRoom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  rootdiv: {
    backgroundColor: "white",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function RoomCreateDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.rootdiv}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Room
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <CreateRoom />
      </Dialog>
    </div>
  );
}
