import React, { useContext } from "react";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import Actions from "./Actions";
import Details from "./Details";
import Message from "./Message";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../../contexts/UserContext";

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

  const { name, chats } = useContext(UserContext);
  const renderChat = chats.map((chat) => {
    if (!chat.byMe)
      return (
        <Message
          sentByMe={chat.name.length % 2 === 0}
          key={chat.id}
          body={chat.name}
        ></Message>
      );
    else
      return (
        <Message
          sentByMe={chat.byMe}
          key={Math.floor(Math.random() * 99999 + 50)}
          body={chat.body}
        ></Message>
      );
  });

  return name.length ? (
    <div className={"d-flex flex-column " + classes.chatWrap}>
      <Details name={name}></Details>
      <div className="flex-grow-1 h-100 overflow-auto  chat-section">
        {renderChat}
      </div>
      <Actions></Actions>
    </div>
  ) : (
    <div className="no-chat">
      <img
        className="d-block mx-auto"
        src={require("../../no-chat.png")}
        alt="no-chat img"
      />
      <p className="text-center font-architect">
        Things seem pretty lonely here! <SentimentDissatisfiedIcon />
      </p>
    </div>
  );
};

export default Chat;
