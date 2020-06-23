import React from "react";
import { Grid } from "@material-ui/core";
import roomList from "../../constants"
import RoomsInfo from './RoomsInfo/RoomsInfo'

const Content = () => {
  const getRoomCard = roomObj => {
    return (
      <Grid item xs={12} sm={4}>
        <RoomsInfo {...roomObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {roomList.map(roomObj => getRoomCard(roomObj))}
    </Grid>
  );
};

export default Content;