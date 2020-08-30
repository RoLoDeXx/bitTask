import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  sentMsg: {
    padding: "1rem",
    textAlign: "right",
    background: "#7462f2dd",
    color: "white",
    borderRadius: "50px",
    borderTopRightRadius: "0",
  },
  receivedMsg: {
    padding: "1rem",
    textAlign: "left",
    borderRadius: "50px",
    borderTopLeftRadius: "0",
    background: "#7462f222",
  },
}));

const Message = ({ time, body, sentByMe }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {sentByMe === true ? (
        <div className="mt-3 d-flex flex-row-reverse mr-4">
          <p className={classes.sentMsg}>{body}</p>
        </div>
      ) : (
        <div className="mt-3 d-flex ml-4">
          <p className={classes.receivedMsg}>{body}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Message;
