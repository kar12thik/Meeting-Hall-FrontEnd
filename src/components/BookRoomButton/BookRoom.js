import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";
import axios from "axios";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Meeting Room by Karthik
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function BookRoom() {
  const classes = useStyles();

  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("11:00");
  const [bookingDate, setBookingDate] = useState(new Date());
  const [message, setMessage] = useState("");

  const onChange1 = (time) => setStartTime(time);
  const onChange2 = (time) => setEndTime(time);
  const onChange3 = (date) => setBookingDate(date);
  const fnameHandler = (e) => setfName(e.target.value);
  const lnameHandler = (e) => setlName(e.target.value);
  const roomIdHandler = (e) => setRoomId(e.target.value);

  const bookRoomHandler = (event) => {
    event.preventDefault();
    const modifiedDate =
      bookingDate.getFullYear() +
      "-" +
      bookingDate.getMonth() +
      "-" +
      bookingDate.getDate();
    axios
      .post("https://meeting-hall-backend.herokuapp.com/customers/create", {
        firstName: fname,
        lastName: lname,
        bookingDate: modifiedDate,
        startTime,
        endTime,
        roomId: roomId,
      })
      .then((response) => {
        setMessage(response.data.message);
        console.log("SUccess");
      })
      .catch((error) => {
        console.log(error)
        console.log("Failiure");
        setMessage(error.response.data.message);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Book Rooms
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={fnameHandler}
                value={fname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={lnameHandler}
                value={lname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="roomid"
                label="Room Id"
                type="text"
                id="roomid"
                autoComplete="rid"
                onChange={roomIdHandler}
                value={roomId}
              />
            </Grid>
            <Grid item xs={12}>
              <span>Booking Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <DatePicker
                minDate={new Date()}
                dateFormat="YYYY/mm/dd"
                onChange={onChange3}
                value={bookingDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <span>Start Time </span>
              <TimePicker onChange={onChange1} value={startTime} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <span>End Time </span>
              <TimePicker onChange={onChange2} value={endTime} />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={bookRoomHandler}
          >
            Submit
          </Button>
          {message !== "" ? (
            <Grid container>
              <Grid item xs={12} sm={12}>
                {message}
              </Grid>
            </Grid>
          ) : null}
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
