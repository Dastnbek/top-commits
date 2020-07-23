import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",

    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputRoot: {
    background: "white",
    border: "1px solid black",
    borderRadius: "5px",
    color: "black",
    width: "100%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    zIndex: 2,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "35ch",
    },
  },
}));

const CustomSearch = ({ onSubmit }) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  return (
    <div className={classes.search}>
      <form onSubmit={(event) => onSubmit(event, search)}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>

        <InputBase
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          placeholder="Search for GitHub user"
          inputProps={{ "aria-label": "search" }}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </div>
  );
};

export default CustomSearch;
