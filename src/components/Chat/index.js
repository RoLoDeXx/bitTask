import React, { useContext } from "react";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import Actions from "./Actions";
import Details from "./Details";
import Message from "./Message";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../../contexts/UserContext";

const Chat = () => {
  const useStyles = makeStyles((theme) => ({
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
  // console.log(chats);
  const renderChat = chats.map((chat) => (
    <Message
      sentByMe={chat.name.length % 2 === 0}
      key={chat.id}
      body={chat.name}
    ></Message>
  ));

  return name.length ? (
    <div className={"d-flex flex-column " + classes.chatWrap}>
      <Details name={name}></Details>
      <div className="flex-grow-1 h-100 overflow-auto">{renderChat}</div>
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
