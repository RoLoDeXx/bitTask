import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Divider, Paper, InputBase } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import UserContext from "../../contexts/UserContext";

const Actions = () => {
  const { chats, setChats } = useContext(UserContext);

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "4rem",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }));
  const classes = useStyles();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.length) return;
    setChats([...chats, { byMe: true, body: query }]);
    setQuery("");
  };

  useEffect(() => {
    let cs = document.querySelector(".chat-section");
    cs.scrollTo(0, cs.scrollHeight);
  }, [chats]);

  return (
    <div>
      <Divider />
      <Paper
        component="form"
        onSubmit={(e) => handleSubmit(e)}
        className={classes.root}
      >
        <InputBase
          className={classes.input}
          placeholder="Send a message..."
          inputProps={{ "aria-label": "search google maps" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="send message"
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Actions;
