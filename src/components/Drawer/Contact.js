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

const loadChat = () => {
  // how do you load chat now ?
};

const Contact = ({ name, imgSrc }) => {
  const classes = useStyles();
  return (
    <div className={"border-bottom p-3 " + classes.root} onClick={loadChat}>
      <div className="d-flex align-items-start">
        <img className={classes.img} src={imgSrc} alt="logo" />
        <div className="ml-3 ">
          <p className="m-0 font-montserrat">{name}</p>
          <p className="text-dark font-montserrat">Message</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
