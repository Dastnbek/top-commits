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
  const [date, setDate] = useState("");
  const [mode, setMode] = useState("public");

  const getTopUsers = async () => {
    const result = await commitsApi.getUsers;
    setLoading(false);
    setDate(result.data.users.generated.split(" ")[0]);
    setPublicUsers(result.data.users.users);
    setPrivateUsers(result.data.users.private_users);
  };

  const handleChange = (val) => {
    setLoading(true);
    setFiltered([]);
    setMode(val.target.value);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleSubmit = (event, searchText) => {
    event.preventDefault();
    let arrOfUsers = [];
    mode === "public"
      ? (arrOfUsers = [...publicUsers])
      : (arrOfUsers = [...privateUsers]);

    const filtered = arrOfUsers.filter(
      (user) =>
        user.login.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );

    setFiltered(filtered);
  };

  const renderUsers = () => {
    let arrOfUsers = [];

    if (filtered.length > 0) {
      arrOfUsers = [...filtered];
    } else {
      mode === "public"
        ? (arrOfUsers = [...publicUsers])
        : (arrOfUsers = [...privateUsers]);
    }

    return arrOfUsers.map((user) => (
      <Grid item xs={4} key={user.rank}>
        <CustomCard
          name={user.login}
          company={user.company}
          contributions={user.contributions}
          img={user.avatarUrl}
          rank={user.rank}
        />
      </Grid>
    ));
  };
  useEffect(() => {
    getTopUsers();
  }, []);

  console.log(filtered);
  return (
    <>
      <Container maxWidth="lg">
        <Navbar onChange={handleChange} onSubmit={handleSubmit} date={date} />

        <Grid container spacing={1}>
          {loading ? <Loader loading={loading} /> : renderUsers()}
        </Grid>
      </Container>
    </>
  );
};

export default App;
