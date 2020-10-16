import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Divider, Paper } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/Camera";
import MicIcon from "@material-ui/icons/Mic";

const Actions = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      // height: "4rem",
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
      <Paper className={classes.root}>
        <div className="d-block mx-auto">
          <IconButton
            type="submit"
            className={classes.iconButton + " mx-auto"}
            aria-label="send message"
          >
            <MicIcon />
          </IconButton>
          <IconButton
            type="submit"
            className={classes.iconButton + " mx-auto"}
            aria-label="send message"
          >
            <CameraIcon />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
};

export default Actions;
