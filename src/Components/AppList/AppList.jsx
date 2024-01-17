import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Card,
} from "@material-ui/core";

import useStyles from "./style";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
const AppList = () => {
  const classes = useStyles();
  const [type, setType] = useState("restaurent");
  const [rating, setRating] = useState("");

  const places = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];

  // ----------------------------------------------------------------
  return (
    <div className={classes.container}>
      <Typography varitent="h4">
        Restaurents, Hotels, And Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.tatget.value)}>
          <MenuItem value="restaurent">Restaurents</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attraction">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails placeDetails={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AppList;
