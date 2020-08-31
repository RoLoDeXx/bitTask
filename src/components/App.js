import React from "react";
import NavBar from "./Navbar";
import Drawer from "./Drawer/Drawer.js";
import Chat from "./Chat";
import UserContext from "../contexts/UserContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <React.Fragment>{children}</React.Fragment>}
    </div>
  );
}

const App = () => {
  const [name, setName] = React.useState("");
  const [chats, setChats] = React.useState([]);
  const [value, setValue] = React.useState(true);
  const [filter, setFilter] = React.useState("");

  return (
    <div className="main d-flex flex-column wrapper">
      <NavBar />
      <UserContext.Provider
        value={{ name, setName, chats, setChats, setValue, filter, setFilter }}
      >
        <div className="grid shadow bg-white flex-grow-1">
          <div className="section-paper rounded-0 d-none d-md-block">
            <Drawer />
          </div>
          <div className="section-paper border-left rounded-0 d-none d-md-block">
            <Chat></Chat>
          </div>
          <div className="d-md-none">
            <TabPanel className="" value={value} index={true}>
              <Drawer />
            </TabPanel>
            <TabPanel className="mob-section" value={value} index={false}>
              <Chat />
            </TabPanel>
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
