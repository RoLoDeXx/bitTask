import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  img: {
    height: "3rem",
    width: "3rem",
    borderRadius: "50%",
    objectFit: "cover",
  },
  root: {
    cursor: "pointer",
    "&:hover": {
      background: "#eee",
    },
  },
}));

const Contact = ({ name, imgSrc }) => {
  const classes = useStyles();
  return (
    <div className={"border-bottom p-3 " + classes.root}>
      <div className="d-flex align-items-start">
        <img className={classes.img} src={imgSrc} alt="logo" />
        <div className="ml-3">
          <p className="m-0 ">{name}</p>
          <p className="text-dark">Message</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
