import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import UserContext from "../../contexts/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "4rem",
    boxShadow: "none",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function Search() {
  const { setFilter } = useContext(UserContext);
  const classes = useStyles();
  const [query, setQuery] = useState("");

  return (
    <Paper className={classes.root}>
      <InputBase
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={classes.input}
        placeholder="Search Tint"
        inputProps={{ "aria-label": "search google maps" }}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setFilter(e.target.value);
        }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
