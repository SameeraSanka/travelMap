import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style";

const PlaceDetails = ({ placeDetails }) => {
  const classes = useStyles();

  // ----------------------------------------------------------------
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          placeDetails.photo
            ? placeDetails.photo.images.large.url
            : "https://media.houseandgarden.co.uk/photos/64bf9f4e54c3ba0222559f4e/16:9/w_1920%2Cc_limit/6268272cd492cf56510d62c7_Laser_Wolf_Brooklyn_Interior_01-min.png"
        }
        title={placeDetails.name}
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {placeDetails.name}
        </Typography>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {placeDetails.price_level}
          </Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {placeDetails.ranking}
          </Typography>
        </Box>
        {placeDetails?.awards?.map((award) => (
          <Box
            my={1}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="texSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {placeDetails?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {placeDetails?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {placeDetails.address}
          </Typography>
        )}
        {placeDetails?.phone && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <PhoneIcon />
            {placeDetails.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(placeDetails.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(placeDetails.website, "_blank")}
          >
            website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
