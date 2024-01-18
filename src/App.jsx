import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader";
import AppList from "./Components/AppList/AppList";
import AppMap from "./Components/AppMap/AppMap";
import { CssBaseline, Grid } from "@material-ui/core";
import {getPlacesData} from './api/index';
import { useEffect, useState } from "react";


function App() {

const [places, setPlaces] = useState([]);

useEffect(()=>{
  getPlacesData()
  .then((data)=>{
    console.log(data);
    setPlaces(data);
  })
},[]);

// ----------------------------------------------------------------
  return (
    <>
      <CssBaseline />
      <AppHeader />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <AppList />
        </Grid>
        <Grid item xs={12} md={8}>
          <AppMap />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
