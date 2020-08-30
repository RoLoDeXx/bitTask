import React from "react";
import { Typography, Divider, IconButton } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
const Details = () => {
  const handleCloseChat = () => {
    alert("make person title to '' and if sm pop up modal");
  };

  return (
    <div>
      <div className="py-2 px-4 d-flex justify-content-between align-items-center">
        <Typography
          variant="h5"
          color="initial"
          className="font-montserrat font-weight-bold"
        >
          Lorem
        </Typography>

        <IconButton aria-label="search">
          <CloseOutlinedIcon onClick={handleCloseChat} />
        </IconButton>
      </div>
      <Divider />
    </div>
  );
};

export default Details;
