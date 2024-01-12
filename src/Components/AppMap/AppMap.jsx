import GoogleMapReact from 'google-map-react'
import React from 'react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
// import Rating from '@material-ui/lab'

import useStyles from './style'
const AppMap = () => {

const classes = useStyles();
const isMoble = useMediaQuery('(min-width:600px)');

const coordinates = {lat:0, lng:0};
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
      bootstrapURLKeys={{key:'AIzaSyAi9j6hoaDu3IFUD3hrGhbwWUJih_34qns'}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50,50,50,50]}
      options={''}
      onChange={''}
      onChildClick={''}>

      </GoogleMapReact>
    </div>
  )
}

export default AppMap