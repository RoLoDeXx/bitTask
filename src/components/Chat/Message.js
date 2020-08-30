import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  sentMsg: {
    padding: "1rem",
    textAlign: "right",
    background: "#2a2f32dd",
    color: "white",
    float: "right",
    borderRadius: "5px",
    borderTopRightRadius: "0",
    marginRight: "5%",
    marginLeft: "25%",
  },
  receivedMsg: {
    padding: "1rem",
    textAlign: "left",
    float: "left",
    borderRadius: "10px",
    borderTopLeftRadius: "0",
    background: "#2a2f3222",
    marginLeft: "5%",
    marginRight: "25%",
  },
}));

const Message = ({ time, body, sentByMe }) => {
  const classes = useStyles();

  return (
    <div>
      <p className={sentByMe === true ? classes.sentMsg : classes.receivedMsg}>
        lorem sh dajhfjsdhjfjf jhdhfjsahdfsjdhf sjdhgf djshgfjdghhf jsdhfasjhg
        jsdg fsajhgbf
      </p>
    </div>
  );
};

export default Message;
