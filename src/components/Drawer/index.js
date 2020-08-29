import React from "react";
import Contact from "./Contact";
import Search from "./Search";
import faker from "faker";

const index = () => {
  let arr = Array(5).fill(1);

  const renderRecents = arr.map(() => (
    <Contact
      name={faker.name.findName()}
      imgSrc={faker.image.imageUrl()}
      date={faker.date.recent()}
    />
  ));

  return (
    <div className="drawer">
      <Search />
      {renderRecents}
    </div>
  );
};

export default index;
