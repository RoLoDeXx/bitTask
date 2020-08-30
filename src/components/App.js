import React from "react";
import NavBar from "./Navbar";
import Drawer from "./Drawer/Drawer.js";
import Chat from "./Chat";

const App = () => {
  return (
    <div className="main d-flex flex-column wrapper">
      <NavBar />
      <div className="grid shadow bg-white flex-grow-1">
        <div className="section-paper rounded-0">
          <Drawer />
        </div>
        <div className="d-none d-md-block section-paper border-left rounded-0">
          <Chat name="Annie Lubowitz"></Chat>
        </div>
      </div>
    </div>
  );
};

export default App;
