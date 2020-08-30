import React, { useContext } from "react";
import { Typography, Divider, IconButton } from "@material-ui/core";
import UserContext from "../../contexts/UserContext";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const Details = ({ name }) => {
  const { setName } = useContext(UserContext);

  const handleCloseChat = () => {
    setName("");
  };

  return (
    <div>
      <div className="py-2 px-4 d-flex justify-content-between align-items-center">
        <Typography
          variant="h5"
          color="initial"
          className="font-montserrat font-weight-bold"
        >
          {name}
        </Typography>

        <IconButton aria-label="search" onClick={handleCloseChat}>
          <CloseOutlinedIcon />
        </IconButton>
      </div>
      <Divider />
    </div>
  );
};

export default Details;
