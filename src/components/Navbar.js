import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: "#fff",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar + " shadow-sm"} position="static">
        <Toolbar>
          <img src={require("../logo.svg")} className="logo" alt="site-logo" />

          <Typography
            variant="h6"
            className={
              classes.title + " text-dark font-montserrat font-weight-bold"
            }
          >
            Ω λ XL9
          </Typography>
          {/* <IconButton
            edge="start"
            className={classes.menuButton + " d-bnone"}
            color="inherit"
            aria-label="menu"
          >
            <AddIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
