import React, { useEffect } from "react";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import Actions from "./Actions";
import Details from "./Details";
import Message from "./Message";
import { makeStyles } from "@material-ui/core/styles";

const Chat = ({ name }) => {
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

  useEffect(() => {
    return () => {};
  }, []);

  // const renderChat = chats.map((e) => (
  //   <Message sentByMe={e % 2 === 0}></Message>
  // ));

  return name.length ? (
    <div className={"d-flex flex-column " + classes.chatWrap}>
      <Details name="Lorem Ipsum"></Details>
      <div className="flex-grow-1 h-100 overflow-auto">
        {/* {renderChat} */}
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
