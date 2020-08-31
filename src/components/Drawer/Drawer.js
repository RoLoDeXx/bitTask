import React, { useState, useEffect, useContext } from "react";
import Contact from "./Contact";
import Search from "./Search";
import faker from "faker";
import API from "../placeholders/jsonPlaceholder";
import { Divider } from "@material-ui/core";
import UserContext from "../../contexts/UserContext";

const Drawer = () => {
  const { filter } = useContext(UserContext);
  const [dummy, setDummy] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await API.get("/users");
      setDummy(res.data);
    };
    loadData();
  }, []);

  const renderRecents = dummy
    .filter((item) => item.username.includes(filter))
    .map((filtItem) => (
      <Contact
        name={filtItem.username}
        imgSrc={faker.image.imageUrl(filtItem.username.length * 10)}
        key={filtItem.id}
        id={filtItem.id}
      />
    ));

  return (
    <div className="drawer">
      <Search />
      <Divider />
      {renderRecents}
    </div>
  );
};

export default Drawer;
