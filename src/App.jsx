import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader";
import AppList from "./Components/AppList/AppList";
import AppMap from "./Components/AppMap/AppMap";
import { CssBaseline, Grid } from "@material-ui/core";

function App() {
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
