import React, { useEffect, useState } from "react";
import Search from "./search";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CustomCard from "./card";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Loader from "./loader";

import commitsApi from "../api";

const App = () => {
  const [publicUsers, setPublicUsers] = useState([]);
  const [privateUsers, setPrivateUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);

  const [mode, setMode] = useState("public");
  const getTopUsers = async () => {
    const result = await commitsApi.getUsers;
    setLoading(false);
    setPublicUsers(result.data.users.users);
    setPrivateUsers(result.data.users.private_users);
  };

  const handleChange = (val) => {
    setLoading(true);
    setMode(val.target.value);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleSearch = (val) => {
    console.log(val.target.value);

    const filtered = publicUsers.filter(
      (user) =>
        user.login.toLowerCase().indexOf(val.target.value.toLowerCase()) !== -1
    );

    console.log(filtered.length);

    setFiltered(filtered);
  };
  useEffect(() => {
    getTopUsers();
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={12}
            style={{ marginTop: "10px", marginBottom: "20px" }}
          >
            <Grid container justify="center" spacing={2}>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="public"
                onChange={handleChange}
              >
                <FormControlLabel
                  value="public"
                  control={<Radio color="primary" />}
                  label="Public"
                  labelPlacement="start"
                />

                <FormControlLabel
                  value="private"
                  control={<Radio color="primary" />}
                  label="Private"
                  labelPlacement="start"
                />
              </RadioGroup>
              <Search onSearch={handleSearch} />
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          {loading ? (
            <Loader loading={loading} />
          ) : filtered.length === 0 ? (
            <>
              {mode === "public"
                ? publicUsers.map((user) => (
                    <Grid item xs={4} key={user.rank}>
                      <CustomCard
                        name={user.login}
                        company={user.company}
                        contributions={user.contributions}
                        img={user.avatarUrl}
                        rank={user.rank}
                      />
                    </Grid>
                  ))
                : privateUsers.map((user) => (
                    <Grid item xs={4} key={user.rank}>
                      <CustomCard
                        name={user.login}
                        company={user.company}
                        contributions={user.contributions}
                        img={user.avatarUrl}
                        rank={user.rank}
                      />
                    </Grid>
                  ))}
            </>
          ) : (
            filtered.map((user) => (
              <Grid item xs={4} key={user.rank}>
                <CustomCard
                  name={user.login}
                  company={user.company}
                  contributions={user.contributions}
                  img={user.avatarUrl}
                  rank={user.rank}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};

export default App;
