import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Customer from '../../assets/Customer.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "50px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: "#1de9b6",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function BookedCustomers(props) {
  const classes = useStyles();
  const {
    roomName,
    roomId,
    name,
    bookingDate,
    startTime,
    endTime,
    amount,
  } = props.order;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={Customer} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  CUSTOMER : {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ROOM NAME : {roomName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ROOM ID: {roomId}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  BOOKING DATE : {bookingDate}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  START TIME : {startTime}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  END TIME : {endTime}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">INR {amount}/-</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
