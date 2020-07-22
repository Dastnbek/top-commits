import React from "react";
import Grid from "@material-ui/core/Grid";
import { RadioBtn, CustomSearch } from "./moleculas";

const Navbar = ({ onChange, onSubmit, date }) => {
  return (
    <Grid container>
      <Grid item xs={12} style={{ marginTop: "10px", marginBottom: "20px" }}>
        <Grid container justify="center" spacing={2}>
          <RadioBtn onChange={onChange} />
          <CustomSearch onSubmit={onSubmit} />
          <div style={{ lineHeight: "35px", fontSize: "20px" }}>
            <span>
              Generated at <span style={{ fontWeight: "600" }}> {date} </span>{" "}
            </span>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
