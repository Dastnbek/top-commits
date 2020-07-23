import React from "react";
import Grid from "@material-ui/core/Grid";
import { RadioBtn, CustomSearch } from "./moleculas";
import styled from "styled-components";

const DateContainer = styled.div`
  line-height: 35px;
  font-size: 20px;
`;

const TheDate = styled.span`
  font-weight: 600;
`;

const Navbar = ({ onChange, onSubmit, date }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        <Grid container justify="center" spacing={2}>
          <Grid sm={3} style={{ textAlign: "center" }}>
            <RadioBtn onChange={onChange} />
          </Grid>

          <Grid sm={6} style={{ textAlign: "center" }}>
            <CustomSearch onSubmit={onSubmit} />
          </Grid>
          <Grid sm={3} style={{ textAlign: "center" }}>
            <DateContainer>
              <span>
                Generated at <TheDate> {date} </TheDate>
              </span>
            </DateContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
