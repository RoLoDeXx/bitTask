import React from "react";
import NavBar from "./Navbar";
import Drawer from "./Drawer/Drawer.js";
import Chat from "./Chat";

const App = () => {
  return (
    <div className="main">
      <div className="d-flex flex-column wrapper">
        <NavBar />
        <div className="grid shadow">
          <div className="bg-white d-none d-md-block section-paper rounded-0">
            <Drawer />
          </div>
          <div className="bg-white section-paper border-left rounded-0">
            <Chat name="Annie Lubowitz"></Chat>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
