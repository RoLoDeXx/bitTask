import React from "react";
import NavBar from "./Navbar";
import Drawer from "./Drawer/Drawer.js";
import Chat from "./Chat";
import UserContext from "../contexts/UserContext";

const App = () => {
  const [name, setName] = React.useState("");
  const [chats, setChats] = React.useState([]);

  return (
    <div className="main d-flex flex-column wrapper">
      <NavBar />
      <UserContext.Provider value={{ name, setName, chats, setChats }}>
        <div className="grid shadow bg-white flex-grow-1">
          <div className="section-paper rounded-0">
            <Drawer />
          </div>
          <div className="d-none d-md-block section-paper border-left rounded-0">
            <Chat></Chat>
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
