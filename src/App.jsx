import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader";
import AppList from "./Components/AppList/AppList";
import AppMap from "./Components/AppMap/AppMap";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api/index";
import { useEffect, useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);
  const [coodinates, setCoodinates] = useState();
  const [bounds, setBounds] = useState({}); // set the bounds for the map (top bottom corners)

  //get current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoodinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    // console.log(coodinates, bounds);

    // Check if bounds is defined before making the API call
    if (bounds && bounds.sw && bounds.ne) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        // console.log(data);
        setPlaces(data);
      });
    }

    // // using bounds sw and ne now we can see the restaurant and others in the map
    // getPlacesData(bounds.sw, bounds.ne).then((data) => {
    //   console.log(data);
    //   setPlaces(data);
    // });
  }, [coodinates, bounds]);

  // ----------------------------------------------------------------
  return (
    <>
      <CssBaseline />
      <AppHeader />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <AppList  places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <AppMap
            setCoodinates={setCoodinates}
            setBounds={setBounds}
            coodinates={coodinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
