import React from "react";
import Grid from "@material-ui/core/Grid";
import { RadioBtn, CustomSearch } from "./moleculas";

const Navbar = ({ onChange, onSubmit }) => {
  return (
    <Grid container>
      <Grid item xs={12} style={{ marginTop: "10px", marginBottom: "20px" }}>
        <Grid container justify="center" spacing={2}>
          <RadioBtn onChange={onChange} />
          <CustomSearch onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
