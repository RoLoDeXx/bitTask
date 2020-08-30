import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import API from "../placeholders/jsonPlaceholder";

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
  tinyTxt: {
    fontSize: "12px",
  },

  online: {
    color: "#7462f2;",
  },
}));

const loadChat = async (id) => {
  let res = await API.get(`/posts/${id}/comments`);
  console.log(res.data);
  // update state here
};

const Contact = ({ name, imgSrc, id }) => {
  const classes = useStyles();
  return (
    <div
      className={"border-bottom p-3 " + classes.root}
      onClick={() => loadChat(id)}
    >
      <div className="d-flex align-items-start">
        <img className={classes.img} src={imgSrc} alt="logo" />
        <div className="ml-3 ">
          <p className="m-0 font-montserrat">{name}</p>
          <p className={"text-muted font-montserrat " + classes.tinyTxt}>
            {name.length % 4 === 0 ? (
              <span className={classes.online}>Online</span>
            ) : (
              <span>Offline</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
