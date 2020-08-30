import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Divider, Paper, InputBase } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const Actions = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "4rem",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Divider />
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Send a message..."
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Actions;
