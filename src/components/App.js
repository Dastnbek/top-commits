import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import CustomCard from "./card";
import Loader from "./loader";
import commitsApi from "../api";
import Navbar from "./navbar";

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
    const filtered = publicUsers.filter(
      (user) =>
        user.login.toLowerCase().indexOf(val.target.value.toLowerCase()) !== -1
    );

    setFiltered(filtered);
  };
  useEffect(() => {
    getTopUsers();
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <Navbar onChange={handleChange} onSearch={handleSearch} />

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
