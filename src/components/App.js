import React, { useState } from "react";
import NavBar from "./Navbar";
import Drawer from "./Drawer";
import Chat from "./Chat";
const App = () => {
  const [name, setName] = useState(null);
  return (
    <div className="main">
      <div className="d-flex flex-column wrapper">
        <NavBar />
        <div className="grid shadow">
          <div className="">
            <div className="bg-white d-none d-md-block section-paper rounded-0">
              <Drawer />
            </div>
          </div>
          <div className="">
            <div className="bg-white section-paper border-left rounded-0">
              <Chat name={name}></Chat>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
