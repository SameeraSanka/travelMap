import GoogleMapReact from "google-map-react";
import React from "react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon  from "@material-ui/icons/LocationOnOutlined";
// import Rating from '@material-ui/lab'

import useStyles from "./style";
const AppMap = ({ setCoodinates, setBounds, coodinates, places }) => {
  const classes = useStyles();
  const matches  = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAi9j6hoaDu3IFUD3hrGhbwWUJih_34qns" }}
        defaultCenter={coodinates}
        center={coodinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoodinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={""}
      >
        {places.length && places.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            
            {!matches  ? (
              <LocationOnOutlinedIcon  color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://media.houseandgarden.co.uk/photos/64bf9f4e54c3ba0222559f4e/16:9/w_1920%2Cc_limit/6268272cd492cf56510d62c7_Laser_Wolf_Brooklyn_Interior_01-min.png"
                  }
                  alt={place.name}
                />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default AppMap;
