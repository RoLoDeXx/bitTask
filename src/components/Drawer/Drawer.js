import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import Search from "./Search";
import faker from "faker";
import API from "../placeholders/jsonPlaceholder";
import { Divider } from "@material-ui/core";

const Drawer = () => {
  const [dummy, setDummy] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await API.get("/users");
      setDummy(res.data);
    };
    loadData();
  }, []);

  const renderRecents = dummy.map((item) => (
    <Contact
      name={item.username}
      imgSrc={faker.random.image()}
      date={faker.date.weekday()}
      key={item.id}
      id={item.id}
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
