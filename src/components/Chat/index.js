import React from "react";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import Actions from "./Actions";
import Details from "./Details";

const Chat = ({ name }) => {
  return name ? (
    <div>
      <Details />
      <Actions />
    </div>
  ) : (
    <div className="no-chat">
      <img className="d-block mx-auto" src={require("../../no-chat.png")} />
      <p className="text-center font-architect">
        Things seem pretty lonely here! <SentimentDissatisfiedIcon />
      </p>
    </div>
  );
};

export default Chat;
