import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from 'axios'

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
  root: {
    backgroundColor: "white",
  },
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    roomName: "Mercury",
  });

  const [message, setMessage] = useState('')
  const handleChange = (event) => {
    // const name = event.target.name;
    console.log(event.target.name);
    console.log(event.target.value);
    setState({
      ...state,
      roomName: event.target.value,
    });
  };

  const roomHandler = (event) => {
    event.preventDefault();
    console.log(state.roomName);
    axios
      .post("https://meeting-hall-backend.herokuapp.com/rooms/create", state)
      .then((response) => {
        // dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        console.log(response)
        setMessage(response.data.message)
        console.log('SUccess')
      })
      .catch((error) => {
        // dispatch(purchaseBurgerFail(error));
        setMessage(error.message)
        console.log('Failiure')
      });
  };
  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Room
        </Typography>
        <form className={classes.form} noValidate>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Rooms</InputLabel>
            <Select
              native
              value={state.roomName}
              onChange={handleChange}
              label="Room"
              inputProps={{
                name: "Rooms",
                id: "outlined-age-native-simple",
              }}
            >
              {/* <option aria-label="None" value="" /> */}
              <option value="MERCURY">Mercury</option>
              <option value="VENUS">Venus</option>
              <option value="EARTH">Earth</option>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={roomHandler}
          >
            Submit
          </Button>
          {message !== "" ? (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {message}
              </Grid>
            </Grid>
          ) : null}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
