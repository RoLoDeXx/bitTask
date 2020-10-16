import React, { useContext } from "react";
import Actions from "./Actions";
import Details from "./Details";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../../contexts/UserContext";
import User from "./User";
import YouTube from "react-youtube";

const Chat = () => {
  const useStyles = makeStyles(() => ({
    title: {
      flexGrow: 1,
    },
    navbar: {
      backgroundColor: "#7462f2",
      height: "4rem",
    },
    chatWrap: {
      height: "100%",
    },
  }));
  const classes = useStyles();

  const { name } = useContext(UserContext);
  const opts = {
    height: "640",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return name.length ? (
    <div className={"d-flex flex-column " + classes.chatWrap}>
      <Details name={`${name}'s class`}></Details>
      <div className="flex-grow-1 h-100 overflow-auto chat-section">
        <div className="row m-0">
          <div className=" col-lg-9">
            <YouTube videoId="4HDSQz91hyE" opts={opts} />
          </div>
          <div className=" col-lg-3">
            <User name="Samarth" />
            <User name="Akshay" />
          </div>
        </div>
      </div>
      <Actions />
    </div>
  ) : (
    <div className="d-flex flex-column justify-content-around h-100">
      <div className="no-chat p-3">
        <img
          className="d-block mx-auto"
          src={require("../../no-chat.png")}
          alt="no-chat img"
        />
        <h3 className="text-center font-montserrat">
          Things seem pretty lonely here.
        </h3>
        <p className="text-center font-montserrat">
          Tap on a contact to join a class!
        </p>
      </div>
    </div>
  );
};

export default Chat;
